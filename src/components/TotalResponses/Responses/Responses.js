import BoxHeader from "../../BoxHeader/BoxHeader";
// import DoughnutChart from "../../TotalCases/Charts/DoughnutChart";
import BasicTable from "../../Table/TableResponses";

import classes from "./Responses.module.css";

import { Doughnut } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  SubTitle,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, SubTitle);

const Responses = () => {
  const dataRes = {
    labels: ["Đã phản hồi", "Không phản hồi"],
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ["#0090CE", "#d7d7d7"],
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
        position: "right",
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          font: {
            size: 14,
          },
        },
      },
      subtitle: {
        display: true,
        text: "Tỉ lệ phản hồi",
        position: "bottom",
        fullSize: false, //căn giữa chiều ngang
        font: {
          family: "'Arial Bold', 'Arial', sans-serif",
          size: 16,
          weight: 'bold'
        },
        color: '#000000',
        padding: {
          top: 20
        }
      },
      // title: {
      //   display: true,
      //   text: "25",
      //   position: "top",
      //   fullSize: false,
      //   // align: "center",
      //   font: {
      //     size: 48,
      //     family: "'Arial', sans-serif"
      //   },
      //   color: '#8C8C8C'
      // }
    },
    layout: {
      padding: 15,
    },
  };

  const plugins = {
    beforeDatasetsDraw: (chart, args, options) => {
      const {ctx} = chart;

      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;

      ctx.font = 'bold 48px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillTextt(25, xCoor, yCoor);
    }
  }

  return (
    <section className={classes.responses}>
      <BoxHeader title="Thống kê số lượng phản hồi" />
      <main className={classes.main}>
        {/* <div className={classes.wrapper}> */}
          <Doughnut
            data={dataRes}
            options={options}
            plugins={plugins}
            style={{ maxWidth: "40%", maxHeight: "100%" }}
          />
          {/* <span>Tỉ lệ phản hồi</span>
        </div> */}
        <BasicTable />
      </main>
    </section>
  );
};

export default Responses;
