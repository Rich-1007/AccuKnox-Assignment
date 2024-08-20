import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { MdAccessTimeFilled } from "react-icons/md";
import { PiBellRinging } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { remove } from "./Redux/Slices/WidgetSlice";
import Doughnut from "./components/Doughnut";
import AddWidgetValues from "./components/AddWidgetValues";
import NoData from "./components/NoData";
import Test from "./Test";
import AddCategory from "./components/AddCategory";

const Home = () => {
  const dispatch = useDispatch();
  const [istrue, setIstrue] = useState(false);
  const [category, setCategory] = useState();
  const [addCategory, SetAddCategory] = useState(false);

  const { data: newData } = useSelector((store) => store.categories);
  const [filteredData, setFilteredData] = useState(newData);
  useEffect(() => {
    setFilteredData(newData);
  }, [newData]);

  function searchWidget(searchName) {
    const lowerCaseSearchName = searchName.toLowerCase();
    const matchedWidgets = [];

    newData.forEach((data) => {
      data.widgets.forEach((widget) => {
        if (widget.WidgetName.toLowerCase().includes(lowerCaseSearchName)) {
          const existingCategory = matchedWidgets.find(
            (item) => item.category === data.category
          );

          if (existingCategory) {
            existingCategory.widgets.push({
              WidgetName: widget.WidgetName,
              WidgetData: widget.WidgetData,
            });
          } else {
            matchedWidgets.push({
              category: data.category,
              widgets: [
                {
                  WidgetName: widget.WidgetName,
                  WidgetData: widget.WidgetData,
                },
              ],
            });
          }
        }
      });
    });
    setFilteredData(matchedWidgets);
  }
  function HandleCloudAccounts(category) {
    setCategory(category);
    setIstrue((prev) => !prev);
  }
  function HandleRemove(widget, item) {
    dispatch(
      remove({ category: item.category, WidgetName: widget.WidgetName })
    );
  }
  return (
    <>
      {istrue && (
        <div className=" fixed z-10 right-0 bottom-0 top-0   bg-white w-[470px]">
          <AddWidgetValues setIstrue={setIstrue} category={category} />
        </div>
      )}
      {addCategory && (
        <div className=" fixed z-10 right-0 bottom-0 top-0   bg-white w-[470px]">
          <AddCategory SetAddCategory={SetAddCategory} />
        </div>
      )}

      <div className="flex flex-col justify-between py-1  ">
        <div className="flex flex-row justify-between py-1 ">
          <div className="flex flex-row ">
            <div className=" pl-1 md:pl-7 gap-2 text-xs md:text-base flex flex-row  items-center  justify-center    ">
              <span className="text-gray-400">Home</span>
              <FaChevronRight size={11} className="text-gray-400" />
              <span className="font-bold md:text-base text-green-800 text-nowrap text-xs">
                Dashboard v2
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center  ">
            <div className="hidden md:flex flex-row items-center border-2 border-blue-200 pl-1  pr-32 rounded-md   bg-blue-100 py-0  ">
              <IoIosSearch />
              <input
                type="text"
                placeholder="Search anything..."
                onChange={(e) => searchWidget(e.target.value)}
                className="bg-blue-100   pl-2"
              />
            </div>
            <div className="flex flex-row md:px-10 px-2 md:gap-5 gap-2">
              <IoChevronDownSharp />
              <PiBellRinging />
              <FaRegCircleUser />
            </div>
          </div>
        </div>
        <div className="mx-3 my-1 md:hidden flex flex-row items-center border-2 border-blue-200 pl-1  pr-32 rounded-md   bg-blue-100 py-0  ">
          <IoIosSearch />
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-blue-100   pl-2"
          />
        </div>
      </div>
      <div className="bg-blue-100 flex px-2 md:px-7 flex-col pt-5 ">
        <div className="flex flex-row justify-between w-full ">
          <div className="flex items-center font-bold text-sm text-nowrap">
            <span>CNAPP Dashboard</span>
          </div>
          <div className="flex flex-col md:flex-row gap-3  text-nowrap ">
            <div
              onClick={() => SetAddCategory((prev) => !prev)}
              className="hover:cursor-pointer  py-1     flex flex-row items-center gap-3 text-sm px-2 rounded-md border-2 border-gray-200 bg-white"
            >
              <span>Add Widget </span>
              <FaPlus size={10} />
            </div>
            <div className=" md:block hidden p-2 bg-white rounded-md border-2 border-gray-200">
              <LuRefreshCcw size={13} />
            </div>
            <div className=" md:block hidden  p-2 bg-white rounded-md border-2 border-gray-200">
              <BsThreeDotsVertical size={13} />
            </div>
            <div className=" p-1 bg-white rounded-md border text-blue-900 font-semibold text-sm border-blue-800 flex flex-row items-center ">
              <MdAccessTimeFilled className="mr-1" />
              <div className="border-l border-blue-800 flex flex-row items-center justify-between px-2 gap-2">
                <span>Last 2 days</span>
                <FaChevronDown size={13} />
              </div>
            </div>
          </div>
        </div>
        <div className="    relative  h-full flex flex-col items-center pb-8 mt-6 md:mt-0 pt-9">
          {filteredData &&
            filteredData.length > 0 &&
            filteredData?.map((item, i) => (
              <div
                className="flex flex-col md:flex-row w-full relative overflow-x-scroll   "
                key={i}
              >
                <div className="-top-1.5 w-full absolute z-10 outlin ">
                  <span className="font-semibold text-sm  text-nowrap ">
                    {item.category}
                  </span>
                </div>
                {item?.widgets.map((widget, i) => (
                  <div
                    key={i}
                    className="bg-gray-100  p-4 rounded-xl  md:w-1/3  "
                  >
                    <div className=" h-64 md:w-96  overflow-hidden bg-white rounded-xl px-2 py-1    ">
                      <div className="  flex flex-row w-full justify-between">
                        <span className="text-sm font-semibold ">
                          {widget.WidgetName}
                        </span>
                        <div
                          onClick={() => HandleRemove(widget, item)}
                          className=" hover:bg-blue-100 px-2 py-1 rounded-md"
                        >
                          <RxCross1 size={13} />
                        </div>
                      </div>
                      <div className="flex  flex-row w-full h-full">
                        {widget.WidgetData?.length > 0 ? (
                          item?.category === "Registry Scan" ? (
                            <Test item={widget} key={i} />
                          ) : (
                            <Doughnut item={widget} key={i} />
                          )
                        ) : (
                          <NoData />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className=" bg-gray-100 p-4 rounded-xl md:w-full  ">
                  <div className="bg-white  rounded-xl  p-2 w-full   h-64 md:w-96  flex justify-center items-center ">
                    <div
                      onClick={() => HandleCloudAccounts(item.category)}
                      className="     hover:cursor-pointer border-2  flex flex-row  items-center gap-2 rounded-lg md:w-1/3 py-0.5 px-2 text-nowrap "
                    >
                      <AiOutlinePlus size={12} />
                      <span>Add Widget</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
