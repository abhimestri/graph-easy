import { motion } from "framer-motion";
import BarImg from "../assets/bar.png";
import DoughnutImg from "../assets/doughnut.png";
import LineImg from "../assets/line.png";
import ScatterImg from "../assets/scatter.png";
import { useRef } from "react";
import BarGraph3D from "../components/3D-Graph/BarGraph3D";

const MainContent = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="px-[26px] mt-[6vh] mb-[20vh]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-[70vw] montserrat m-auto text-3xl text-center mt-[12vh]"
      >
        Create diverse visualizations effortlessly with our platform. Generate{" "}
        <span className="font-semibold text-[#4E79F5]">
          Bar graphs, Pie charts, Line graphs, Scatter plots
        </span>{" "}
        and more to bring clarity and insight to your data
      </motion.p>
      <motion.div
        ref={ref}
        className="flex justify-center gap-x-[24vh] items-center mt-[20vh]"
      >
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="border-extralight border-[1px] border-solid m-0 rounded-[10px]"
          >
            <img
              src={BarImg}
              className="aspect-square max-w-[30vh] max-h-[30vh]"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative border-extralight border-[1px] border-solid top-12 rounded-[10px]"
          >
            <img
              alt=""
              src={DoughnutImg}
              className="aspect-square max-w-[30vh] max-h-[30vh] rounded-[12px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="border-extralight border-[1px] border-solid rounded-[10px]"
          >
            <img
              alt=""
              src={LineImg}
              className="aspect-square max-w-[30vh] max-h-[30vh]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative border-extralight border-[1px] border-solid top-12  rounded-[10px]"
          >
            <img
              alt=""
              src={ScatterImg}
              className="aspect-square max-w-[30vh] max-h-[30vh]"
            />
          </motion.div>
        </div>
        <div className="max-w-[46vw] ">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="montserrat text-2xl"
          >
            Easily generate a variety of graph types including bar graphs, pie
            charts, line graphs, and more with our intuitive tools. Whether
            you're visualizing sales data, academic results or personal
            projects, GraphEasy has you covered.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
