console.log("Hello World!")

// Variables
var firstName = "Cynthia"
let lastName = "Acosta"
console.log(firstName)

var age, dateOfBirth, sex
age = "5"
console.log(age)
age = "6"
console.log

// Constants
const occupation = "Engineer"
console.log(occupation)

// Primitive data types
var middleName = "David" //string
var ageOfBrother = 10 //number
var isHeMarried = false //boolean
var yearsInMarriage = null //null
var numberOfCars = undefined //undefined

// Contination and interpolation
var car1 = "BMW"
var car2 = "Tesla"
console.log(firstName +' has:' + car2)
console.log(`${firstName} has ${car1}`)
var result = firstName +'has: '+ car2

// Arithmetic operations
var sum = 5 + 6
var sumOfString = "5" + 6
var substract = 20 - 5
var divide = 10/2
var multiply = 5 * 6
console.log(sum)
console.log(sumOfString)

// Objects
var customer = {
    firstName: "Cynthia",
    lastName: "Acosta"
}
// Dot Notation
console.firstName = "Michael"
// Bracket Notation
customer['lastName'] = "Silver"
console.log(customer)

// Arrays
var cars = ["BMW", "Toyota", "Volvo"]
cars [0] = "Tesla"
console.log(cars[0])

// Functions
// void function
function displayUserName(firstName, lastName){
    console.log(`The name of our customer is ${firstName} and ${lastName}`)
}
displayUserName("Cynthia", "Acosta")

// calculating functions
function addPlusOne(number){
    var result = number + 1
    return result
}
console.log(addPlusOne(5))