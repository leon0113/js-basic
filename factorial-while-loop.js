function getFactorial(num) {
    let factorial = 1;
    let i = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++
    }
    return factorial;
}
const output = getFactorial(5);
console.log(output)