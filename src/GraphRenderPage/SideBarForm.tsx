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
import GraphDataForm from "./GraphDataForm";

interface SideBarFormProps {
  currentGraphType: GraphTypes["types"];
  fields: any[];
  append: any;
  remove: any;
  register: any;
  reset: any;
  isSideBarExtended?: boolean;
  setIsSideBarExtended: (data: boolean) => void;
  handleFileUpload: (e?: any) => void;
  setExpandDataTable: (data: boolean) => void;
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
  setExpandDataTable,
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
            onClick={() => setExpandDataTable(true)}
            variant="white-outlined"
            className="w-full h-[40px] text-[13px]"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="p-0 m-0 text-[1.2vw]"
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
        <GraphDataForm
          fields={fields}
          register={register}
          append={append}
          remove={remove}
          currentGraphType={currentGraphType}
          entity={"sidebar"}
        />
        <a
          href={
            currentGraphType !== "Bubble" && currentGraphType !== "Scatter"
              ? "https://docs.google.com/spreadsheets/d/1CePhzrGZ0Z0Du59KV2mI-4m0lCwwydjCmsqDQFmbCXY/edit?usp=sharing"
              : "https://docs.google.com/spreadsheets/d/1ElqK-0D-_31MVAkvD5DSweJWzBGbsry82Y1e9ZZO2z8/edit?usp=sharing"
          }
          target="_blank"
          rel="noreferrer"
          className="text-link text-[14px] pl-[8px] underline cursor-pointer"
        >
          Download sample excel sheet
        </a>
      </motion.div>
      <div className="flex justify-center absolute top-[90%] mt-[8px] gap-x-6">
        {isSideBarExtended ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="p-0 m-0"
            >
              <Button
                variant={"primary"}
                onClick={() => null}
                className="!px-[1.4vw] py-[1px]"
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
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-[1.1vw]"
                  >
                    Upload Excel
                  </label>
                </motion.p>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="p-0 m-0"
            >
              <Button
                variant={"white-outlined"}
                onClick={() => reset()}
                className="!px-[1.4vw] py-[1px] text-[1.1vw]"
              >
                Clear data
              </Button>
            </motion.div>
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
