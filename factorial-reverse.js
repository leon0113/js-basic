function getReverseFactorial(num) {
    let factorial = 1;
    let i = num;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const result = getReverseFactorial(5);
console.log(result);