import randomColor from "randomcolor";
import React from "react";
import { Bubble } from "react-chartjs-2";

interface BubbleChartProps {
  graphData: any[];
}

const BubbleChart = ({ graphData }: BubbleChartProps) => {
  const data = {
    datasets: [
      {
        label: "Bubble chart",
        data: graphData?.map((data: any) => {
          return {
            x: data?.X,
            y: data?.Y,
            r: data?.R,
          };
        }),
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
    <Bubble
      className=""
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};

export default BubbleChart;
