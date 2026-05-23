import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();

// One image per skill — PNG only (SVGs don't render in WebGL)
const skills = [
  { name: "AWS",          url: "/images/aws.png",          scale: 1.0 },
  { name: "GCP",          url: "/images/gcp.png",          scale: 0.9 },
  { name: "Azure",        url: "/images/azure.png",        scale: 0.9 },
  { name: "Kubernetes",   url: "/images/kubernetes.png",   scale: 1.0 },
  { name: "Terraform",    url: "/images/terraform.png",    scale: 0.9 },
  { name: "Docker",       url: "/images/docker.png",       scale: 0.9 },
  { name: "Helm",         url: "/images/helm.png",         scale: 0.8 },
  { name: "Python",       url: "/images/python.png",       scale: 0.9 },
  { name: "Bash",         url: "/images/bash.png",         scale: 0.8 },
  { name: "Ansible",      url: "/images/ansible.png",      scale: 0.8 },
  { name: "Prometheus",   url: "/images/prometheus.png",   scale: 0.85 },
  { name: "Grafana",      url: "/images/grafana.png",      scale: 0.85 },
  { name: "Datadog",      url: "/images/datadog.png",      scale: 0.85 },
  { name: "GitLab CI",    url: "/images/gitlab.png",       scale: 0.85 },
  { name: "Jenkins",      url: "/images/jenkins.png",      scale: 0.8 },
  { name: "TypeScript",   url: "/images/typescript.png",   scale: 0.8 },
  { name: "Linux",        url: "/images/linux.png",        scale: 0.85 },
  { name: "FastAPI",      url: "/images/fastapi.png",      scale: 0.8 },
];

const sphereGeometry = new THREE.SphereGeometry(1, 40, 40);

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -30 * delta * scale,
          -80 * delta * scale,
          -30 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={2.5}
      angularDamping={0.4}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
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
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // One unique texture per skill
  const textures = useMemo(() => {
    return skills.map((s) => textureLoader.load(s.url));
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) => {
        // Ensure texture is fully lit — logos must be visible
        texture.colorSpace = THREE.SRGBColorSpace;
        return new THREE.MeshStandardMaterial({
          map: texture,
          color: 0xffffff,
          emissive: 0xffffff,
          emissiveMap: texture,
          emissiveIntensity: 1.0,
          metalness: 0.0,
          roughness: 0.65,
        });
      }
    );
  }, [textures]);

  return (
    <div className="techstack">
      <h2>TECH ARSENAL</h2>

      <Canvas
        shadows={false}
        gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 2.5)}
        className="tech-canvas"
      >
        {/* Strong ambient so logos are always visible */}
        <ambientLight intensity={3.5} />
        {/* Front-facing fill light to illuminate logos */}
        <directionalLight position={[0, 0, 10]} intensity={3.0} />
        <directionalLight position={[0, 5, 5]} intensity={2.0} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          intensity={2}
        />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {skills.map((skill, i) => (
            <SphereGeo
              key={skill.name}
              scale={skill.scale}
              material={materials[i]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={1.0}
          environmentRotation={[0, 4, 2]}
        />
      </Canvas>
    </div>
  );
};

export default TechStack;
