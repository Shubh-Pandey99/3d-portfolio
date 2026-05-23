import * as THREE from "three";
import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  RapierRigidBody,
} from "@react-three/rapier";

interface Certification {
  name: string;
  issuer: string;
  validity: string;
  badge: string;
}

interface CertificationsCanvasProps {
  items: Certification[];
  onHoverItem: (item: Certification | null) => void;
}

const textureLoader = new THREE.TextureLoader();
textureLoader.setCrossOrigin("anonymous");

// Cylinder geometries for backing and textures
const cylinderGeometry = new THREE.CylinderGeometry(0.9, 0.9, 0.12, 32);
const planeGeometry = new THREE.PlaneGeometry(1.4, 1.4);

interface BadgeTokenProps {
  item: Certification;
  texture: THREE.Texture;
  onHover: (item: Certification | null) => void;
  scale: number;
}

function BadgeToken({ item, texture, onHover, scale }: BadgeTokenProps) {
  const api = useRef<RapierRigidBody | null>(null);
  const meshRef = useRef<THREE.Group | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const vec = useRef(new THREE.Vector3());
  const randSpeed = useRef(0.2 + Math.random() * 0.8);
  const randOffset = useRef(Math.random() * Math.PI * 2);

  // Apply a central force to keep tokens clustered together, and add a subtle hover spin
  useFrame((_state, delta) => {
    if (!api.current) return;
    delta = Math.min(0.1, delta);

    // Dynamic central gravity force to keep badges neatly in view
    const translation = api.current.translation();
    const impulse = vec.current
      .copy(translation)
      .normalize()
      .multiply(
        new THREE.Vector3(
          -45 * delta * scale,
          -120 * delta * scale,
          -45 * delta * scale
        )
      );

    api.current.applyImpulse(impulse, true);

    // Subtle ambient rotation to showcase the 3D metallic depth
    if (meshRef.current) {
      if (isHovered) {
        // Spin faster and scale slightly on hover
        meshRef.current.rotation.y += delta * 2.5;
        const targetScale = scale * 1.25;
        meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
      } else {
        // Slow ambient wobble/spin
        meshRef.current.rotation.y = Math.sin(_state.clock.elapsedTime * randSpeed.current + randOffset.current) * 0.4;
        meshRef.current.rotation.x = Math.PI / 2 + Math.cos(_state.clock.elapsedTime * 0.3) * 0.1;
        meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
      }
    }
  });

  return (
    <RigidBody
      linearDamping={0.8}
      angularDamping={0.2}
      friction={0.3}
      position={[
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 2,
      ]}
      ref={api}
      colliders={false}
    >
      {/* Physics collider - slightly larger than the visual cylinder for smooth interactions */}
      <BallCollider args={[0.95 * scale]} />
      
      <group
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setIsHovered(true);
          onHover(item);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setIsHovered(false);
          onHover(null);
          document.body.style.cursor = "auto";
        }}
      >
        {/* Metallic Backing Token */}
        <mesh castShadow receiveShadow geometry={cylinderGeometry}>
          <meshPhysicalMaterial
            color="#20150d"
            roughness={0.25}
            metalness={0.85}
            clearcoat={0.6}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Front Badge Face print */}
        <mesh
          position={[0, 0.062, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          geometry={planeGeometry}
        >
          <meshBasicMaterial map={texture} transparent depthWrite={false} />
        </mesh>

        {/* Back Badge Face print (shows when rotating) */}
        <mesh
          position={[0, -0.062, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          geometry={planeGeometry}
        >
          <meshBasicMaterial map={texture} transparent depthWrite={false} />
        </mesh>
      </group>
    </RigidBody>
  );
}

// Mouse kinematic collider to interact with the badges
function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1.5]} />
    </RigidBody>
  );
}

const CertificationsCanvas = ({ items, onHoverItem }: CertificationsCanvasProps) => {
  // Pre-load all textures
  const loadedTextures = useMemo(() => {
    return items.map((item) => {
      const tex = textureLoader.load(item.badge);
      // Maximize clarity for badge textures
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      return tex;
    });
  }, [items]);

  // Distribute badge scales slightly for visual organic variation
  const itemScales = useMemo(() => {
    return items.map((_, index) => {
      // Primary / Professional certs are slightly larger
      if (index === 0 || index === 1) return 1.05;
      return 0.9;
    });
  }, [items]);

  return (
    <Canvas
      shadows
      gl={{ alpha: true, stencil: false, depth: true, antialias: true }}
      camera={{ position: [0, 0, 14], fov: 36, near: 1, far: 50 }}
      onCreated={(state) => (state.gl.toneMappingExposure = 1.3)}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.2} />
      <spotLight
        position={[15, 20, 15]}
        penumbra={1}
        angle={0.25}
        color="#ff8c42"
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[-5, 5, 8]} intensity={1.5} color="#ffffff" />
      
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {items.map((item, i) => (
          <BadgeToken
            key={i}
            item={item}
            texture={loadedTextures[i]}
            onHover={onHoverItem}
            scale={itemScales[i]}
          />
        ))}
      </Physics>

      <Environment
        files="/models/char_enviorment.hdr"
        environmentIntensity={0.6}
        environmentRotation={[0, 3, 1]}
      />
      <EffectComposer enableNormalPass={false}>
        <N8AO color="#1a0a02" aoRadius={1.5} intensity={1.2} />
      </EffectComposer>
    </Canvas>
  );
};

export default CertificationsCanvas;
