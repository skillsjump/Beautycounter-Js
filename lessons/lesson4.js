// Declarative function
helloOne()
function helloOne(){
    console.log('Hello One!')
}

// Anonimous function
var helloTwo = function(){
    console.log('Hello Two!')
}
helloTwo()

// ES6 function syntax
var helloThree = (day, year=2022) => {
    console.log('Hello Three!')
    console.log(day)
    console.log(year)
}
helloThree(15, 2020)
helloTwo()

//Main coding place
//import functions
// import { printName, printAge } from '../helpers/printHelper.js'
// printName('Artem')
// printAge(20)

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printName('Artem')
helper.printAge(20)

import { customerDetails } from '../helpers/printHelper.js'
customerDetails.printFirstName('John')
customerDetails.printLastName('Smith')

import { faker } from '@faker-js/faker'
var randomAddress = `${faker.address.streetAddress()}, ${faker.address.cityName()}, ${faker.address.stateAbbr()}`
console.log(randomAddress)
