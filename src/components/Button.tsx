import { motion } from "framer-motion";
import React from "react";
import RightArrow from "../assets/RightArrow.svg";

interface ButtonProps {
  title?: string;
  onClick: (e?: any) => void;
  icon?: any;
  variant?:
    | "primary"
    | "primary-animated"
    | "secondary"
    | "white-outlined"
    | "danger";
  className?: any;
}

type PropsWithChildren = React.PropsWithChildren<ButtonProps>;

const Button: React.FC<PropsWithChildren> = ({
  onClick,
  icon,
  variant,
  children,
  className,
}) => {
  //   const { onClick } = props;

  switch (variant) {
    case "primary-animated":
      return (
        <motion.button
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={`montserrat flex items-center justify-center gap-x-4 cursor-pointer bg-primaryblue px-[4vh] py-[2vh] rounded-[4px] w-fit border-none rounded-[6px] text-white text-[16px] ${className}`}
          onClick={onClick}
        >
          {children}
          <img
            src={icon ? icon : RightArrow}
            alt=""
            className="w-[20px] h-[20px]"
          />
        </motion.button>
      );
    case "primary":
      return (
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className={`${className} montserrat flex items-center justify-center gap-x-4 cursor-pointer bg-primaryblue px-[4vh] py-[2vh] rounded-[4px] w-fit border-none rounded-[6px] text-white text-[16px]`}
          onClick={onClick}
        >
          {children}
        </motion.button>
      );
    case "white-outlined":
      return (
        <motion.button
          whileHover={{ scale: 1.01 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className={`${className} montserrat flex items-center justify-center gap-x-4 cursor-pointer bg-white px-[4vh] py-[2vh] rounded-[4px] w-fit border-[1px] border-solid border-extralight rounded-[6px] text-black text-[16px]`}
          onClick={onClick}
        >
          {children}
        </motion.button>
      );
    case "danger":
      return (
        <motion.button
          whileHover={{ scale: 1.01 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className={`montserrat flex items-center justify-center gap-x-4 cursor-pointer bg-danger px-[4vh] py-[2vh] rounded-[4px] w-fit border-[1px] border-solid border-extralight rounded-[6px] text-black text-[16px] ${className}`}
          onClick={onClick}
        >
          {children}
        </motion.button>
      );
    default:
      return (
        <motion.button
          whileHover={{ scale: 1.07 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className={`montserrat flex items-center justify-center gap-x-4 cursor-pointer bg-primaryblue px-[4vh] py-[2vh] rounded-[4px] w-fit border-none rounded-[6px] text-white text-[16px] ${className}`}
          onClick={onClick}
        >
          {children}
        </motion.button>
      );
  }
};

export default Button;
