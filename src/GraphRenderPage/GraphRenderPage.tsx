import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopGraphOptionBar from "./TopGraphOptionBar";
import SideBarForm from "./SideBarForm";
import Graph from "../components/Graph/Graph";
import Home from "../assets/Home.svg";
import { GraphTypes, parseExcelData } from "../utility/utility";
import { useFieldArray, useForm } from "react-hook-form";
import * as XLSX from "xlsx";
import { getFormFields } from "../utility/form";
import CommonModal from "../components/Modal/Modal";
import GraphDataForm from "./GraphDataForm";

const GraphRenderPage = () => {
  type types = "types";
  const [currentGraphType, setCurrentGraphType] = useState<any>();
  const [isSideBarExtended, setIsSideBarExtended] = useState<boolean>(true);
  const [expandDataTable, setExpandDataTable] = useState<boolean>(false);

  const navigate = useNavigate();

  const { register, control, watch, getValues, reset, setValue } = useForm({
    defaultValues: {
      dataValues: [getFormFields(currentGraphType)],
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
    const finalDt = parseExcelData(workbook, currentGraphType);
    if (currentGraphType !== "Bubble" && currentGraphType !== "Scatter") {
      finalDt?.scrappedData?.forEach((dt: any, i: any) => {
        setValue(`dataValues.${i}.data`, dt.data);
        setValue(`dataValues.${i}.label`, dt.label);
        append(dt);
      });
    } else {
      finalDt?.scrappedData?.forEach((dt: any, i: any) => {
        setValue(`dataValues.${i}.X`, dt.X);
        setValue(`dataValues.${i}.Y`, dt.Y);
        setValue(`dataValues.${i}.R`, dt.R);
        append(dt);
      });
    }
    // to remove the last duplicate field due to append
    remove(finalDt?.scrappedData?.length - 1);
    e.target.value = null;
  };

  return (
    <>
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
          setExpandDataTable={setExpandDataTable}
        />
        <div className="w-[77%]">
          <TopGraphOptionBar
            setCurrentGraph={handleCurrentGraphType}
            currentGraphType={currentGraphType ?? "Bar"}
          />
          <div className="">
            <div className="h-[70vh] flex justify-center px-8">
              {/* {!watch("dataValues")[0]?.data?.length &&
            !watch("dataValues")[0]?.label?.length ? (
              <div className="mt-20">
                <p className="text-[30px] m-auto tet-montserrat-bold">
                  No data found to display any graph!
                </p>
              </div>
            ) : (
              <Graph
                getValues={getValues}
                type={currentGraphType ?? "Bar"}
                watch={watch}
                data={[]}
              />
            )} */}
              <Graph
                getValues={getValues}
                type={currentGraphType ?? "Bar"}
                watch={watch}
                data={[]}
              />
            </div>
          </div>
        </div>
        <CommonModal
          open={expandDataTable}
          handleClose={() => setExpandDataTable(false)}
          body={
            <div>
              <GraphDataForm
                fields={fields}
                register={register}
                append={append}
                remove={remove}
                currentGraphType={currentGraphType}
                entity={"modal"}
              />
            </div>
          }
        />
      </div>
    </>
  );
};

export default GraphRenderPage;
