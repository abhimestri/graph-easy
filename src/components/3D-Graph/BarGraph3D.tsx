import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Bar = ({ position, height, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, height, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const BarGraph3D = ({ data, colors }) => {
  // const data = [5, 10, 7, 3, 6]; // Example data
  // const colors = ["#8BC34A", "#FFC107", "#00BCD4", "#E91E63", "#3F51B5"]; // Colors for each bar

  return (
    <Canvas
      camera={{ position: [0, -60, 30], fov: 30 }}
      style={{ marginTop: "30px", background: "#ccc" }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      {/* Directional Light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Generate Bars */}
      {data.map((value, index) => (
        <Bar
          key={index}
          position={[index * 2 - data.length, value / 2, 0]} // Adjust the position of each bar
          height={value} // Height of the bar based on data
          color={colors[index % colors.length]} // Assign color to each bar
        />
      ))}

      {/* Add Orbit Controls to rotate around the graph */}
      <OrbitControls />
    </Canvas>
  );
};

export default BarGraph3D;
