
export function printName(name){
    console.log(name)
}

export function printAge(age){
    console.log(age)
}

class CustomerDetails {

    printFirstName(firstName){
        console.log(firstName)
    }

    /**
     * Method that prints last name for the customer
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }

}

export const customerDetails = new CustomerDetails()