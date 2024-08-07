import React, { useMemo } from "react";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SphereGeometry, MeshStandardMaterial, AxesHelper } from "three";

const Bubble = ({ position, args, color }: any) => {
  // Create a memoized geometry
  const geometry = useMemo(() => new SphereGeometry(...args), [args]);
  // Create a memoized material
  const material = useMemo(() => new MeshStandardMaterial({ color }), [color]);

  return <mesh position={position} geometry={geometry} material={material} />;
};

const Axes = () => {
  const { scene } = useThree();
  useMemo(() => {
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);
    return () => {
      scene.remove(axesHelper);
    };
  }, [scene]);
  return null;
};

const BubbleChart3D = ({ data }: any) => {
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
      <Axes />
      {data.map((bubble: any, index: any) => (
        <Bubble
          key={index}
          position={[bubble.x, bubble.y, bubble.z]}
          args={[bubble.size, 32, 32]}
          color={colors[index % colors.length]}
        />
      ))}
    </Canvas>
  );
};

export default BubbleChart3D;
