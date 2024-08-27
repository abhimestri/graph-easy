import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopGraphOptionBar from "./TopGraphOptionBar";
import SideBarForm from "./SideBarForm";
import Graph from "../components/Graph/Graph";
import Home from "../assets/Home.svg";
import {
  GraphTypes,
  handleCaptureImage,
  parseExcelData,
} from "../utility/utility";
import { useFieldArray, useForm } from "react-hook-form";
import * as XLSX from "xlsx";
import { getFormFields } from "../utility/form";
import CommonModal from "../components/Modal/Modal";
import GraphDataForm from "./GraphDataForm";
import Button from "../components/Button";
import { ReactComponent as CaptureImageIcon } from "../assets/CaptureImageIcon.svg";
import { BarGraphProps } from "../components/Graph/BarGraph";

const GraphRenderPage = () => {
  type types = "types";
  const [currentGraphType, setCurrentGraphType] = useState<any>();
  const [isSideBarExtended, setIsSideBarExtended] = useState<boolean>(true);
  const [expandDataTable, setExpandDataTable] = useState<boolean>(false);
  const [graphRenderType, setGraphRenderType] =
    useState<BarGraphProps["graphRenderType"]>("2D");

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
        <div className={`${isSideBarExtended ? "w-[77%]" : "w-[95%]"}`}>
          <TopGraphOptionBar
            setCurrentGraph={handleCurrentGraphType}
            currentGraphType={currentGraphType ?? "Bar"}
          />
          <div className="px-6">
            <div className="flex justify-end gap-x-4 my-2">
              <Button
                variant="white-outlined"
                onClick={() => handleCaptureImage("graphCatureArea")}
                className="px-[10px] py-[10px]"
                disabled={graphRenderType === "3D"}
              >
                <CaptureImageIcon fill="#000" className="m-auto" />
              </Button>
              <Button
                variant="white-outlined"
                onClick={() =>
                  setGraphRenderType(graphRenderType === "3D" ? "2D" : "3D")
                }
                className=" text-[12px] px-[10px] py-[10px]"
              >
                {graphRenderType === "3D" ? "View in 2D" : "View in 3D"}
              </Button>
            </div>
            <div id="graphCatureArea">
              <div className="h-[70vh] flex justify-center px-8">
                <Graph
                  getValues={getValues}
                  type={currentGraphType ?? "Bar"}
                  watch={watch}
                  data={[]}
                  graphRenderType={graphRenderType}
                />
              </div>
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
