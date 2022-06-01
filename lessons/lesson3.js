








// for in loop

var customer = {
    firstName: "deven",
    lastName: "jay",
    age: 7
}

for(let key in customer){
    console.log(key, customer[key])
}

var cars = ["BMW", "Ford", "Honda"]
for(let indexOfMyCars in cars){
    console.log(cars[indexOfMyCars])
}

//for of loop (do not work with objects) more common approach
for(let car of cars){
    console.log(car)
}

//es6 for each loop
cars.forEach( car => {
    console.log(car)
})

//while loop
var x=3
while(x>=0){
    console.log(x)
    x = x-1
}

//recursive function
function countDown(fromNumber){
    console.log(fromNumber)
    let nextNumber = fromNumber - 1
    if (nextNumber > 0){
    countDown(nextNumber)
    }
}

countDown(3)