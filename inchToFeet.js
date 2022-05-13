function inchTofeet(inch) {
    var feet = inch / 12;
    return feet;
}

var myinch1 = 132;
var feet = inchTofeet(myinch1);
console.log('My Inches1 in feet : ', feet);

var myinch2 = 144;
var feet = inchTofeet(myinch2);
console.log('My Inches', myinch2, 'in feet : ', feet, 'ft');

