//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function loop(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

loop(10);

//2. Next, try looping just like above except using recursion
function recursiveLoop(number) {
  console.log(number);

  if (number <= 0) return number;

  return recursiveLoop(number - 1);
}

recursiveLoop(10);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
  let result = 1;

  while (expo > 0) {
    result *= base;
    expo--;
  }

  return result;
}

console.log(exponent(2, 6));

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {
  if (expo === 1) return base;

  return base * recursiveExponent(base, expo - 1);
}

console.log(recursiveExponent(2, 3));

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
  if (arr.length === 0) return arr;

  return [arr.shift() * num].concat(recursiveMultiplier(arr, num));
}

console.log(recursiveMultiplier([1, 2, 3], 6));

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
  if (arr.length === 0) return arr;

  return [arr.pop()].concat(recursiveReverse(arr));
}

console.log(recursiveReverse([1, 2, 3, 4]));
