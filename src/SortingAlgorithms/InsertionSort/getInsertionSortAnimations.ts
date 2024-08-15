const getInsertionSortAnimations = (array: number[]): number[] => {
  const animations: number[] = []; // { comparingElement1, comparingElement2, doSwap, sortedTill }

  // Push animation for sorting the first element.
  animations.push(0, 0, 0, 0);

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    // Push animation for comparing 2 elements
    animations.push(i, j, 0, i - 1);

    while (j >= 0 && array[j] > key) {
      // Swapping 2 values
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
      // Push animation for comparing 2 elements
      animations.push(j, j + 1, 0, i);
      // Push animation for swapping 2 elements
      animations.push(j, j + 1, 1, i);
      j--;
    }
  }

  // Push animation to know that it's the end of the animations.
  animations.push(array.length - 1, array.length - 1, 0, array.length - 1);
  return animations;
};

export default getInsertionSortAnimations;
