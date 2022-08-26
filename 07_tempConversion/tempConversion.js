const ftoc = function(temp) {
  //from fahrenheit
  //C = (F - 32) * .556
  return Math.floor((temp - 32) * .556);
};

const ctof = function(temp) {
  //from celsius
  //F = C * 1.8 + 32
  return Math.floor(temp * 1.8 + 32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
