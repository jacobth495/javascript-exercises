const ftoc = function(f) {
  c = (f - 32) * (5/9);
  cel = c.toFixed(1);
  return parseFloat(cel)
};

const ctof = function(c) {
  f = (c * (9/5) + 32)
  fer = f.toFixed(1)
  return parseFloat(fer)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
