import React, { useState } from "react";
import MenuToggle from "../../assets/SidebarAssets/MenuToggle.svg";
import BrandIcon from "../../assets/SidebarAssets/brandicon.png";
import HomeIcon from "../../assets/SidebarAssets/HomeIcon.svg";
import MapIcon from "../../assets/SidebarAssets/map.png";
import MenuIcon from "../../assets/SidebarAssets/menu.png";

import { MenuItemsType } from "../../types/types";

import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  _sidebarStateControl: (value: boolean) => void;
};
const MenuItems: MenuItemsType[] = [
  {
    id: 1,
    icon: HomeIcon,
    title: "Home",
    isSub: false,
    subItems: [],
    path: "/",
  },
  {
    id: 2,
    icon: MapIcon,
    title: "Map",
    isSub: false,
    subItems: [],
    path: "/map",
  },
  {
    id: 3,
    icon: MenuIcon,
    title: "Master Data",
    isSub: false,
    subItems: [],
    path: "/master",
  },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<MenuItemsType>();
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`flex flex-col bg-SidebarNormal ${
        isOpen ? "w-[10rem] md:w-[20.5rem]" : "w-[5rem] md:w-[6rem]"
      }  h-full transform ease-in-out duration-300   `}
    >
      <div
        className="absolute -right-[2.2rem]  top-7 rounded-full cursor-pointer "
        onClick={() => {
          setIsOpen(!isOpen);
          setIsSubMenuOpen(undefined);
        }}
      >
        {/* Menu Toggle Icon */}
        <img src={MenuToggle} />
      </div>
      <div className=" py-8  px-8  ">
        {/* Logo With text */}
        <div className="flex items-center text-center  space-x-2 ">
          <img src={BrandIcon} className="w-6" />
          <h1
            className={`text-white font-[AvenirBlack] text-[1.4rem] ${
              !isOpen && "hidden"
            } select-none truncate`}
          >
            Electric Car
          </h1>
        </div>
      </div>
      <div className="px-4 pt-4   h-screen overflow-y-auto">
        {MenuItems.map((item, index) => {
          return (
            <div className="select-none" key={index}>
              <div
                className={`flex items-center justify-between my-2 p-4 rounded-md cursor-pointer  hover:bg-SidebarActive  ${
                  location?.pathname === item?.path ? "bg-SidebarActive" : ""
                }`}
                onClick={() => {
                  item?.path && nav(item?.path);

                  setIsOpen(true);
                  if (item?.isSub) {
                    if (isSubMenuOpen) {
                      setIsSubMenuOpen(undefined);
                    } else setIsSubMenuOpen(item);
                  }
                }}
              >
                <div className="flex space-x-4 items-center">
                  <img src={item?.icon} alt={item?.icon} className="w-6 h-6" />
                  {isOpen && (
                    <h1 className="text-white text-[1rem] font-[AvenirLTProHeavy] truncate font-[400]">
                      {item?.title}
                    </h1>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
