import { useState } from "react";
import Chart from "react-apexcharts";

const TimeSeries=()=>{
    const [options, setOptions] = useState({
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      });

    const [series,setSeries] = useState([{
            name: "XYZ-MOTORS",
            data: [30, 40, 45, 50, 49, 60, 70, 91,100]
    }])
    return(
        <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    )
}
export default TimeSeries;
