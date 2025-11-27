const convertToCelsius = function(temp) {
  let conCel = (temp - 32) / (9/5);
  
  if (conCel === 0) {
    return 0;
  } else {
    let fixed = conCel.toFixed(1);
    return parseFloat(fixed);
  }
};

const convertToFahrenheit = function(temp) {
  let conFah = temp * (9/5) + 32;

  if (conFah === 0) {
    return 0;
  } else {
    let fixed = conFah.toFixed(1);
    return parseFloat(fixed);
  }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
