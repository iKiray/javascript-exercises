const removeFromArray = function(array, ...items) {
   const newArray = array.filter(item => !items.includes(item));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
