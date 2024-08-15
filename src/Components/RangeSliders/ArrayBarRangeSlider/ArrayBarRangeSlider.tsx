import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import "./ArrayBarRangeSlider.css";

const ArrayBarSlider = styled(Slider)({
  color: "rgba(100, 180, 255, 1)",
  inlineSize: "60%",
  padding: 10,
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginLeft: 0,
  },
});

interface ArrayBarRangeSliderProps {
  numberOfArrayBars: number;
  onChangeArrayBarRangeSlider: (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => void;
}

const ArrayBarRangeSlider: React.FC<ArrayBarRangeSliderProps> = ({
  numberOfArrayBars,
  onChangeArrayBarRangeSlider,
}) => {
  return (
    <div className="range-slider-container">
      <p id="text-array-size">Array Size</p>
      <ArrayBarSlider
        id="arrayBarSlider"
        min={2}
        max={14}
        step={1}
        defaultValue={numberOfArrayBars}
        valueLabelDisplay="auto"
        marks
        onChangeCommitted={onChangeArrayBarRangeSlider}
      />
    </div>
  );
};

export default ArrayBarRangeSlider;
