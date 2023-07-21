import "./App.css";
import Cases from "./components/TotalCases/Cases/Cases";
import Responses from "./components/TotalResponses/Responses/Responses";
// import Cases from "./components/Cases/Cases";
// import CasesDoughnutChart from "./components/Charts/CasesDoughnutChart";
// import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const App = () => {
  return (
    <div className="app">
      <Cases title="Tổng số case đã gửi" />
      <Responses title="Thống kê số lượng phản hồi" />
      {/* <input
          className="input"
          type="date"
          id="start"
          min="2018-01-01"
          max="2018-12-31"
        ></input> */}
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Basic date picker" />
          </DemoContainer>
        </LocalizationProvider> */}
    </div>
  );
};

export default App;
