import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/Slices/WidgetSlice";

// console.log(textInput);

const AddWidgetValues = ({ category, setIstrue }) => {
  const [textInput1, setTextInput1] = useState({ text: "", value: 0 });
  const [textInput2, setTextInput2] = useState({ text: "", value: 0 });
  const [textInput3, setTextInput3] = useState({ text: "", value: 0 });
  const [textInput4, setTextInput4] = useState({ text: "", value: 0 });

  const [widgetName, setWidgetName] = useState();
  const dispatch = useDispatch();
  // console.log(widgetName);

  // const [WidgetMainData, setWidgetMainData] = useState({
  //   WidgetName: "",
  //   WidgetData: [{}],
  // });

  function HandleConfirm() {
    let array = [];
    if (textInput1.text) {
      array.push({ [textInput1.text]: +textInput1.value });
    }
    if (textInput2.text) {
      array.push({ [textInput2.text]: +textInput2.value });
    }
    if (textInput3.text) {
      array.push({ [textInput3.text]: +textInput3.value });
    }
    if (textInput4.text) {
      array.push({ [textInput4.text]: +textInput4.value });
    }
    
    dispatch(add({ category, WidgetName: widgetName, WidgetData: array }));

    setIstrue(false);
  }

  function HandleCancel() {
    setIstrue(false);
  }

  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="bg-blue-700 h-8 w-full"></div>
        <span className=" pl-2 py-3 text-xs text-gray-500">
          Add new Widget Here
        </span>

        <div className="flex flex-col  py-2 px-1 justify-between w-5/6">
          <input
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="Enter widget name"
            className="text-base  bg-gray-100 outline-none placeholder:text-lg placeholder:text-gray-400 rounded-md border border-gray-900 px-4 h-10"
          />
          <span className="text-gray-400 px-4 py-1 font-bold">Widget name</span>
        </div>

        <div className=" h-fit w-80 text-xs  rounded-xl overflow-hidden shadow-xl px-1 py-3 bg-gray-100">
          <div className="flex flex-row w-full">
            <div className="flex flex-col  py-2 px-1 justify-between w-4/6">
              <input
                value={textInput1.text}
                onChange={(e) =>
                  setTextInput1({ ...textInput1, text: e.target.value })
                }
                type="text"
                name=""
                id=""
                placeholder="Enter Text 1"
                className="text-base  bg-gray-100 outline-none placeholder:text-sm placeholder:text-gray-400 rounded-md border border-gray-900 px-4 h-10"
              />
              <span className="text-gray-400 px-4 py-1 font-bold">
                Text - 1{" "}
              </span>
            </div>

            <div className="flex flex-col  py-2 px-1 justify-between w-2/6">
              <input
                value={textInput1.value}
                onChange={(e) =>
                  setTextInput1({ ...textInput1, value: e.target.value })
                }
                type="number"
                name=""
                id=""
                placeholder="Enter Text 1"
                className="text-base  bg-gray-100 outline-none placeholder:text-sm placeholder:text-gray-400 rounded-md border border-gray-900 px-4 h-10"
              />
              <span className="text-gray-400 px-4 py-1 font-bold  text-[11px] text-nowrap">
                Text - 1 Value{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex flex-col  py-2 px-1 justify-between w-4/6">
              <input
                value={textInput2.text}
                onChange={(e) =>
                  setTextInput2({ ...textInput2, text: e.target.value })
                }
                type="text"
                name=""
                id=""
                placeholder="Enter Text 2"
                className="text-base  bg-gray-100 outline-none placeholder:text-sm placeholder:text-gray-400 rounded-md border border-gray-900 px-4 h-10"
              />
              <span className="text-gray-400 px-4 py-1 font-bold ">
                Text - 2{" "}
              </span>
            </div>

            <div className="flex flex-col  py-2 px-1 justify-between w-2/6">
              <input
                value={textInput2.value}
                onChange={(e) =>
                  setTextInput2({ ...textInput2, value: e.target.value })
                }
                type="number"
                name=""
                id=""
                placeholder="Enter Text 2"
                className="text-base  bg-gray-100 outline-none placeholder:text-sm placeholder:text-gray-400 rounded-md border border-gray-900 px-4 h-10"
              />
              <span className="text-gray-400 px-4 py-1 font-bold text-nowrap text-[11px] ">
                Text - 2 Value{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex flex-col  py-2 px-1 justify-between w-4/6">
              <input
                value={textInput3.text}
                onChange={(e) =>
                  setTextInput3({ ...textInput3, text: e.target.value })
                }
                type="text"
                name=""
                id=""
                placeholder="Enter Text 3"
                className="text-base  bg-gray-100 outline-none placeholder:text-sm placeholder:text-gray-400 rounded-md border border-gray-900 px-4 h-10"
              />
              <span className="text-gray-400 px-4 py-1 font-bold">
                Text - 3{" "}
              </span>
            </div>

            <div className="flex flex-col  py-2 px-1 justify-between w-2/6">
              <input
                value={textInput3.value}
                onChange={(e) =>
                  setTextInput3({ ...textInput3, value: e.target.value })
                }
                type="number"
                name=""
                id=""
                placeholder="Enter Text 3"
                className="text-base  bg-gray-100 outline-none placeholder:text-sm placeholder:text-gray-400 rounded-md border border-gray-900 px-4 h-10"
              />
              <span className="text-gray-400 px-4 py-1 font-bold text-[11px] text-nowrap">
                Text - 3 Value{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="flex flex-col  py-2 px-1 justify-between w-4/6">
              <input
                value={textInput4.text}
                onChange={(e) =>
                  setTextInput4({ ...textInput4, text: e.target.value })
                }
                type="text"
                name=""
                id=""
                placeholder="Enter Text 4"
                className="text-base  bg-gray-100 outline-none placeholder:text-sm placeholder:text-gray-400 rounded-md border border-gray-900 px-4 h-10"
              />
              <span className="text-gray-400 px-4 py-1 font-bold">
                Text - 4{" "}
              </span>
            </div>

            <div className="flex flex-col  py-2 px-1 justify-between w-2/6">
              <input
                value={textInput4.value}
                onChange={(e) =>
                  setTextInput4({ ...textInput4, value: e.target.value })
                }
                type="number"
                name=""
                id=""
                placeholder="Enter Text 4"
                className="text-base  bg-gray-100 outline-none placeholder:text-sm placeholder:text-gray-400 rounded-md border border-gray-900 px-4 h-10"
              />
              <span className="text-gray-400 px-4 py-1 font-bold  text-[11px] text-nowrap">
                Text - 4 Value{" "}
              </span>
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

export default AddWidgetValues;
