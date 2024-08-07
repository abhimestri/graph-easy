import { motion } from "framer-motion";
import LandingImg from "../assets/landing.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-[24px] py-[18px] md:flex justify-between items-center">
      <div className="ml-[4vw]">
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.7,
          }}
          className="poppins text-7xl p-0 m-0 w-fit"
        >
          GraphEasy
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="montserrat text-2xl my-4 pl-2 max-w-[40vw]"
        >
          Welcome to GraphEasy, your go-to platform for transforming data into
          stunning, interactive graphs and charts. Start creating beautiful,
          customizable charts today and bring your data to life!
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="ml-[10px]"
        >
          <Button
            variant="primary-animated"
            onClick={() => navigate("/create-graph")}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.7,
        }}
        className="floating"
      >
        <motion.img
          src={LandingImg}
          className="max-w-[80vw] max-h-[80vh] aspect-square mr-[8vw]"
        />
      </motion.div>
    </div>
  );
};

export default HeaderSection;
