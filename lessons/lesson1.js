console.log('Hello World!')

// Variables
var fistName = "John"
let lastName = "Smith"
console.log(fistName)

var age, dateOfBirth, sex
age = "5"
console.log(age)
age = "6"
console.log(age)

// Constants
const occupation = "Engineer"
console.log(occupation)

// Primitive data types
var middleName = "David" //string
var ageOfBrother = 10 //number
var isHeMarried = false //boolean
var yearsInMarriage = null //null
var numberOfCars = undefined //undefined

// Concatination and interpolation
var car1 = "BMW"
var car2 = "Tesla"
console.log(fistName+' has: '+ car2)
console.log(`${fistName} has ${car1} and his wife has "${car2}"`)

// Arithmetic operations
var sum = 5 + 6
var sumOfString = "5" + 6
var substract = 20 - 5
var devide = 10/2
var multiply = 5 * 6
console.log(sum)
console.log(sumOfString)

// Objects
var customer = { 
    fistName: "John", 
    lastName: "Smith" 
}
// Dot Notation
customer.fistName = "Michael"
// Bracket Notation
customer['lastName'] = "Silver"
console.log(customer)

// Arrays
var cars = ["BMW", "Toyota", "Volvo"]
cars[0] = "Tesla"
console.log(cars[1])

// Functions
// void function
function disiplayUserName(firstName, lastName = "Karpenko"){
    console.log(`The name of our customer is ${firstName} ${lastName}`)
}
disiplayUserName(fistName, lastName)

// caculating functions
function addPlusOne(number){ 
    var result = number + 1
    return result
}

console.log(addPlusOne(5))


