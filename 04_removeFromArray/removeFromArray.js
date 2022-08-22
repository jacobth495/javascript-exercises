const removeFromArray = function(theArray, ...items) {

  for (i of items) {

    if (theArray.indexOf(i) === -1) {
      continue;
    }
    else {
      index = (theArray.indexOf(i))
      theArray.splice(index, 1)
    }
  }
  
  return theArray;
};
// Do not edit below this line
module.exports = removeFromArray;
