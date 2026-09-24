import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial, Icosahedron } from '@react-three/drei'

function PricingIcosahedron() {
  const meshRef = useRef()
  const ringRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25
      meshRef.current.rotation.y += delta * 0.4
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.15
      ringRef.current.rotation.y += delta * 0.2
      ringRef.current.rotation.z += delta * 0.3
    }
  })

  return (
    <group>
      <Icosahedron ref={meshRef} args={[1, 1]} position={[0, 0, 0]}>
        <MeshWobbleMaterial
          color="#EFAEE3"
          attach="material"
          factor={0.25}
          speed={1.2}
          roughness={0.15}
          metalness={0.7}
        />
      </Icosahedron>
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 12, 120]} />
        <meshStandardMaterial
          color="#F6F1EA"
          metalness={0.5}
          roughness={0.2}
          emissive="#EFAEE3"
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  )
}

export default PricingIcosahedron
