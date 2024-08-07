import React from "react";
import { Scatter } from "react-chartjs-2";

const ScatterGraph = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [20, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <Scatter
      className=""
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};

export default ScatterGraph;
