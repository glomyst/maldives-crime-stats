import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useLocalStorage } from "@mantine/hooks";
import { Button } from "@mantine/core";
import { fetchPoliceApiData, random_rgba } from "~/util/global";
import React, { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Crime Data Comparison",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dataa = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 200, 300, 900, 500, 100, 700, 800, 900, 100, 1100, 700],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [200, 302, 100, 300, 100, 200, 101, 15, 20, 17, 200, 100],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function App() {
  const ref = React.createRef();

  const [data, setData] = useState(dataa);
  useEffect(() => {
    setData(data);
  }, [data?.datasets?.length]);
  const [selectedCrime] = useLocalStorage({
    key: "slected-crime",
    defaultValue: "",
  });

  const handleDataLoad = async () => {
    let dataApi = await fetchPoliceApiData(
      selectedCrime,
      "atoll",
      "ATL11",
      "2021"
    );

    let tempdata = { ...data };
    tempdata?.datasets.push({
      label: selectedCrime,
      data: dataApi,
      borderColor: random_rgba(),
      backgroundColor: random_rgba(),
    });

    setData(tempdata);
  };

  return (
    <>
      {data?.datasets?.length && <Line options={options} data={data} redraw />}
      <Button onClick={() => handleDataLoad()}>Fetch data</Button>
    </>
  );
}
