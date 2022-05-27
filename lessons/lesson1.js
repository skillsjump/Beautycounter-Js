console.log('Hello World!')

// Variables
var firstName = "Erica"
let lastName = "Cousar"
console.log(firstName)

var age, dateOfBirth, sex
age = "5"
console.log(age)
age = "6"
console.log(age)

// Constants
const occupation = "Engineer"
console.log(occupation)

// Primitive data types
var middleName = "Alexis" //string
var ageOfBrother = 26 //number
var isHeMarried = false //boolean
var yearsInMarriage = null //null
var numberOfCars = undefined //undefined

// Concatination and interpolation
var car1 = "BMW"
var car2 = "Tesla"
console.log(firstName+' has: '+ car2)
console.log(`${firstName} has ${car1}`)
var result = firstName +'has: '+car2

// Arithmetic operations
var sum = 5 + 6
var sumOfString = "5" + 6
var subtract = 20 - 5
var divide = 10/2
var multiply = 5 * 6
console.log(sum)
console.log(sumOfString)

// Objects
var customer = {
    firstName: "John",
    lastName: "Smith"
}
// Dot Notation
console.log(customer.firstName)
customer.firstName = "Michael"
// Bracket Notation
customer['lastName'] = "Silver"
console.log(customer)

// Arrays
var cars = ["BMW", "Toyota", "Volvo"]
cars[0] = "Tesla"
console.log(cars[1])

// Functions
// void function
function displayUserName(firstName, lastName){
    console.log(`The name of our customer is ${firstName} ${lastName}`)
}
displayUserName(firstName, lastName)

// calculating functions
function addPlusOne(number){
    var result = number + 1
    return result
}

console.log(addPlusOne(5))