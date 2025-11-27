const sumAll = function(num1, num2) {
    let sumAll = 0

    if (Number.isInteger(num1) !== true || Number.isInteger(num2) !== true) {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }

    for (let i = num1; i <= num2; i++) {
        sumAll += i;
    }

    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
