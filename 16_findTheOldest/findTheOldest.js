const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currYear = new Date().getFullYear();
        const age = (person.yearOfDeath || currYear) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currYear) - oldest.yearOfBirth;
        return age > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
