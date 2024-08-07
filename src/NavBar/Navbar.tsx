import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100vw]">
      <motion.ul
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{ opacity: 1, y: 14 }}
        transition={{
          delay: 0.6,
          duration: 0.7,
        }}
        className="montserrat p-6 px-20 flex items-start gap-x-14 list-none"
      >
        <motion.li
          initial={{ fontWeight: 400 }}
          whileHover={{ fontWeight: 600 }}
          transition={{ delay: 0.2, duration: 0.1 }}
          className="cursor-pointer "
        >
          Home
        </motion.li>
        <motion.li
          initial={{ fontWeight: 400 }}
          whileHover={{ fontWeight: 600 }}
          transition={{ delay: 0.2, duration: 0.1 }}
          className="cursor-pointer "
          onClick={() => navigate("/create-graph")}
        >
          Get started
        </motion.li>
        <motion.li
          initial={{ fontWeight: 400 }}
          whileHover={{ fontWeight: 600 }}
          transition={{ delay: 0.2, duration: 0.1 }}
          className="cursor-pointer "
        >
          Know more
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default NavBar;
