import { Bar } from "react-chartjs-2";
import randomColor from "randomcolor";
import BarGraph3D from "../3D-Graph/BarGraph3D";
import { GraphRenderType } from "./Graph";

export interface BarGraphProps {
  graphData: any;
  graphRenderType?: GraphRenderType["type"];
}

const BarGraph = ({ graphData, graphRenderType }: BarGraphProps) => {
  const labels = graphData?.map(({ label }: any) => label);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: graphData?.map(({ data }: any) => data),
        backgroundColor: graphData?.map((item: any, index: any) => {
          if (item[index]) {
            return item[index];
          } else {
            return (item[index] = randomColor({
              luminosity: "bright",
              format: "rgb",
            }));
          }
        }),
      },
    ],
  };
  return (
    <div className="w-[90%] h-full">
      {graphRenderType === "2D" ? (
        <Bar
          className=""
          data={data}
          options={{
            responsive: true,
          }}
        />
      ) : (
        <BarGraph3D
          data={data?.datasets[0]?.data}
          colors={data?.datasets[0]?.backgroundColor}
        />
      )}
    </div>
  );
};

export default BarGraph;
