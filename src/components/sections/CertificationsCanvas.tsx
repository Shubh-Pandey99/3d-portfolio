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

const cylinderGeometry = new THREE.CylinderGeometry(0.85, 0.85, 0.14, 40);
const planeGeometry = new THREE.PlaneGeometry(1.35, 1.35);

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
  const randSpeed = useRef(0.15 + Math.random() * 0.3);
  const randOffset = useRef(Math.random() * Math.PI * 2);

  useFrame((_state, delta) => {
    if (!api.current) return;
    delta = Math.min(0.05, delta);

    // Gentle central gravity - much calmer than before
    const translation = api.current.translation();
    const impulse = vec.current
      .copy(translation)
      .normalize()
      .multiply(
        new THREE.Vector3(
          -20 * delta * scale,
          -40 * delta * scale,
          -20 * delta * scale
        )
      );

    api.current.applyImpulse(impulse, true);

    if (meshRef.current) {
      if (isHovered) {
        // Gentle spin on hover
        meshRef.current.rotation.y += delta * 1.2;
        const targetScale = scale * 1.18;
        meshRef.current.scale.lerp(
          new THREE.Vector3(targetScale, targetScale, targetScale),
          0.12
        );
      } else {
        // Very slow ambient tilt - nearly stationary for easy clicking
        meshRef.current.rotation.y =
          Math.sin(
            _state.clock.elapsedTime * randSpeed.current + randOffset.current
          ) * 0.15;
        meshRef.current.rotation.x =
          Math.PI / 2 + Math.cos(_state.clock.elapsedTime * 0.2) * 0.06;
        meshRef.current.scale.lerp(
          new THREE.Vector3(scale, scale, scale),
          0.08
        );
      }
    }
  });

  return (
    <RigidBody
      linearDamping={4.5}
      angularDamping={8}
      friction={0.8}
      position={[
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 1,
      ]}
      ref={api}
      colliders={false}
    >
      {/* Larger collider for easier clicking */}
      <BallCollider args={[1.05 * scale]} />

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
            color="#18100a"
            roughness={0.2}
            metalness={0.9}
            clearcoat={0.8}
            clearcoatRoughness={0.08}
          />
        </mesh>

        {/* Front Badge Face */}
        <mesh
          position={[0, 0.072, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          geometry={planeGeometry}
        >
          <meshBasicMaterial map={texture} transparent depthWrite={false} />
        </mesh>

        {/* Back Badge Face */}
        <mesh
          position={[0, -0.072, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          geometry={planeGeometry}
        >
          <meshBasicMaterial map={texture} transparent depthWrite={false} />
        </mesh>
      </group>
    </RigidBody>
  );
}

// Mouse kinematic collider - smaller so it doesn't throw badges as aggressively
function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.1
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
      <BallCollider args={[0.9]} />
    </RigidBody>
  );
}

const CertificationsCanvas = ({ items, onHoverItem }: CertificationsCanvasProps) => {
  const loadedTextures = useMemo(() => {
    return items.map((item) => {
      const tex = textureLoader.load(item.badge);
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      return tex;
    });
  }, [items]);

  const itemScales = useMemo(() => {
    return items.map((_, index) => {
      if (index === 0 || index === 1) return 1.0;
      return 0.88;
    });
  }, [items]);

  return (
    <Canvas
      shadows
      gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
      camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 60 }}
      onCreated={(state) => (state.gl.toneMappingExposure = 1.2)}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.4} />
      <spotLight
        position={[10, 15, 10]}
        penumbra={1}
        angle={0.3}
        color="#ff8c42"
        castShadow
        shadow-mapSize={[512, 512]}
      />
      <directionalLight position={[-5, 5, 8]} intensity={1.2} color="#ffffff" />

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
        environmentIntensity={0.5}
        environmentRotation={[0, 3, 1]}
      />
      <EffectComposer enableNormalPass={false}>
        <N8AO color="#120800" aoRadius={1.2} intensity={1.0} />
      </EffectComposer>
    </Canvas>
  );
};

export default CertificationsCanvas;
