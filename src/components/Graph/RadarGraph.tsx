import randomColor from "randomcolor";
import React from "react";
import { Radar } from "react-chartjs-2";

interface RadarGraphProps {
  graphData: any[];
}

const RadarGraph = ({ graphData }: RadarGraphProps) => {
  const labels = graphData?.map(({ label }: any) => label);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: graphData?.map(({ data }: any) => data),
        fill: true,
        backgroundColor: graphData?.map((item: any, index: any) => {
          if (item[index]) {
            return item[index];
          } else {
            return (item[index] = randomColor({
              luminosity: "bright",
              format: "rgba",
            }));
          }
        }),
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: graphData?.map((item: any, index: any) => {
          if (item[index]) {
            return item[index];
          } else {
            return (item[index] = randomColor({
              luminosity: "bright",
              format: "rgba",
            }));
          }
        }),
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  return (
    <Radar
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};

export default RadarGraph;
