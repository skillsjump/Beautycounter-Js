//operators and conditions

var x = 5
const y = 6
const z = '5'

// Relational
console.log('Relational operator values')
console.log (x > 4)
console.log(x < 4)
console.log(x >= 5)
console.log(x >= 5)

// Equality
console.log('Equality operators values')
console.log(x == 5)  //loose comparison, boolean response
console.log(x === 5) //strict comparison, value and data type
console.log(x == '5')    // loose true because its comparing variable vs string in the single quotes
console.log(x === '5') //strict false because value is true but type is false, treating 5 as a string instead of a number
console.log(x === y)
console.log(x === z)
console.log(x == z)

//Logical "AND"
console.log('Logical AND operators values')
console.log(true && true) //all values have to be true for the expression to be true
console.log(1 && 2) //all values have to be true for the expression to be true







// Control flow
// if(condition){
//    then do this
// }
// else{do that
//}

// if hour value is between 6 and 12 print good morning
// if hour value is between 12 and 18 print good afternoon
// else print good evening

var hour = 23

if (hour >= 6 && hour < 12){
    
console.log ('good morning')
}
else if (hour >=12 && hour < 18){
    console.log ('good afternoon!')
}
else {
    console.log ('good evening!')
}



// Ternary operator
var time = 14
if (time < 12){
    console.log ('am')
} 
else {
    console.log ('pm')
}

var hour2 = (hour >= 6 && hour < 12) ? console.log ('gidday!')
    : (hour >= 12 && hour < 18) ? console.log('gidaft!')
        : console.log('gidnite!')


// Switch statement
var userType = 'jumanji'

switch(userType){
    case 'doctor':
        console.log ('pcp')
        break;
    case 'visitor':
        console.log ('visitor')
        break;
    default:
        console.log ('ga')
}