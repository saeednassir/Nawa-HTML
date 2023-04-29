class Person {
    // private field 
    #id = 0;

    // public 
    firstName;
    lastName;

    constructor (firstName = '', lastName = '') {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get Id() {
        return this.#id;
    }

    set Id(id){
        this.#id = id;
    }

    getId() {
        return this.#id;
    }

    setId(id) {
        this.#id = id;
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

}

class Student extends Person {
    constructor(firstName,lastName) {
        super(firstName,lastName);
    }
}

let person = new Student('saeed','ali');

 person.Id = 55;
// person.firstName = 'Saeed';
// person.lastName = 'Nassir';

 console.log(person.fullName(),person.Id);
 alert('saeed NAssir');