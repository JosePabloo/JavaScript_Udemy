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

//Boolean logic
yearJose >= 21 ? console.log("Jose is legal")
: console.log(" Can not drink");


var johnGame1 = 89;
var johnGame2 = 120;
var johnGame3 = 103;
var johnsAvg; 

var marksGame1 = 116;
var marksGame2 = 94;
var marksGame3 = 123;
var marksAvg;

//Calculating John's average 
johnsAvg = (johnGame1+johnGame2+johnGame3) /3;
//Calculating Marks's average 
marksAvg = (marksGame1 + marksGame2 + marksGame3) / 3; 

//Printing winner
console.log("John's Score: "+johnsAvg);
console.log("Mark's Sore: "+marksAvg);

johnsAvg > marksAvg ? console.log("John wins in average points: "+johnsAvg)
: console.log("Mark wins in average points: " + marksAvg);

