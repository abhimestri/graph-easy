import React, { useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  BufferGeometry,
  Float32BufferAttribute,
  MeshBasicMaterial,
  Mesh,
} from "three";

// Create a component to visualize the 3D area chart
const AreaChart3D = ({ data }: any) => {
  // Create geometry from data
  const geometry = useMemo(() => {
    const geometry = new BufferGeometry();

    // Flatten data to a single array
    const vertices:any = [];
    const indices:any = [];

    data.forEach((slice:any, i:any) => {
      slice.forEach((point:any, j:any) => {
        vertices.push(point.x, point.y, point.z);

        if (i > 0 && j > 0) {
          const a = (i - 1) * slice.length + (j - 1);
          const b = a + slice.length;
          const c = a + 1;
          const d = b + 1;

          indices.push(a, b, c, b, d, c);
        }
      });
    });

    geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);

    return geometry;
  }, [data]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial color="red" side={2} />{" "}
      {/* Use 2 for DoubleSide */}
    </mesh>
  );
};


export default AreaChart3D;
