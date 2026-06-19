const fibonacci = function(num) {
    const numOnly = +num;
    if (numOnly < 0) {
        return "OOPS";
    } else if (numOnly === 0) {
        return 0;
    } else {
        let prev = 0;
        let curr = 1;
        for (let i = 0; i < numOnly - 1; i++) {
            let next = prev + curr;
            prev = curr;
            curr = next;
        };
        return curr;
    }
};

// Do not edit below this line
module.exports = fibonacci;
