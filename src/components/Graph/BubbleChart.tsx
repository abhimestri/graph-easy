import React from "react";
import { Bubble } from "react-chartjs-2";

const BubbleChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: 20,
            y: 30,
            r: 45,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
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
