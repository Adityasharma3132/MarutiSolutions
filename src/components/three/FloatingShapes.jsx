import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';

export default function FloatingShapes() {
  const shapes = useRef([]);
  const positions = [
    [-4, 2, -5],
    [4, -2, -3],
    [0, 3, -4],
    [-3, -3, -6],
    [3, 4, -5]
  ];

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    shapes.current.forEach((shape, i) => {
      if (shape) {
        shape.position.y += Math.sin(time + i) * 0.002;
        shape.rotation.x += 0.001;
        shape.rotation.y += 0.002;
      }
    });
  });

  return (
    <group>
      {positions.map((pos, i) => {
        const Shape = i % 2 === 0 ? Box : Sphere;
        return (
          <Shape
            key={i}
            ref={(el) => (shapes.current[i] = el)}
            position={pos}
            args={[0.8, 0.8, 0.8]}
          >
            <meshPhongMaterial
              color={i % 2 ? '#0D9488' : '#1E3A8A'}
              wireframe
              opacity={0.7}
              transparent
            />
          </Shape>
        );
      })}
    </group>
  );
}
