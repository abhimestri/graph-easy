import { Bar } from "react-chartjs-2";
import randomColor from "randomcolor";

interface BarGraphProps {
  graphData: any;
}

const BarGraph = ({ graphData }: BarGraphProps) => {
  const labels = graphData?.map(({ label }: any) => label);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        data: graphData?.map(({ data }: any) => data),
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
      },
    ],
  };
  return (
    <Bar
      className=""
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};

export default BarGraph;
