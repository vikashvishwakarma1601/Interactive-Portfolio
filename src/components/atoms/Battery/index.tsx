import React, { useEffect, useState } from "react";

import FontIcon from "../FontIcon";
import BatteryWithCharging from "../../../assets/icons/battery-charging.svg?react";
import BatteryWithoutCharging from "../../../assets/icons/battery.svg?react";
import { BatteryContainer } from "./style";

const Battery = () => {
  const [isCharging, setIsCharging] = useState(false);
  useEffect(() => {
    if ("getBattery" in navigator) {
      (navigator.getBattery() as any).then((battery: any) => {
        setIsCharging(battery.charging);
        battery.addEventListener("chargingchange", () => {
          setIsCharging(battery.charging);
        });
      });
    }
  }, []);

  return (
    <BatteryContainer>
      <FontIcon
        icon={isCharging ? BatteryWithCharging : BatteryWithoutCharging}
      />
    </BatteryContainer>
  );
};

export default Battery;
