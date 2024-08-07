import { motion, useScroll } from "framer-motion";
import BarImg from "../assets/bar.jpg";
import DoughnutImg from "../assets/doughnut.jpg";
import LineImg from "../assets/line.jpg";
import ScatterImg from "../assets/scatter.jpg";
import { useRef } from "react";

const MainContent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <div className="px-[26px] mt-[6vh]">
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
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            src={BarImg}
            className="aspect-square max-w-[30vh] max-h-[30vh] rounded-[12px]"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            src={DoughnutImg}
            className="aspect-square max-w-[30vh] max-h-[30vh] mt-[50px] rounded-[12px]"
          />
          <motion.img
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            src={LineImg}
            className="aspect-square max-w-[30vh] max-h-[30vh] mt-[-50px] rounded-[12px]"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            src={ScatterImg}
            className="aspect-square max-w-[30vh] max-h-[30vh] rounded-[12px]"
          />
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
