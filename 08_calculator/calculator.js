const add = function(a, b) {
	c = a + b;
  return c;
};

const subtract = function(a, b) {
	c = a - b;
  return c;
};

const sum = function(numbers) {
  total = numbers.reduce((previousValue, currentValue) => {
    return previousValue += currentValue;
  },0);
  return total;
};

const multiply = function(numbers) {
  total = numbers.reduce((previousValue, currentValue) => {
    return previousValue *= currentValue;
  },1);
  return total;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(x) {
  if (x === 0)
  {
     return 1;
  }
   return x * factorial(x-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
