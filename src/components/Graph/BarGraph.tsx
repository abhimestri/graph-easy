import { Bar } from "react-chartjs-2";
import randomColor from "randomcolor";
import BarChart3D from "../../temp";
import BarGraph3D from "../3D-Graph/BarGraph3D";

interface BarGraphProps {
  graphData: any;
}

const BarGraph = ({ graphData }: BarGraphProps) => {
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
    <Bar
      className=""
      data={data}
      options={{
        responsive: true,
      }}
    />
    // <BarGraph3D
    //   data={data?.datasets[0]?.data}
    //   colors={data?.datasets[0]?.backgroundColor}
    // />
  );
};

export default BarGraph;
