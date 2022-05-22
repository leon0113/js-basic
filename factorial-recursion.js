/* let factorial = 1;
for (let i = 4; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial); */

// using function

function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return factorial(--i) * i;
}

console.log(factorial(4));