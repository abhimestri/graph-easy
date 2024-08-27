import React from "react";
import BarGraph3D from "../components/3D-Graph/BarGraph3D";
import { motion } from "framer-motion";

function Graph3DSection() {
  return (
    <div className="relative flex justify-center items-center gap-x-10 h-[60vh] mx-10 !my-[16vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="inner-box-shadow rounded-[10px] w-[50vw] h-full"
      >
        <div className="h-full">
          <BarGraph3D data={[10, 27, 21, 30, 18, 24]} />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="w-[50vw] "
      >
        <p className="text-2xl">
          Explore your data in a new dimension with our interactive{" "}
          <span className="font-semibold text-[#4E79F5]">3D graphs.</span>
          The example on the left highlights how our tool transforms complex
          datasets into engaging, easy-to-analyze visuals from every angle.
        </p>
      </motion.div>
    </div>
  );
}

export default Graph3DSection;
