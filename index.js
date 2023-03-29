// Code your solution here
function findMatching(array, string) { 
    return array.filter(function (drivers) {
        return drivers === string || drivers === string.toLowerCase();
    })
}

function fuzzyMatch(array, string) {
    return array.filter((element) => element.slice(0, string.length).toLowerCase().includes(string.toLowerCase()));
}

function matchName(array, string) {
    return array.filter(driver => driver.name === string);
}