import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function NetworkGraph() {
  const points = useMemo(() => {
    const pts = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3 + Math.random() * 1;
      pts.push([
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * radius - 5
      ]);
    }
    return pts;
  }, []);

  const nodeRefs = useRef([]);
  const lineRefs = useRef([]);

  const connections = useMemo(() => {
    const conns = [];
    points.forEach((point, i) => {
      for (let j = i + 1; j < points.length; j++) {
        if (Math.random() > 0.85) {
          conns.push({
            points: [
              new THREE.Vector3(...point),
              new THREE.Vector3(...points[j])
            ]
          });
        }
      }
    });
    return conns;
  }, [points]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    nodeRefs.current.forEach((node, i) => {
      if (node) {
        node.position.y += Math.sin(time * 0.5 + i) * 0.001;
      }
    });
  });

  return (
    <group>
      {points.map((point, i) => (
        <Sphere
          key={i}
          ref={el => nodeRefs.current[i] = el}
          position={point}
          args={[0.05]}
        >
          <meshBasicMaterial color="#FB923C" />
        </Sphere>
      ))}
      {connections.map((conn, i) => (
        <Line
          key={i}
          ref={el => lineRefs.current[i] = el}
          points={conn.points}
          color="#1E3A8A"
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  );
}
