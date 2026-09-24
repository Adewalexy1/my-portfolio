import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, TorusKnot, Sphere } from '@react-three/drei'

function HeroBackground3D() {
  const knotRef = useRef()
  const smallRef = useRef()

  useFrame((state, delta) => {
    if (knotRef.current) {
      knotRef.current.rotation.x += delta * 0.1
      knotRef.current.rotation.y += delta * 0.18
    }
    if (smallRef.current) {
      smallRef.current.rotation.x -= delta * 0.3
      smallRef.current.rotation.y -= delta * 0.2
    }
  })

  return (
    <group>
      <TorusKnot
        ref={knotRef}
        args={[0.9, 0.22, 160, 24]}
        position={[1.8, 0.2, 0]}
      >
        <MeshDistortMaterial
          color="#EFAEE3"
          attach="material"
          distort={0.18}
          speed={1.3}
          roughness={0.25}
          metalness={0.75}
          transparent
          opacity={0.55}
        />
      </TorusKnot>
      <Sphere ref={smallRef} args={[0.22, 48, 48]} position={[-1.9, -0.9, 0.2]}>
        <meshStandardMaterial
          color="#F6F1EA"
          metalness={0.8}
          roughness={0.15}
          emissive="#EFAEE3"
          emissiveIntensity={0.22}
        />
      </Sphere>
    </group>
  )
}

export default HeroBackground3D
