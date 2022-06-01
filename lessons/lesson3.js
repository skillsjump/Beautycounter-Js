//LOOPS
//repeat the operation


// for (statement1; statment2; statement3){
//     //code to execute
// }

for(let i=0; i<5; i++){
    console.log('Hello World', i)
}

//print even number
for(let i=0; i<5; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

//break the loop
for(let i=0; i<10; i++){
    console.log('Loop repeats until break', i)
    if(i === 3){
        break
    }
}

// for in loop
var customer = {
    fistName: "John",
    lastName: "Smith",
    age: 30
}

for(let key in customer){
    console.log(key, customer[key])
}

var cars = ["BMW", "Volvo", "Toyota"]
for(let indexOfMyCars in cars){
    console.log(cars[indexOfMyCars])
}

//for of loop (do not work with objects)
for(let car of cars){
    console.log(car)
    var myCar = car
}
console.log(myCar)

//ES6 for each loop
cars.forEach( car => {
    console.log(car)
})

//while loop (countdown)
var x = 3
while(x>0){
    console.log(x)
    x = x - 1
}

// recursive function (function that calls itself)
function countDown(fromNumber){
    console.log(fromNumber)
    let nextNumber = fromNumber - 1
    if(nextNumber > 0){
        countDown(nextNumber)
    }
}

countDown(3)

var customer = {
    "FirstName": "John",
    "LastName": "Smith",
    "Age": 36,
    "Cars": ["Honda", "BMW"],
    "Income": {
         "Q1": "$10,000",
         "Q2": "$20,000"
     },
    "Pets": [
         {
            "Name": "Jimmy",
            "Type": "Dog"
         },
         {
            "Name": "Lisa",
            "Type": "Cat"
         }	
     ]
 }

 customer.Income.Q3 = "$50,000"
 console.log(customer)
