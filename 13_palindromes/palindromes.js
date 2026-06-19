const palindromes = function (string) {
    const cleanStr = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverseStr = cleanStr.split("").reverse().join("");

    if (reverseStr === cleanStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
