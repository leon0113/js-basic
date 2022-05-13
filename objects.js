var student1 = {
    id: 101,
    name: "abc",
    marks: 90,
    phone: 016546456,
    height: 5.5
};


var mobile = {
    color: "black",
    price: 100000,
    screensize: "5inch",
    Storage: "16gb"
};

var computer = {
    price: 2000000,
    Storage: '156gb',
    processor: 'intel i5'
}
console.log(computer.processor);

var comPrice = computer.price;
console.log(comPrice);

computer.price = 2200000;
console.log(computer.price);