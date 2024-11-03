import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { ElectricVehicleData } from "../../util/mockData";

interface Props {
  data: ElectricVehicleData[];
}

const CAFVEligibilityChart: React.FC<Props> = ({ data }) => {
  const eligibilityData = data.reduce((acc: Record<string, number>, v) => {
    acc[v["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]] =
      (acc[v["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]] || 0) + 1;
    return acc;
  }, {});

  const options: ApexOptions = {
    chart: {
      id: "cafvEligibilityChart",
      toolbar: { show: true, tools: { download: true } },
    },
    title: { text: "CAFV Eligibility", align: "center" },
    xaxis: { categories: Object.keys(eligibilityData) },
    legend: { position: "bottom" },
    // responsive: [{ breakpoint: 480, options: { chart: { width: "100%" } } }],
  };

  const series = [{ name: "Vehicles", data: Object.values(eligibilityData) }];

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

export default CAFVEligibilityChart;
