import React, { useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";

const Bar = ({ position, args, color }: any) => {
  // Create a memoized geometry
  const geometry = useMemo(() => new THREE.BoxGeometry(...args), [args]);
  // Create a memoized material
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ color }),
    [color]
  );

  return <mesh position={position} geometry={geometry} material={material} />;
};

const Axis = ({ data }) => {
  const xlength = data?.length + 35;
  const ylength = Math.max(...data) + 5;
  return (
    <>
      <Line
        points={[
          [0, 0, 0],
          [xlength, 0, 0],
        ]}
        color={"green"}
        lineWidth={1}
      />
      <Line
        points={[
          [0, 0, 0],
          [0, ylength, 0],
        ]}
        color={"blue"}
        lineWidth={1}
      />
    </>
  );
};

const BarGraph3D = ({
  data,
  colors = ["red", "green", "yellow", "blue", "pink", "violet"],
}) => {
  return (
    <Canvas
      camera={{
        fov: 90,
        aspect: window.innerWidth / window.innerHeight,
        position: 10,
      }}
    >
      <ambientLight intensity={3} />
      <pointLight position={[10, 10, 10]} />
      {data.map((value: any, index: any) => (
        <Bar
          key={index}
          position={[index * 4, value / 2, 0]}
          args={[2, value, 2]}
          color={colors[index % colors.length]}
        />
      ))}
      <OrbitControls />
      <Axis data={data} />
    </Canvas>
  );
};

export default BarGraph3D;
