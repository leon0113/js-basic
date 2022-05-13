var numbers = [12, 52, 65, 32, 50];
// var num = numbers[0];
// numbers[1] = 15;

// console.log(numbers);
for (var i = 0; i < numbers.length; i++) {
    var eachNumber = numbers[i];
    if (eachNumber > 60) {
        continue;
    }
    // console.log(eachNumber);
}

for (var f = 0; f < 5; f++) {
    // console.log(f);
}

function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}
var output = isMoonUp(12);
// console.log(output)