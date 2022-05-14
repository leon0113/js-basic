// let fact = 1;
// for (let i = 1; i <= 5; i++) {
//     fact = fact * i;

// }
// console.log(fact);

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
var result = factorial(5);
console.log(result);