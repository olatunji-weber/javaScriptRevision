// let  sum = (num1, num2) => num1 + num2;

// console.log("The result is: " + sum(100, 300));

// let  product = (num1, num2) => num1 * num2;

// console.log("The result is: " + product(100, 300));

// // let raisedToPower = (num, pow) => num ** pow;
// let raisedToPower = (num, exp) => Math.pow(num, exp);
// let num1 = 5;
// let num2 = 2;
// power = raisedToPower(num1, num2);
// console.log(`${num1} raised to the power of ${num2} is: ${power}`);

class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Tunde', 'Olayeni', '12-6-1985');
const person2 = new Person('Olubori', 'Fiyinfoluwa', '06-9-2007');

let message = `The age of ${person1.getFullName()} is ${(new Date().getFullYear()) - person1.getBirthYear()} \n`;
message += `The age of ${person2.getFullName()} is ${(new Date().getFullYear()) - person2.getBirthYear()}`;
alert(message);