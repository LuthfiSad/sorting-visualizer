import React from "react";
import ArrayBarRangeSlider from "./ArrayBarRangeSlider/ArrayBarRangeSlider";
import AnimationSpeedRangeSlider from "./AnimationSpeedRangeSlider/AnimationSpeedRangeSlider";
import "./RangeSlider.css";

interface RangeSliderProps {
  numberOfArrayBars: number;
  animationSpeed: number;
  onChangeArrayBarRangeSlider: (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => void;
  onChangeAnimationSpeedRangeSlider: (
    event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  numberOfArrayBars,
  animationSpeed,
  onChangeArrayBarRangeSlider,
  onChangeAnimationSpeedRangeSlider,
}) => {
  return (
    <div id="range-slider">
      <div className="column">
        <ArrayBarRangeSlider
          numberOfArrayBars={numberOfArrayBars}
          onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        />
      </div>
      <div className="column">
        <AnimationSpeedRangeSlider
          animationSpeed={animationSpeed}
          onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
