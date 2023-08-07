/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  if (array.length === 0) {
    return undefined;
  }

  let minValue = array[0];
  let minResult = cb(minValue);

  for (let i = 1; i < array.length; i++) {
    const currentResult = cb(array[i]);
    if (currentResult < minResult) {
      minValue = array[i];
      minResult = currentResult;
    }
  }

  return minValue;
}

export function maxBy(array, cb) {
  if (array.length === 0) {
    return undefined;
  }

  let maxValue = array[0];
  let maxResult = cb(maxValue);

  for (let i = 1; i < array.length; i++) {
    const currentResult = cb(array[i]);
    if (currentResult > maxResult) {
      maxValue = array[i];
      maxResult = currentResult;
    }
  }

  return maxValue;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function