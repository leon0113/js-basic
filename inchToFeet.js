function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var myinch1 = 132;
var feet1 = inchToFeet(myinch1);
console.log('My Inches1 in feet : ', feet1);

var myinch2 = 144;
var feet2 = inchToFeet(myinch2);
console.log('My Inches', myinch2, 'in feet : ', feet2, 'ft');

