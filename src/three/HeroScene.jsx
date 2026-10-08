import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, Lightformer, MeshDistortMaterial, Sphere, TorusKnot } from '@react-three/drei'

// Iridescent "liquid chrome" knot that follows the pointer slightly.
function Knot() {
  const group = useRef()
  const knot = useRef()
  const { viewport, pointer } = useThree()
  const scale = Math.min(1, viewport.width / 3.6)

  useFrame((_, delta) => {
    if (!group.current || !knot.current) return
    knot.current.rotation.x += delta * 0.12
    knot.current.rotation.y += delta * 0.2
    // ease toward the pointer for a subtle parallax
    group.current.rotation.y += (pointer.x * 0.35 - group.current.rotation.y) * 0.04
    group.current.rotation.x += (-pointer.y * 0.25 - group.current.rotation.x) * 0.04
  })

  return (
    <group position={[viewport.width * 0.2, 0.05, 0]} scale={scale}>
      <group ref={group}>
        <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.8}>
          <TorusKnot ref={knot} args={[0.9, 0.24, 220, 32]}>
            <MeshDistortMaterial
              color="#efaee3"
              distort={0.2}
              speed={1.2}
              roughness={0.12}
              metalness={0.9}
              clearcoat={1}
              clearcoatRoughness={0.1}
              iridescence={1}
              iridescenceIOR={1.4}
              iridescenceThicknessRange={[120, 420]}
              envMapIntensity={1.3}
            />
          </TorusKnot>
        </Float>
        <Sphere args={[0.2, 48, 48]} position={[-1.8, -1, 0.4]}>
          <meshStandardMaterial color="#f4f0e8" metalness={1} roughness={0.08} envMapIntensity={1.4} />
        </Sphere>
      </group>
    </group>
  )
}

// Studio lights built in code, so no HDR file has to be downloaded.
function Studio() {
  return (
    <Environment resolution={256} frames={1}>
      <Lightformer form="rect" intensity={4} position={[0, 5, -6]} scale={[12, 4, 1]} color="#ffffff" />
      <Lightformer form="ring" intensity={3} position={[-5, 1, -1]} scale={4} color="#efaee3" />
      <Lightformer form="rect" intensity={3} position={[5, -2, 2]} scale={[3, 7, 1]} color="#5ee6c8" />
      <Lightformer form="rect" intensity={2.5} position={[0, -5, 3]} scale={[8, 2, 1]} color="#8f7bff" />
    </Environment>
  )
}

export default function HeroScene({ reduced }) {
  return (
    <Canvas
      className="decorative-canvas"
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop={reduced ? 'demand' : 'always'}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.35} />
      <Studio />
      <Knot />
    </Canvas>
  )
}
