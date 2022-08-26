const ftoc = function(temp) {
  //from fahrenheit
  //C = (F - 32) * .556
  let celsius = (temp - 32) * .5556;
  return  parseFloat(celsius.toFixed(1));
};

const ctof = function(temp) {
  //from celsius
  //F = C * 1.8 + 32
  let fahrenheit = temp * 1.8 + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
