function isLeapYear(year) {
    if (year % 100 == 0 ? year % 400 == 0 : year % 4 == 0) {
        return true;
    }
    return false;

}
const myYear = 1900;
const checkMyYear = isLeapYear(myYear);
console.log(checkMyYear);





// function leapYear(years) {
//     var result;
//     if (years / 400) {
//         result = true
//     }
//     else if (years / 100) {
//         result = false
//     }
//     else if (years / 4) {
//         result = true
//     }
//     else {
//         result = false
//     }
//     return result
// }
// var output = leapYear(2100);
// console.log(output);
