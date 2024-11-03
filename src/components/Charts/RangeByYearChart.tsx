import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ElectricVehicleData } from "../../util/mockData";

interface Props {
  data: ElectricVehicleData[];
}

const RangeByYearChart: React.FC<Props> = ({ data }) => {
  const modelYears = Array.from(
    new Set(data.map((v) => v["Model Year"]))
  ).sort();
  const avgRangeByYear = modelYears.map((year) => {
    const vehicles = data.filter(
      (v) => v["Model Year"] === year && v["Electric Range"] > 0
    );
    return (
      vehicles.reduce((sum, v) => sum + v["Electric Range"], 0) /
      (vehicles.length || 1)
    );
  });

  const options: ApexOptions = {
    chart: {
      id: "rangeByYearChart",
      toolbar: { show: true, tools: { download: true } },
    },
    title: { text: "Electric Range by Model Year", align: "center" },
    xaxis: { categories: modelYears },
    yaxis: { title: { text: "Average Electric Range (miles)" } },
    legend: { position: "bottom" },
    // responsive: [{ breakpoint: 480, options: { chart: { width: "100%" } } }],
  };

  const series = [{ name: "Average Electric Range", data: avgRangeByYear }];

  return (
    <div className="bg-white shadow-lg flex-[0.4] ">
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height={300}
      />
    </div>
  );
};

export default RangeByYearChart;
