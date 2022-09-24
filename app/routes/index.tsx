import React, { useState } from "react";
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
import { json, LoaderFunction } from "@remix-run/node";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";

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

export const data = {
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

export const loader: LoaderFunction = async ({ params }) => {
  const body = {
    reftype: "area",
    refid: "SUBC000109",
    date: "2022",
  };
  let data = axios({
    method: "post",
    url: "https://wsvc01.police.gov.mv/mobile/olservices/getStatsByID",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: body,
  }).then((respose) => {
    return json(respose?.data);
  });
  return data;
};

export default function App() {
  const loaderData = useLoaderData();
  const [selectedCrimeType, setSelectedCrimeType] = useState();

  console.log(loaderData);
  return <Line options={options} data={data} />;
}
