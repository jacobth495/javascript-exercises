const sumAll = function(start, end) {
  let sum = 0

  type = typeof(end);

  if (type === String) {
    return 'ERROR'
  }
  else {

    if (start > end) {
      for (i = start; i >= end; i--) {
        sum += i;
        }
      }
    else {
      for (i = start; i <= end; i++) {
        sum += i;
        }
      }
  }

  
  if (sum > 0) {
    return sum
  }
  else {
    return 'ERROR'
  }
  
  
};

// Do not edit below this line
module.exports = sumAll;
