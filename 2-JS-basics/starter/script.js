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


/*
Functions 
//Functions can take in as many things, need to be seperated by a >> , <<
//We can return stuff with a return tag. 
//We can store things in VARs' 
//we can call other functions withing functions 

*/

function whatAge(birthyear){
   return 2018 - birthyear;
}

var ageJose = whatAge(1997);
var ageDaniel = whatAge(2004);
var ageAlberto = whatAge(2012);
var ageArlyn = whatAge(2010);
console.log("Alberto's age: "+ageAlberto);
console.log("Arlyn's age: "+ageArlyn);
console.log("Daniel's age: " +ageDaniel);
console.log("Jose's age: "+ageJose);


function yearsUntilMillionare(year, name)
{
    var age = whatAge(year);
    var million = 65 - age;

    if (million>0){
        console.log(name + " becomes a millionare in "+ million);
    }
    else {
        console.log(name +" has already become a millionare");
    }
    }
    yearsUntilMillionare(1997, 'Jose');
    yearsUntilMillionare(1943, 'person 2');
    yearsUntilMillionare(2012, 'person 3');

    //Fucntion Statements and Expressions. 

    //function expression 
    var whatDoYouDo = function(job, name){
        switch(job) {
            case 'teacher':
                return name + " teaches at college.";

            case 'Driver':
                return name + " drives at college.";

            case 'Designer':
                return name + " designes at college.";

            default:
                return name + " does something else.";
        }
    }

    console.log(whatDoYouDo("teacher", "Jose"));
    console.log(whatDoYouDo("Driver", "Jose"));
    console.log(whatDoYouDo("Designer", "Jose"));
    console.log(whatDoYouDo("Student", "Jose"));

    /*
    Arrays 
    */

    var names = ['Jose', 'Stephanie', 'Poopyface']; //Setting up an array with a lenght of 3 
    var years = new Array(1997,1998,2014); //Another way of setting an array. 

    console.log("There are "+ names.length +" names in the array"); //Calling Array "names" to find out the lenght. 
    console.log(names); //This will log all the names in the array
    console.log(names[2]); //This will log the last name in the array. 

    names[2] = 'Alberto'; //This is changing the data in index 2 of the array. 
    console.log(names[2]);

    //Different Data Types 

    var steph = ['Female', 20, 'Student']; //Creating an Array with different Data Types
    console.log(steph);

    steph.push("blue"); //Pushing Steph's favorite color to the end of the Array
    console.log(steph);
    steph.unshift("Woah"); //Adding to the front of the list.
    console.log(steph);
    steph.pop(); //Removing from the end of the Array
    console.log(steph);
    steph.shift(); //Remove from the start of the array 
    console.log(steph);
    console.log(steph.indexOf(20)); //Getting the index number of the item.

    var isAFemale = steph.indexOf("Female") === -1 ? "step is not a female."
    : "Step is a female";
    console.log(isAFemale);

    /* 
    Coding challenge number 3
    */

    var dinner1 = 124;
    var dinner2 = 48;
    var dinner3 = 268;

    

    //Creating a function to calculate the tip amount. 
    function tipAmount(bill){
        var tip = 0;
        
        if (bill < 50){ // If the bill is less then $50
             return tip = bill * .20; 
        }
        else if (bill >= 50 && bill < 200){
            return tip = bill *.15; 
        }
        else{
            return tip = bill *.10; 
        }
     }

   var tipToal = []; //Creating the tip total array 
   var totalSpent = []; //Creating the total amount spent

   tipToal.push(tipAmount(dinner1)); //pushing the tip from the first dinner to the array.
   tipToal.push(tipAmount(dinner2)); //pushing the tip total from the second dinner. 
   tipToal.push(tipAmount(dinner3)); //pushing the tip total from the third dinner.  

   console.log(tipToal);

//Creating a function to calculate the total amount with a tip. 
function totalAmount(bill){
    var tip = 0;
    
    if (bill < 50){ 
         return tip = bill+(bill * .20); 
    }
    else if (50 < bill > 200 ){
        return tip = bill + (bill *.15); 
    }
    else{
        return tip = bill + (bill *.10); 
    }
 }

 totalSpent.push(totalAmount(dinner1)); //Pushing the total amount to of the first dinner to the second array
 totalSpent.push(totalAmount(dinner2)); //Pushing the total amount to of the second dinner to the second array
 totalSpent.push(totalAmount(dinner3)); //Pushing the total amount to of the third dinner to the second array
console.log(totalSpent);

var josePerales = {
    nameFirst: 'Jose',
    nameLasr: 'Perales',
    yearBirth: 1997,
    college: 'Augsburg',
    major: 'Computer Science',
    calcAge: function(yearBirth){
        return 2018 - this.yearBirth;
    }
};

console.log(josePerales);
console.log(josePerales.yearBirth);
console.log(josePerales.calcAge());

/*CODING Change 4 */ 

var markObj = {
    fName: 'Mark',
    lName: 'Last Name',
    mass1: 1650,
    height1: 5.7,
    bmi: function(mass1, height1){
        return this.mass1 / (this.height1 * this.height1);
    }
};


var johnObj = {
    fName: 'John',
    lName: 'Last Name',
    mass1: 185,
    height1: 5.6,
    bmi: function(mass1, height1){
        return this.mass1 / (this.height1 * this.height1);
    }
};

if(johnObj.bmi() > markObj.bmi()) {
    console.log(johnObj.fName + " " + johnObj.lName +" has the heigher BMI at: " + johnObj.bmi());
}
else if(markObj.bmi() > johnObj.bmi()){
    console.log(markObj.fName + " " + markObj.lName +" has the heigher BMI at: " + markObj.bmi());
}
else{
    console.log('both have the same bmi.'+ johnObj.fName +' '+ markObj.fName);
 
}