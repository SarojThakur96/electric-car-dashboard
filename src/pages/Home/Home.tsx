import React, { useEffect } from "react";
import CustomGrid from "../../components/CustomGrid/CustomGrid";
import { Spinner } from "react-activity";
import { Tooltip } from "@mui/material";
import { getAllRestaurants } from "../../api/getAllRestaurants";
import { RestaurantsType } from "../../types/types";
import DeleteIcon from "../../assets/DeleteIcon.svg";
import EditIconGrid from "../../assets/EditIconGrid.svg";
import { ToastContainer } from "react-toastify";
import CustomModal from "../../components/CustomModal/CustomModal";
import DeleteDialogBOX from "../../components/DialogBox/DeleteDialogBox";
import CreateRestaurant from "../../components/CreateRestaurant/CreateRestaurant";
import CreateIcon from "../../assets/CreateIcon.svg";
import moment from "moment";
import { electricCarData, ElectricVehicleData } from "../../util/mockData";
const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState<RestaurantsType[]>([]);
  const [showModal, setShowModal] = React.useState(false);
  const [modalValue, setModalValue] = React.useState<RestaurantsType | null>();
  const [modalType, setModalType] = React.useState("");
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [isLoading, setIsloading] = React.useState(false);
  const [reload, setReload] = React.useState(0);
  const [currentPageInfo, setCurrentPageInfo] = React.useState({
    pageNo: 1,
    itemPerPage: 10,
    totalItem: electricCarData.length,
  });

  const columns: any[] = [
    {
      id: "idx",
      label: "Serial",
      minWidth: 100,
      align: "left",
    },
    {
      id: "VIN (1-10)",
      label: "VIN (1-10)",
      minWidth: 180,
      align: "left",
    },
    {
      id: "County",
      label: "County",
      minWidth: 120,
      align: "left",
    },
    {
      id: "City",
      label: "City",
      minWidth: 120,
      align: "left",
    },
    {
      id: "State",
      label: "State",
      minWidth: 100,
      align: "left",
    },
    {
      id: "Postal Code",
      label: "Postal Code",
      minWidth: 120,
      align: "left",
    },
    {
      id: "Model Year",
      label: "Model Year",
      minWidth: 120,
      align: "left",
    },
    {
      id: "Make",
      label: "Make",
      minWidth: 120,
      align: "left",
    },
    {
      id: "Model",
      label: "Model",
      minWidth: 120,
      align: "left",
    },
    {
      id: "Electric Vehicle Type",
      label: "Electric Vehicle Type",
      minWidth: 180,
      align: "left",
    },
    {
      id: "Clean Alternative Fuel Vehicle (CAFV) Eligibility",
      label: "Clean Alternative Fuel Vehicle (CAFV) Eligibility",
      minWidth: 200,
      align: "left",
    },
    {
      id: "Electric Range",
      label: "Electric Range",
      minWidth: 150,
      align: "left",
    },
    {
      id: "Base MSRP",
      label: "Base MSRP",
      minWidth: 120,
      align: "left",
    },
    {
      id: "Legislative District",
      label: "Legislative District",
      minWidth: 150,
      align: "left",
    },
    {
      id: "DOL Vehicle ID",
      label: "DOL Vehicle ID",
      minWidth: 150,
      align: "left",
    },
    {
      id: "Vehicle Location",
      label: "Vehicle Location",
      minWidth: 200,
      align: "left",
    },
    {
      id: "Electric Utility",
      label: "Electric Utility",
      minWidth: 180,
      align: "left",
    },
    {
      id: "2020 Census Tract",
      label: "2020 Census Tract",
      minWidth: 150,
      align: "left",
    },
  ];

  const createData = (item: ElectricVehicleData, index: number) => {
    // const action = (
    //   <div className="flex space-x-[10px] justify-center ">
    //     {/* EditIconGrid */}
    //     <Tooltip title="Edit" placement="bottom">
    //       <img
    //         src={EditIconGrid}
    //         className="cursor-pointer w-4 h-4"
    //         onClick={() => {
    //           setModalType("Edit");
    //           setModalValue(item);
    //           setShowModal(true);
    //         }}
    //       />
    //     </Tooltip>

    //     {/* Delete Icon Grid  */}

    //     <Tooltip title="Delete" placement="bottom">
    //       <img
    //         src={DeleteIcon}
    //         className="cursor-pointer w-4 h-4"
    //         onClick={() => {
    //           setShowDrawer(true);
    //           setModalType("delete");
    //           setModalValue(item);
    //         }}
    //       />
    //     </Tooltip>
    //   </div>
    // );

    return {
      ...item,
      key: item?.["DOL Vehicle ID"],
      idx: index + 1,
      // action,
    };
  };

  const rows = [
    ...electricCarData?.map((item, index: number) => createData(item, index)),
  ];

  const gWidth =
    window.screen.height > 864
      ? window.screen.height * 0.7
      : window.screen.height * 0.6;

  // const loadRestaurantsData = async () => {
  //   setIsloading(true);
  //   try {
  //     const res = await getAllRestaurants();

  //     console.log("res", res);
  //     if (res.status === 200) {
  //       setCurrentPageInfo((prev) => ({
  //         ...prev,
  //         totalItem: res.data.length,
  //       }));
  //       setData(res.data);
  //     }
  //   } catch (error) {
  //     setIsloading(false);
  //   } finally {
  //     setIsloading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadRestaurantsData();
  // }, [reload]);

  return (
    <div>
      {/* to show toast messages */}
      <ToastContainer />
      {/* custom model for add or edit restaurants */}
      {/* <CustomModal
        onClose={() => setShowModal(false)}
        showModal={showModal}
        childElement={
          <CreateRestaurant
            onClose={(ele) => {
              if (ele) setReload((prev) => prev + 1);
              setShowModal(false);
            }}
            modalValue={modalValue}
            headingText={modalType}
          />
        }
      /> */}

      {/* <DeleteDialogBOX
        item={modalValue}
        type={modalType}
        onClose={(ele) => {
          if (ele) setReload((prev) => prev + 1);
          setShowDrawer(false);
        }}
        showDrawer={showDrawer}
      /> */}
      <div className="space-y-4 w-full px-4 relative">
        {/* <div
          onClick={() => {
            setModalType("");
            setModalValue(null);
            setShowModal(true);
          }}
          className={` hover:bg-gray-300  ease-in-out duration-300 h-fit py-2 select-none rounded-2xl  shadow-md border-[1px]  flex items-center bg-[#EFEFEF] w-fit gap-2 px-2 cursor-pointer `}
        >
          <img src={CreateIcon} className="w-8 h-8" />

          <h1 className="font-AvenirLTProHeavy text-lg  leading-6">
            Create Restaurant
          </h1>
        </div> */}

        <div className="w-full flex-grow   border-[1px] border-t-[##D7D4D4] rounded-2xl">
          {isLoading ? (
            <div className="h-32 items-center justify-center flex">
              <Spinner size={20} color="red" />
            </div>
          ) : (
            <CustomGrid
              columns={columns}
              rows={rows}
              gWidth={gWidth}
              itemPerPage={currentPageInfo.itemPerPage}
              count={currentPageInfo?.totalItem}
              handleChangePageUrUpdate={(e) => {
                setCurrentPageInfo((prev) => ({ ...prev, pageNo: e + 1 }));
                setReload(reload + 1);
              }}
              givenPage={currentPageInfo?.pageNo}
              handlerRowsPerPage={(e) => {
                setCurrentPageInfo((prev) => ({
                  ...prev,
                  itemPerPage: Number(e),
                  pageNo: 1,
                }));
                setReload(reload + 1);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
