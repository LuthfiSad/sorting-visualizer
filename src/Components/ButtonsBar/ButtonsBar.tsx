import React from "react";
import "./ButtonsBar.css";

// Define the props interface
interface ButtonsBarProps {
  generateNewArray: () => void;
  bubbleSort: () => void;
  selectionSort: () => void;
  insertionSort: () => void;
}

// Functional component with TypeScript
const ButtonsBar: React.FC<ButtonsBarProps> = ({
  generateNewArray,
  bubbleSort,
  selectionSort,
  insertionSort,
}) => {
  return (
    <div className="buttons-bar">
      <button onClick={generateNewArray} id="reset">
        Generate New Array
      </button>
      <button
        id="bubbleSortButton"
        onClick={bubbleSort}
        className="buttonStyle1"
      >
        Bubble Sort
      </button>
      <button
        id="selectionSortButton"
        onClick={selectionSort}
        className="buttonStyle2"
      >
        Selection Sort
      </button>
      <button
        id="insertionSortButton"
        onClick={insertionSort}
        className="buttonStyle3"
      >
        Insertion Sort
      </button>
    </div>
  );
};

export default ButtonsBar;
