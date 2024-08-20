import React, { useEffect, useState } from "react";
import { barObject } from "./utils/constans";

const Test = ({ item }) => {
  const [result, setResult] = useState();
  const [dataa, setDataa] = useState();
  console.log(result);
  

  useEffect(() => {
    setDataa(item.WidgetData);
  }, []);

  useEffect(() => {
    function calculatePercentages(dataa) {
      const total = dataa?.reduce((sum, obj) => sum + Object.values(obj)[0], 0);

      
      const percentages = dataa?.map((obj) => {
        const key = Object.keys(obj)[0];
        const value = obj[key];
        const percentage = (value / total) * 100;

        return { ...obj, [key]: `${percentage}` };
      });

      setResult(percentages);
    }
    calculatePercentages(dataa);
  }, [dataa]);

  return (
    <div className="w-full py-4">
      <div className=" rounded-xl h-5 w-full overflow-hidden flex flex-row">
        {result &&
          result.map((item, i) => (
            <div
              key={i}
              style={{
                width: `${item[Object.keys(item)[0]]}%`,
                backgroundColor: `${barObject[i]}`,
              }}
              className={`h-full`}
            ></div>
          ))}
      </div>

      <div>
        {result?.map((item, i) => (
          <div
            key={i}
            className="flex flex-row justify-between  px-2 w-full py-1 text-sm text-gray-500 font-light"
          >
            <span>{Object.keys(item)}</span>
            <div className=" w-1/5">
              <span>{Math.floor(item[Object.keys(item)])}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
