// Operators and conditions

var x = 5
const y = '5'

// Relational
console.log('Relational operators values')
console.log(x > 4)
console.log(x < 5)
console.log(x >= 6)
console.log(x <= 5)

// Equality
console.log('Equality operators values')
console.log(x == y) //lose comparison
console.log(x === y) //strict comparison

// Logical "AND"
console.log('Logical AND operators values')
console.log(false && false) //all values have to be TRUE for the expression to be TRUE

// Logical "OR"
console.log('Logical OR operators values')
console.log(true || fasle || true) // one value have to be TRUE for the expression to be TRUE

// Example: eligibility go get Driver License in CA
console.log('Example Eligibility')
var ageIsMoreThanEighteen = true
var isCaliforniaState = true

var eligibilityForDriverLicense = ageIsMoreThanEighteen && isCaliforniaState
console.log('This driver is eligible for DL: ' +eligibilityForDriverLicense)

//Logical "NOT"
console.log('Logical NOT operator values')
console.log(!true)
console.log(6 !== 10)

//Control flow
// if (condtions){
 // } else {  
//      statement
// }


// if hour value betweeen 6 and 12 print "Good morning"
// if hour value between 12 and 18 pring 'Good afternoon"
// Or otherwise 'Good Evening'
console.log('Condtional flow Example')

var hour = 19

if (hour >= 6 && hour < 12){
    console.log('Good morning')
} else if (hour >=12 && hour <18){
    console.log('Good afternoon')
} else {
    console.log('Good Evening')

    if(ageIsMoreThanEighteen || isCaliforniaState){
        console.log('Eligible')

    } else {
        console.log('Not eligible')
    }
}

//Ternary operators
var time = 8
if(time < 12)
    console.log('am')
 else
   console.log('pm')

    var hour3 = (time < 12 || time < 11) ? 'am' : 'pm'
    console.log(hour)

var hour2 = (hour >=6 && hour < 12) ? console.log('Good morning')
    : (hour >=12 && hour < 18) ? console.log('Good afternoon')
    : console.log('Good Evening')


// Switch statement
var userType = 'doctor'

switch(userType){
    case 'doctor':
        console.log('Primary care physician')
        break
    case 'visitor':
        console.log('Patient visitor')
        break
    default:
        console.log('General admission')
}