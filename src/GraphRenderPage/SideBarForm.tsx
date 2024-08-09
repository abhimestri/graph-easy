import React from "react";
import Button from "../components/Button";
import Close from "../assets/Close.svg";
import Upload from "../assets/Upload.svg";
import Expand from "../assets/Expand.svg";
import CustomTable from "../components/Table/Table";
import { GraphTypes } from "../utility/utility";
import { useForm, useFieldArray } from "react-hook-form";
import { delay, motion } from "framer-motion";

import { ReactComponent as RightArrow } from "../assets/BlackRightArr.svg";

interface SideBarFormProps {
  currentGraphType: GraphTypes;
  fields: any[];
  append: any;
  remove: any;
  register: any;
  reset: any;
  setIsSideBarExtended: (data: boolean) => void;
  isSideBarExtended?: boolean;
  handleFileUpload: (e?: any) => void;
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
  handleFileUpload,
}: SideBarFormProps) => {
  return (
    <motion.div
      initial={{ width: "23%" }}
      animate={{ width: isSideBarExtended ? "23%" : "5%" }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="h-[100vh] px-[8px] py-[8px] border-r-[1px] border-solid border-extralight"
    >
      {isSideBarExtended ? (
        <div className="w-full h-fit flex justify-between">
          <p className="montserrat text-[18px] m-0 pl-[8px] pt-[4px]">Data</p>
          <img
            onClick={() => setIsSideBarExtended(!isSideBarExtended)}
            src={Close}
            alt=""
            className="m-0 cursor-pointer"
          />
        </div>
      ) : (
        <div
          onClick={() => setIsSideBarExtended(!isSideBarExtended)}
          className="p-0 flex justify-center cursor-pointer"
        >
          <RightArrow style={{ padding: 0 }} />
        </div>
      )}
      {isSideBarExtended ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSideBarExtended ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center montserrat text-2xl py-4 px-6"
        >
          <Button
            onClick={() => null}
            variant="white-outlined"
            className="w-full h-[40px] text-[13px]"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="p-0 m-0"
            >
              Expand data table
            </motion.p>
          </Button>
        </motion.div>
      ) : (
        <div className="flex justify-center mt-8">
          <Button
            variant="white-outlined"
            className="!p-2"
            onClick={() => null}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              src={Expand}
              alt=""
              className="p-0"
            />
          </Button>
        </div>
      )}
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
      <div className="flex justify-center absolute top-[90%] mt-[8px] gap-x-6">
        {isSideBarExtended ? (
          <>
            <Button
              variant={"primary"}
              onClick={() => null}
              className="px-[2vh] py-[1px]"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="p-0 m-0"
              >
                <input
                  id="file-upload"
                  type="file"
                  hidden
                  onChange={handleFileUpload}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  Upload Excel
                </label>
              </motion.p>
            </Button>
            <Button
              variant={"white-outlined"}
              onClick={() => reset()}
              className="px-[3vh] py-[11px]"
            >
              Clear data
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => null}
            className="!p-2 ml-[16px]"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              src={Upload}
              alt=""
            />
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default SideBarForm;
