import React, { useMemo } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BoxGeometry, MeshStandardMaterial } from "three";

// Extend Three.js objects

const Bar = ({ position, args, color }: any) => {
  // Create a memoized geometry
  const geometry = useMemo(() => new BoxGeometry(...args), [args]);
  // Create a memoized material
  const material = useMemo(() => new MeshStandardMaterial({ color }), [color]);

  return <mesh position={position} geometry={geometry} material={material} />;
};

const BarChart3D = ({ data }: any) => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "lime",
    "pink",
  ];

  return (
    <Canvas style={{ height: "500px", width: "100%" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {data.map((value: any, index: any) => (
        <Bar
          key={index}
          position={[index * 1.5, value / 2, 0]}
          args={[1, value, 1]}
          color={colors[index % colors.length]}
        />
      ))}
    </Canvas>
  );
};

export default BarChart3D;
