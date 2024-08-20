import React, { useEffect, useState } from "react";
import data from "../data.json";
import CSPMWidget from "./CSPMWidget";
import CWPPWidget from "./CWPPWidget";
import RegistryScan from "./RegistryScan";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/WidgetSlice";

const AddCategory = ({ SetAddCategory }) => {
  const [inActive, setInActive] = useState("CSPM Executive Dash board");
  // const [dataa, setDataa] = useState(data);

  const [checkedWidgets, setCheckedWidgets] = useState([]);

  // console.log(checkedWidgets);

  function HandelerCSPM() {
    setInActive("CSPM Executive Dash board");
  }
  function HandelerCWPP() {
    setInActive("CWPP Dashboard");
  }
  function HandelerImage() {
    setInActive("Registry Scan");
  }

  function HandleCancel() {
    SetAddCategory((prev) => !prev);
  }

  const dispatch = useDispatch();
  function HandleConfirm() {
    checkedWidgets?.map((item) => dispatch(remove(item)));
    SetAddCategory((prev) => !prev);

  }

  return (
    <>
      <div className="  flex flex-col items-center justify-between h-screen">
        <div>
          <div className="bg-blue-700  h-8 w-full flex items-center justify-center">
            <span className=" pl-2 py-3 text-xs text-gray-100">Add Widget</span>
          </div>

          <div>
            <span>
              Personalise your Dashboard by adding the following widget
            </span>
          </div>

          <div className="shadow-lg flex flex-row gap-5 px-4 py-3 rounded-md">
            <div
              onClick={HandelerCSPM}
              className={
                inActive === "CSPM Executive Dash board"
                  ? "text-blue-700 cursor-pointer  border-b-2 border-blue-700"
                  : "text-gray-500 cursor-pointer"
              }
            >
              <span className="text-[11px] text-nowrap ">
                CSPM Executive Dash board
              </span>
            </div>

            <div
              onClick={HandelerCWPP}
              className={
                inActive === "CWPP Dashboard"
                  ? "text-blue-700 cursor-pointer  border-b-2 border-blue-700"
                  : "text-gray-500 cursor-pointer"
              }
            >
              <span className="text-[11px] text-nowrap ">CWPP Dashboard</span>
            </div>

            <div
              onClick={HandelerImage}
              className={
                inActive === "Registry Scan"
                  ? "text-blue-700 cursor-pointer  border-b-2 border-blue-700"
                  : "text-gray-500 cursor-pointer"
              }
            >
              <span className="text-[11px] text-nowrap ">Registry Scan</span>
            </div>
          </div>

          <div className="w-full py-4 px-3 ">
            <div
              className={
                inActive === "CSPM Executive Dash board" ? "" : "hidden"
              }
            >
              <CSPMWidget setCheckedWidgets={setCheckedWidgets} />
            </div>

            <div className={inActive === "CWPP Dashboard" ? "" : "hidden"}>
              <CWPPWidget setCheckedWidgets={setCheckedWidgets} />
            </div>
            <div className={inActive === "Registry Scan" ? "" : "hidden"}>
              <RegistryScan setCheckedWidgets={setCheckedWidgets} />
            </div>
          </div>
        </div>

        <div className="flex  py-9 pr-3 w-full justify-end gap-3">
          <button
            onClick={HandleCancel}
            className="border border-blue-600 rounded-md px-4 py-1 font-semibold transition-all duration-200 hover:text-white hover:bg-blue-600"
          >
            Cancel
          </button>
          <button
            onClick={HandleConfirm}
            className="border border-blue-600 rounded-md px-4 py-1 font-semibold transition-all duration-200 hover:text-white hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
