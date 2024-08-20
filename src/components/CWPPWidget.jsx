import React, { useState } from "react";
import data from "../data.json";

const CWPPWidget = ({ setCheckedWidgets }) => {
  const [dataa, setDataa] = useState(data[1]);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setCheckedWidgets((prev) => [
        ...prev,
        { category: dataa?.category, WidgetName: e.target.value },
      ]);
    } else {
      // console.log("hello :", e.target.value);

      setCheckedWidgets((prev) =>
        prev.filter((item) => item.WidgetName !== e.target.value)
      );
    }
  };

  return (
    <>
      {dataa?.widgets.map((item) => (
        <div
          key={item?.WidgetName}
          className=" border-2 border-gray-200 rounded-md w-full flex flex-row  items-center"
        >
          <input
            type="checkbox"
            value={item?.WidgetName}
            className=""
            onChange={handleCheckboxChange}
          />
          <span className="text-blue-800 font-semibold text-">
            {item?.WidgetName}
          </span>
        </div>
      ))}
    </>
  );
};

export default CWPPWidget;
