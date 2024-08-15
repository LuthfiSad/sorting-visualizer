import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import "./AnimationSpeedRangeSlider.css";

const AnimationSpeedSlider = styled(Slider)({
  color: "rgba(100, 180, 255, 1)",
  inlineSize: "50%",
  padding: 10,
  "& .MuiSlider-thumb": {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid cyan",
    marginLeft: 0,
  },
});

interface AnimationSpeedRangeSliderProps {
  animationSpeed: number;
  onChangeAnimationSpeedRangeSlider: (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => void;
}

const AnimationSpeedRangeSlider: React.FC<AnimationSpeedRangeSliderProps> = ({
  animationSpeed,
  onChangeAnimationSpeedRangeSlider,
}) => {
  return (
    <div className="range-slider-container">
      <p id="text-animation-speed">Animation Speed (ms)</p>
      <AnimationSpeedSlider
        id="animationSpeedSlider"
        min={10}
        max={200}
        defaultValue={animationSpeed}
        valueLabelDisplay="auto"
        onChangeCommitted={onChangeAnimationSpeedRangeSlider}
      />
    </div>
  );
};

export default AnimationSpeedRangeSlider;
