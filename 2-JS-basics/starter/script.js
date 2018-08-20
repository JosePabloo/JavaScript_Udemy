var firstName = "Jose";
var lastName = 'Perales';

console.log(lastName);
console.log(lastName.length);

var now = 2018; 
var yearJose = 1997
;
var fullAge = 21;

var isFullAge = now - yearJose >= fullAge;

console.log(isFullAge);

//setting Marks Mass and Height
var marksMass = 100;
var marksHeight = 6.0;

//Setting Johns Mass and Height
var johnsMass = 120;
var johnsHeight = 5.7;

//Calculating Marks BMI 
var marksBMI = marksMass/(marksHeight*marksHeight);

//Calculating Johns BMI 
var johnsBMI = johnsMass/(johnsHeight * johnsHeight); 

//Boolean to see if mark has a higher BMI 
console.log(marksBMI>johnsBMI);
console.log("Mark's BMI is: " + marksBMI);
console.log("John's BMI is: "+ johnsBMI);
