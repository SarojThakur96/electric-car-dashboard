import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // Import ApexOptions for type
import { ElectricVehicleData } from "../../util/mockData";

interface Props {
  data: ElectricVehicleData[];
}

const VehicleTypeChart: React.FC<Props> = ({ data }) => {
  const batteryEVCount = data.filter(
    (v) => v["Electric Vehicle Type"] === "Battery Electric Vehicle (BEV)"
  ).length;
  const plugInHybridCount = data.filter(
    (v) =>
      v["Electric Vehicle Type"] === "Plug-in Hybrid Electric Vehicle (PHEV)"
  ).length;

  const options: ApexOptions = {
    chart: {
      id: "vehicleTypeChart",
      toolbar: { show: true, tools: { download: true } }, // Enable export
    },
    title: { text: "Vehicle Type Distribution", align: "center" }, // Chart title
    labels: [
      "Battery Electric Vehicle (BEV)",
      "Plug-in Hybrid Electric Vehicle (PHEV)",
    ],
    colors: ["#4CAF50", "#FFC107"],
    legend: { position: "bottom" as "bottom" }, // Explicitly type 'bottom'
    // responsive: [{ breakpoint: 480, options: { chart: { width: "100%" } } }],
  };

  const series = [batteryEVCount, plugInHybridCount];

  return (
    <div className="bg-white shadow-lg flex-[0.4]">
      <Chart
        options={options}
        series={series}
        type="pie"
        width="100%"
        height={300}
      />
    </div>
  );
};

export default VehicleTypeChart;
