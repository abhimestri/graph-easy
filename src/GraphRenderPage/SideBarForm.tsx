import React from "react";
import Button from "../components/Button";
import Close from "../assets/Close.svg";
import CustomTable from "../components/Table/Table";
import { GraphTypes } from "../utility/utility";
import { useForm, useFieldArray } from "react-hook-form";
import { delay, motion } from "framer-motion";

interface SideBarFormProps {
  currentGraphType: GraphTypes;
  fields: any[];
  append: any;
  remove: any;
  register: any;
  reset: any;
  setIsSideBarExtended: (data: boolean) => void;
  isSideBarExtended?: boolean;
}

const SideBarForm = ({
  currentGraphType,
  fields,
  remove,
  append,
  register,
  reset,
  isSideBarExtended,
  setIsSideBarExtended,
}: SideBarFormProps) => {
  return (
    <motion.div
      initial={{ width: "23%" }}
      animate={{ width: isSideBarExtended ? "23%" : "7%" }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={`h-[100vh] px-[8px] py-[8px] border-r-[1px] border-solid border-extralight`}
    >
      <div className="w-full h-fit flex justify-between">
        <p className="montserrat text-[18px] m-0 pl-[8px] pt-[4px]">Data</p>
        <img
          onClick={() => setIsSideBarExtended(!isSideBarExtended)}
          src={Close}
          alt=""
          className="m-0 cursor-pointer"
        />
      </div>
      <div className="text-center montserrat text-2xl py-4 px-6">
        <Button
          onClick={() => null}
          variant="white-outlined"
          className="w-full h-[40px] text-[13px]"
        >
          Expand data table
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isSideBarExtended ? 1 : 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-h-[70vh] p-[10px] overflow-scroll rounded-[6px] border-extralight border-[1px] border-solid"
      >
        <CustomTable
          fields={fields}
          register={register}
          append={append}
          remove={remove}
          data={[]}
          columns={[]}
        />
      </motion.div>
      <div className="absolute top-[90%] flex justify-center mt-[8px] gap-x-6">
        <Button
          variant={"primary"}
          onClick={() => null}
          className="px-[3vh] py-[11px]"
        >
          Upload Excel
        </Button>
        <Button
          variant={"white-outlined"}
          onClick={() => reset()}
          className="px-[3vh] py-[11px]"
        >
          Clear data
        </Button>
      </div>
    </motion.div>
  );
};

export default SideBarForm;
