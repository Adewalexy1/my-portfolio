import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, Lightformer, MeshDistortMaterial, Sphere } from '@react-three/drei'

function Orb() {
  const ring = useRef()
  const { viewport } = useThree()
  const scale = Math.min(1, viewport.width / 4)

  useFrame((_, delta) => {
    if (ring.current) {
      ring.current.rotation.x += delta * 0.3
      ring.current.rotation.z += delta * 0.15
    }
  })

  return (
    <group position={[viewport.width * 0.28, 0, 0]} scale={scale}>
      <Float speed={1.6} floatIntensity={0.9} rotationIntensity={0.4}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#efaee3"
            distort={0.35}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
            iridescence={1}
            iridescenceIOR={1.35}
            iridescenceThicknessRange={[100, 400]}
            envMapIntensity={1.3}
          />
        </Sphere>
        <mesh ref={ring}>
          <torusGeometry args={[1.65, 0.015, 16, 120]} />
          <meshStandardMaterial color="#f4f0e8" metalness={0.6} roughness={0.2} emissive="#efaee3" emissiveIntensity={0.2} />
        </mesh>
      </Float>
    </group>
  )
}

export default function ContactScene({ reduced }) {
  return (
    <Canvas
      className="decorative-canvas"
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduced ? 'demand' : 'always'}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.35} />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={4} position={[0, 5, -6]} scale={[12, 4, 1]} color="#ffffff" />
        <Lightformer form="ring" intensity={3} position={[-5, 1, -1]} scale={4} color="#efaee3" />
        <Lightformer form="rect" intensity={3} position={[5, -2, 2]} scale={[3, 7, 1]} color="#5ee6c8" />
      </Environment>
      <Orb />
    </Canvas>
  )
}
