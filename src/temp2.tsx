import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const PieSlice = ({ position, args, color }: any) => {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.arc(0, 0, args[0], args[1], args[2], false);
    shape.lineTo(0, 0);

    const extrudeSettings = { depth: 1, bevelEnabled: false };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, [args]);

  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ color }),
    [color]
  );

  return <mesh position={position} geometry={geometry} material={material} />;
};

const PieChart3D = ({ data }: any) => {
  const total = data.reduce((sum: any, { value }: any) => sum + value, 0);
  let startAngle = 0;

  return (
    <div>
        <p> go easy</p>
      <Canvas style={{ height: "500px", width: "100%" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {data.map(({ value, color }: any, index: any) => {
          const endAngle = startAngle + (value / total) * 2 * Math.PI;
          const args = [1, startAngle, endAngle];
          const position = [0, 0, 0];
          startAngle = endAngle;

          return (
            <PieSlice
              key={index}
              position={position}
              args={args}
              color={color}
            />
          );
        })}
      </Canvas>
    </div>
  );
};

export default PieChart3D;
