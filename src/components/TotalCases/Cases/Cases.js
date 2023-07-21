import Cards from "../Cards/Cards";
// import DoughnutChart from "../Charts/DoughnutChart";
import classes from "./Cases.module.css";
import BoxHeader from "../../BoxHeader/BoxHeader";
import { useEffect, useState } from "react";

import { Doughnut } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  SubTitle,
  Title
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, SubTitle, Title);

const Cases = ({ title }) => {
  const [dataCases, setDataCases] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/");
    const data = await response.json();

    setDataCases(data);
    console.log('data', data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const {getAllCases, getAllResponses, getSuccessfulCases, getSuccessfulResponses} = dataCases;

  const DUMMY_CARDS = [
    {
      img: "https://files.axshare.com/gsc/HVJ7F6/48/b7/cb/48b7cbca8bb94a12ad34e45e7cba9c05/images/dashboard/u51.png?pageId=51c152ba-223d-41b7-8123-0d2e99871bea",
      description: "Tổng số case gửi",
      value: getAllCases,
      valueColor: "#015478",
      sizeImg: 50,
    },
    {
      img: "https://files.axshare.com/gsc/HVJ7F6/08/36/da/0836da2849c64cdc9553583953da67d4/images/dashboard/u50.png?pageId=51c152ba-223d-41b7-8123-0d2e99871bea",
      description: "Số case gửi thành công",
      value: getSuccessfulCases,
      valueColor: "#03B615",
      percent: getAllCases ? (getSuccessfulCases*100/getAllCases).toFixed(2) : 0,
      sizeImg: 50,
    },
    {
      img: "https://files.axshare.com/gsc/HVJ7F6/48/b7/cb/48b7cbca8bb94a12ad34e45e7cba9c05/images/dashboard/u52.png?pageId=51c152ba-223d-41b7-8123-0d2e99871bea",
      description: "Số case gửi thất bại",
      value: getAllCases - getSuccessfulCases,
      valueColor: "#D9001B",
      percent: getAllCases ? (100 - getSuccessfulCases*100/getAllCases).toFixed(2) : 0,
      sizeImg: 52,
    },
  ];

  const newCards = DUMMY_CARDS.filter((card) => card.percent);

  const dataChart = {
    labels: ["Gửi thành công", "Gửi thất bại"],
    datasets: [
      {
        data: newCards.map((card) => {
          return card.percent !== undefined && card.value;
        }),
        backgroundColor: ["#00B050", "#FF0000"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    //wrapper of chart: hinh chu nhat
    aspectRatio: 1.4,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          font: {
            size: 11,
          },
          padding: 10
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        bottom: 10,
        top: 10
      }
    }
  };

  return (
    //
    <section className={classes.cases}>
      <BoxHeader title={title} />
      <main className={classes.main}>
        <Cards cards={DUMMY_CARDS} />
        <Doughnut
            data={dataChart}
            options={options}
            style={{ maxWidth: "33%", maxHeight: "100%" }}
          />
      </main>
    </section>
  );
};
export default Cases;
