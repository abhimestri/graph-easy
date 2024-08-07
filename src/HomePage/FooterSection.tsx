import { motion } from "framer-motion";
import { SupportedGraphsList } from "./utility";

const FooterSection = () => {
  return (
    <div className="flex justify-center w-full mt-[3vh] mb-[8vh]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-[8vh]"
      >
        <motion.p className="montserrat text-center text-3xl">
          Types of charts that{" "}
          <span className="text-[#4E79F5] font-semibold"> we support </span> at
          GraphEasy
        </motion.p>
        <div className="grid grid-cols-12 place-content-center gap-x-6 gap-y-4 mt-[4vh] px-[4vh]">
          {SupportedGraphsList?.map((item: any) => {
            return (
              <motion.div className="text-center montserrat text-xl col-span-3 border-[1px] rounded-[6px] px-[10vh] py-[6vh] shadow-[0_0_22px_-16px_rgba(0,0,0,0.62)]">
                {item}
              </motion.div>
            );
          })}
        </div>
      </motion.p>
    </div>
  );
};

export default FooterSection;
