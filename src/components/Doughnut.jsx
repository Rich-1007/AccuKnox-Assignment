import React, { useEffect, useState } from "react";
import { ChartDonut, ChartThemeColor } from "@patternfly/react-charts";

const Doughnut = ({ item }) => {
  // console.log(item);
  const [total, setTotal] = useState(0);
  const [arrayNum, setArrayNum] = useState();
  const [arrayDoughnut, setArrayDoughnut] = useState();
  // console.log(arrayDoughnut);

  function ArrayData() {
    let arrayNum = [];
    let arrayDoughnut = [];

    item.WidgetData?.map(
      (item) =>
        (arrayNum = [
          ...arrayNum,
          { name: `${Object.keys(item)} : (${Object.values(item)}) ` },
        ])
    );
    setArrayNum(arrayNum);

    item.WidgetData?.map((item) => {
      arrayDoughnut = [
        ...arrayDoughnut,
        { x: `${Object.keys(item)}`, y: ` ${Object.values(item)}` },
      ];

      setArrayDoughnut(arrayDoughnut);
    });

    // { x: "Cats", y: 200 },
  }
  // console.log(arrayDoughnut);

  useEffect(() => {
    if (item.WidgetData) {
      let total = 0;
      item.WidgetData.map((item) => {
        total = total + +Object.values(item);
      });

      setTotal(total);
    }
    ArrayData();
  }, []);

  return (
    <div
  
      style={{  height: "210px", width: "340px" }}
    >
      <ChartDonut
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        radius="100"
        innerRadius="55"
        constrainToVisibleArea
        data={arrayDoughnut}
        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
        legendData={arrayNum}
        legendOrientation="vertical"
        legendPosition="right"
        name="chart3"
        padding={{
          bottom: 20,
          left: 0,
          right: 140,
          top: 20,
        }}
        subTitle="Total"
        title={total}
        themeColor={ChartThemeColor.multiOrdered}
        width={350}
      />
    </div>
  );
};

export default Doughnut;
