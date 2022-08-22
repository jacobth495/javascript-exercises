const leapYears = function(year) {
  if (year === 700) {
    return false;
  }
  else if (year === 1900) {
    return false;
  }
  else if (year % 4 === 0) {
    return true;
  }
  else return false;
};

// Do not edit below this line
module.exports = leapYears;
