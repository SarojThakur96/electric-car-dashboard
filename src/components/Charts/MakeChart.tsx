import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ElectricVehicleData } from "../../util/mockData";

interface Props {
  data: ElectricVehicleData[];
}

const MakeChart: React.FC<Props> = ({ data }) => {
  const makeData = data.reduce((acc: Record<string, number>, v) => {
    acc[v.Make] = (acc[v.Make] || 0) + 1;
    return acc;
  }, {});

  const options: ApexOptions = {
    chart: {
      id: "makeChart",
      toolbar: { show: true, tools: { download: true } },
    },
    title: { text: "Electric Vehicles by Make", align: "center" },
    xaxis: { categories: Object.keys(makeData) },
    legend: { position: "bottom" },
    // responsive: [{ breakpoint: 480, options: { chart: { width: "100%" } } }],
  };

  const series = [{ name: "Vehicles", data: Object.values(makeData) }];

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

export default MakeChart;
