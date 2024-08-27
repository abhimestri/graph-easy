import { GraphTypes } from "../../utility/utility";
import BarGraph, { BarGraphProps } from "./BarGraph";
import BubbleChart from "./BubbleChart";
import DoughnutChart from "./DoughnutChart";
import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
import PolarAreaGraph from "./PolarAreaGraph";
import RadarGraph from "./RadarGraph";
import ScatterGraph from "./ScatterGraph";

type attr = "types";

export interface GraphRenderType {
  type: "2D" | "3D";
}

interface GraphProps {
  type: GraphTypes[attr];
  data: any;
  getValues: any;
  watch: any;
  graphRenderType: GraphRenderType["type"];
}

const Graph = ({ type, watch, graphRenderType }: GraphProps) => {
  switch (type) {
    case "Bar":
      return (
        <BarGraph
          graphData={watch()?.dataValues.map((data: any) => data)}
          graphRenderType={graphRenderType}
        />
      );
    case "Bubble":
      return (
        <BubbleChart graphData={watch()?.dataValues.map((data: any) => data)} />
      );
    case "Line":
      return (
        <LineGraph graphData={watch()?.dataValues.map((data: any) => data)} />
      );
    case "Pie":
      return (
        <PieChart graphData={watch()?.dataValues.map((data: any) => data)} />
      );
    case "Doughnut":
      return (
        <DoughnutChart
          graphData={watch()?.dataValues.map((data: any) => data)}
        />
      );
    case "Polar Area":
      return (
        <PolarAreaGraph
          graphData={watch()?.dataValues.map((data: any) => data)}
        />
      );
    case "Radar":
      return (
        <RadarGraph graphData={watch()?.dataValues.map((data: any) => data)} />
      );
    case "Scatter":
      return <ScatterGraph />;
    default:
      return <></>;
  }
};

export default Graph;
