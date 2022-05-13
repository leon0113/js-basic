function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2027;
const checkMyYear = isLeapYear(myYear);
console.log(checkMyYear);