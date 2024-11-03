import CAFVEligibilityChart from "../../components/Charts/CAFVEligibilityChart";
import MakeChart from "../../components/Charts/MakeChart";
import RangeByYearChart from "../../components/Charts/RangeByYearChart";
import VehicleTypeChart from "../../components/Charts/VehicleTypeChart";
import { electricCarData } from "../../util/mockData";

const Dashboard = () => {
  return (
    <div className="px-4 pt-4 w-full flex-1">
      <div className="flex items-center justify-around gap-4  ">
        {/* <h1>Electric Vehicle Analytics</h1> */}
        <VehicleTypeChart data={electricCarData} />
        <RangeByYearChart data={electricCarData} />
      </div>

      <div className="flex items-center justify-around gap-4 mt-5">
        <CAFVEligibilityChart data={electricCarData} />
        <MakeChart data={electricCarData} />
      </div>
    </div>
  );
};

export default Dashboard;
