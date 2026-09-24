import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Torus } from '@react-three/drei'

function Scene() {
  const sphereRef = useRef()
  const torusRef = useRef()

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.2
      sphereRef.current.rotation.y += delta * 0.3
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.4
      torusRef.current.rotation.z += delta * 0.2
    }
  })

  return (
    <group>
      <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#EFAEE3"
          attach="material"
          distort={0.4}
          speed={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <Torus ref={torusRef} args={[1.7, 0.02, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#F6F1EA"
          metalness={0.6}
          roughness={0.2}
          emissive="#EFAEE3"
          emissiveIntensity={0.1}
        />
      </Torus>
    </group>
  )
}

export default Scene
