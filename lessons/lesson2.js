// Operators and conditions

var x = 5
const y = '5'

// Relational
console.log(`Relational operators values`)
console.log(x > 4)
console.log(x < 4)
console.log(x >= 5)
console.log(x <= 5)

// Equality
console.log(`Equality operators values`)
console.log(x == y) // lose comparison
console.log(x === y) // strict comparison

// Logical "AND"
console.log(`logical AND operators values`)
console.log(true && false) //all values have to be TRUE for the expression to be TRUE

//Logical 'OR'
console.log(`logical OR operators values`)
console.log(true || false || true) // one value has to be TRUE or for the expression to be TRUE

// Example: eligibility to get Drivers License in CA
console.log('Example Eligibility')
var ageIsMoreThanEighteen = false
var isCaliforniaState = false

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isCaliforniaState
console.log('This driver is eligible for DL: ' + eligibilityForDriversLicense)

// Logical "NOT"
console.log('logical NOT operator values')
console.log(!true)
console.log( 6 !== 10) // is this value not equal to the other

// Control flow
// if(condition)(
//     statement
// ) else(
//     statement
// )

// if hour value between 6 and 12 print "Good Morning"
// if hour value between 12 and 18 print "Good Afternoon"
// Or otherwise "Good Evening"
console.log('Conditional flow Example')

var hour = 10

if(hour >= 6 && hour < 12){
    console.log('Good Morning')
} else if(hour >= 12 && hour < 18){
    console.log('Good Afternoon')
} else {
    console.log("Good Evening")
}

if(ageIsMoreThanEighteen && isCaliforniaState){
    console.log("Eligible")
} else {
    console.log("Not Eligible")
}

// Ternary operators
var time = 8
if(time < 12)
console.log('am')
else
    console.log('pm')

var hour = (time < 12 || time < 11) ? 'am' : 'pm'
console.log(hour)

var hour2 = (hour >= 6 && hour < 12) ? console.log('Good Morning')
            : (hour >= 12 && hour < 18) ? console.log('Good Afternoon')
            : console.log('Good Evening')