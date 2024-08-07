import randomColor from "randomcolor";
import React from "react";
import { PolarArea } from "react-chartjs-2";

interface PolarAreaGraphProps {
  graphData: any[];
}

const PolarAreaGraph = ({ graphData }: PolarAreaGraphProps) => {
  const labels = graphData?.map(({ label }: any) => label);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
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
        data: graphData?.map(({ data }: any) => data),
      },
    ],
  };
  return (
    <PolarArea
      className=""
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};

export default PolarAreaGraph;
