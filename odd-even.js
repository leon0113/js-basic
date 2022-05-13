// function check(num) {
//     var oddEven = num % 2;
//     if (oddEven == 1) {
//         console.log('This is a odd number');
//     }
//     else {
//         console.log('This is a even number');
//     }
//     return oddEven;

// }

// check(5);

function isOdd(num) {
    if (num % 2 == 0) {
        return false;
    }
    return true;
}

const myNum = 145;
const checkMynum = isOdd(myNum);
console.log(checkMynum);
