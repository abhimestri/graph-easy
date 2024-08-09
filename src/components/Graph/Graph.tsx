import { useEffect, useState } from "react";
import { GraphTypes } from "../../utility/utility";
import BarGraph from "./BarGraph";
import BubbleChart from "./BubbleChart";
import DoughnutChart from "./DoughnutChart";
import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
import PolarAreaGraph from "./PolarAreaGraph";
import RadarGraph from "./RadarGraph";
import ScatterGraph from "./ScatterGraph";
import debounce from "debounce";

type attr = "types";

interface GraphProps {
  type: GraphTypes[attr];
  data: any;
  getValues: any;
  watch: any;
}

const Graph = ({ type, watch }: GraphProps) => {
  const [_graphData, setGraphData] = useState<any>();

  useEffect(() => {
    const updatedData = watch()?.dataValues.map((data: any) => data);
    setGraphData([...updatedData]);
  }, [watch]);

  switch (type) {
    case "Bar":
      return (
        <BarGraph graphData={watch()?.dataValues.map((data: any) => data)} />
      );
    case "Bubble":
      return <BubbleChart />;
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
