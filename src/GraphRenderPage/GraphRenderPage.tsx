import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopGraphOptionBar from "./TopGraphOptionBar";
import SideBarForm from "./SideBarForm";
import Graph from "../components/Graph/Graph";
import Home from "../assets/Home.svg";
import { GraphTypes, parseExcelData } from "../utility/utility";
import { useFieldArray, useForm } from "react-hook-form";
import * as XLSX from "xlsx";

const GraphRenderPage = () => {
  type types = "types";
  const [currentGraphType, setCurrentGraphType] = useState<any>();
  const [isSideBarExtended, setIsSideBarExtended] = useState<boolean>(true);

  const navigate = useNavigate();

  const { register, control, watch, getValues, reset, setValue } = useForm({
    defaultValues: {
      dataValues: [
        {
          label: "",
          data: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "dataValues",
  });

  const handleCurrentGraphType = (type: GraphTypes[types]) => {
    setCurrentGraphType(type);
  };

  const handleFileUpload = async (e: any) => {
    const fileData = e.target.files[0];
    const data = await fileData.arrayBuffer();
    const workbook = XLSX.read(data);
    const finalDt = parseExcelData(workbook);
    finalDt?.scrappedData?.map((dt: any, i: any) => {
      setValue(`dataValues.${i}.data`, dt.data);
      setValue(`dataValues.${i}.label`, dt.label);
      append(dt);
    });
    e.target.value = null;
  };

  return (
    <div className="flex">
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer absolute top-2 left-[94%] rounded-[10px] bg-[#fff] p-[12px] shadow-[0_-1px_44px_-22px_rgba(0,0,0,0.75)]"
      >
        <img src={Home} alt="" />
      </div>
      <SideBarForm
        register={register}
        fields={fields}
        append={append}
        remove={remove}
        currentGraphType={currentGraphType}
        reset={reset}
        setIsSideBarExtended={setIsSideBarExtended}
        isSideBarExtended={isSideBarExtended}
        handleFileUpload={handleFileUpload}
      />
      <div className="w-[77%]">
        <TopGraphOptionBar
          setCurrentGraph={handleCurrentGraphType}
          currentGraphType={currentGraphType ?? "Bar"}
        />
        <div className="">
          <div className="h-[70vh] flex justify-center px-8">
            <Graph
              getValues={getValues}
              type={currentGraphType ?? "Bar"}
              watch={watch}
              data={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphRenderPage;
