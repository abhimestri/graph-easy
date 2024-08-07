import React from "react";
import Button from "../components/Button";
import Close from "../assets/Close.svg";
import CustomTable from "../components/Table/Table";
import { GraphTypes } from "../utility/utility";
import { useForm, useFieldArray } from "react-hook-form";

interface SideBarFormProps {
  currentGraphType: GraphTypes;
  fields: any[];
  append: any;
  remove: any;
  register: any;
  reset: any;
}

const SideBarForm = ({
  currentGraphType,
  fields,
  remove,
  append,
  register,
  reset,
}: SideBarFormProps) => {
  return (
    <div className="w-[23%] h-[100vh] px-[8px] py-[8px] border-r-[1px] border-solid border-extralight">
      <div className="w-full h-fit flex justify-between">
        <p className="montserrat text-[18px] m-0 pl-[8px] pt-[4px]">Data</p>
        <img src={Close} alt="" className="m-0" />
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
      <div className="max-h-[70vh] p-[10px] overflow-scroll rounded-[6px] border-extralight border-[1px] border-solid">
        <CustomTable
          fields={fields}
          register={register}
          append={append}
          remove={remove}
          data={[]}
          columns={[]}
        />
      </div>
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
    </div>
  );
};

export default SideBarForm;
