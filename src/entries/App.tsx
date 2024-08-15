import React, { useState, useEffect } from "react";
// Components
import Header from "@/Components/Header/Header";
import ButtonsBar from "@/Components/ButtonsBar/ButtonsBar";
import ArrayBar from "@/Components/ArrayBar/ArrayBar";
import RangeSlider from "@/Components/RangeSliders/RangeSlider";
// Helper Functions
import { randomIntFromInterval, playAudio } from "@/helper";
// Algorithms
import BubbleSort from "@/SortingAlgorithms/BubbleSort/BubbleSort";
import SelectionSort from "@/SortingAlgorithms/SelectionSort/SelectionSort";
import InsertionSort from "@/SortingAlgorithms/InsertionSort/InsertionSort";
// Style
import "./App.css";
// Sounds
import ResetEffect from "@/assets/sounds/ResetEffect.mp3";

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [animationSpeed, setAnimationSpeed] = useState(100);
  const [numberOfArrayBars, setNumberOfArrayBars] = useState(5);

  useEffect(() => {
    generateNewArray();
  }, [numberOfArrayBars]);

  const generateNewArray = () => {
    const newArray = Array.from({ length: numberOfArrayBars }, () =>
      randomIntFromInterval(1, 70)
    );
    playAudio(ResetEffect);
    setArray(newArray);
  };

  const onChangeArrayBarRangeSlider = (
    _e: Event | React.SyntheticEvent,
    value: number | number[]
  ) => {
    if (typeof value === "number") {
      setNumberOfArrayBars(value);
    }
  };

  const onChangeAnimationSpeedRangeSlider = (
    _e: Event | React.SyntheticEvent,
    value: number | number[]
  ) => {
    if (typeof value === "number") {
      setAnimationSpeed(value);
    }
  };

  const bubbleSort = () => {
    BubbleSort(array, animationSpeed);
  };

  const selectionSort = () => {
    SelectionSort(array, animationSpeed);
  };

  const insertionSort = () => {
    InsertionSort(array, animationSpeed);
  };

  return (
    <div className="main-container">
      <Header />
      <RangeSlider
        numberOfArrayBars={numberOfArrayBars}
        animationSpeed={animationSpeed}
        onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
      />
      <ButtonsBar
        generateNewArray={generateNewArray}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
      />
      <ArrayBar array={array} />
    </div>
  );
};

export default SortingVisualizer;
