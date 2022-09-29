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