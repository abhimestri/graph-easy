import randomColor from "randomcolor";
import React from "react";
import { Pie } from "react-chartjs-2";

interface PieChartProps {
  graphData: any[];
}

const PieChart = ({ graphData }: PieChartProps) => {
  const labels = graphData?.map(({ label }: any) => label);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
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
    <Pie
      className=""
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};

export default PieChart;
