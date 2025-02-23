"use client";
import { useState } from "react";
import Switch from "react-switch";

export default function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Switch
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
        onColor="#000000"
        offColor="#E5E7EB"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={48}
      />
      <span>{isChecked ? "Enabled" : "Disabled"}</span>
    </div>
  );
}
