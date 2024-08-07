import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopGraphOptionBar from "./TopGraphOptionBar";
import SideBarForm from "./SideBarForm";
import Graph from "../components/Graph/Graph";
import Home from "../assets/Home.svg";
import { GraphTypes } from "../utility/utility";
import { useFieldArray, useForm } from "react-hook-form";

const GraphRenderPage = () => {
  type types = "types";
  const [currentGraphType, setCurrentGraphType] = useState<any>();

  const navigate = useNavigate();

  const { register, control, watch, getValues, reset } = useForm({
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
