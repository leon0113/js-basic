var numbers = [45, 56, 52, 31, 100, 105, 205, 10];
//console.log(numbers.length);
for (var i = 0; i < numbers.length; i++) {
    var eachNumber = numbers[i];
    if (eachNumber > 50) {
        continue;
    }
    console.log(eachNumber);
}
