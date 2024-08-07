import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import randomColor from "randomcolor";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineGraphProps {
  graphData: any[];
}

const LineGraph = ({ graphData }: LineGraphProps) => {
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
    <Line
      className=""
      data={data}
      options={{
        responsive: true,
      }}
    />
  );
};

export default LineGraph;
