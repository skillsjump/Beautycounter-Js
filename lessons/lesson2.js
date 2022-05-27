// Operators and conditions

var x = 5
const y = '5'

// Relational
console.log('Relational operators values')
console.log(x > 4)
console.log(x < 4)
console.log(x >= 6)
console.log(x <= 5)

// Equality
console.log('Equality operators values')
console.log(x == y) //lose comparison
console.log(x === y) //strict comparison

// Logial "AND"
console.log('Logical AND operators values')
console.log(true && false) //all values have to be TRUE for the expression to be TRUE

// Logical "OR"
console.log('Logical OR operators values')
console.log(true || false || true) // one value have to be TRUE for the expression to be TRUE

// Example: eligibility go get Driver License in CA
console.log('Example Eligibility')
var ageIsMoreThanEighteen = true
var isCaliforniaState = false

var eligibilityForDriverLicense = ageIsMoreThanEighteen || isCaliforniaState
console.log('This driver is eligible for DL: ' + eligibilityForDriverLicense)

//Logical "NOT"
console.log('Logical NOT operator values')
console.log(!true)
console.log(6 !== 10)

//Control flow
// if(condition){
//     statement
// } else {
//     statement
// }

// if hour value bwtween 6 and 12 print "Good morning"
// if hour value between 12 and 18 print "Good afternoon"
// Or otherwise "Good Evening"
console.log('Conditional flow Example')

var hour = 19

if(hour >= 6 && hour < 12){
    console.log('Good morning')
    console.log()
}else if(hour >=12 && hour < 18)
    console.log('Good afternoon')
 else 
    console.log("Good Evening")

if(ageIsMoreThanEighteen || isCaliforniaState){
    console.log("Eligible")
} else {
    console.log('Not eligible')
}

//Ternary operators
var time = 2
if(time < 12)
    console.log('am')
else
    console.log('pm')

var hour3 = (time < 12 || time < 11) ? 'am' : 'pm'
console.log(hour3)

var hour2 = (hour >= 6 && hour < 12) ? console.log('Good morning')
            : (hour >=12 && hour < 18) ? console.log('Good afternoon')
            : console.log('Good Evening')

// Switch statement
var userType = 'visitor'

switch(userType){
    case 'doctor':
        console.log('Primary care physician')
        break
    case 'visitor':
        console.log('Patient Visitor')
        break
    default:
        console.log('General admission')
}