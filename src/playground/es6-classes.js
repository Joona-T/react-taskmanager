
class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // Old way:
        // return 'Hello, my name is ' + this.name + ". Glad to meet you!";
        // New way (template strings):
        return `Hello, my name is ${this.name}. Glad to meet you! My age is ${this.age}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major = '') {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        if(this.hasMajor()) {
            return `${this.name} is ${this.age} year(s) old and studies ${this.major}.`;
        }
        else {
            return super.getDescription();
        }
    }
}

class Traveler extends Person {
    constructor(name, age, home = "") {
        super(name,age);
        this.home = home;
    }
    getGreeting() {
        if(!!this.home) {
            return super.getGreeting() + ` I'm visiting from ${this.home}.`;
        }
        else {
            return super.getGreeting();
        }
    }
}

const someone = new Person();
console.log(someone);
console.log(someone.getGreeting());
console.log(someone.getDescription());

const me = new Student('Joona Tontti', 24, 'Computer Science');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const kaisa = new Student('Tou Tou', 24, 'Chemistry');
console.log(kaisa.getDescription());

const tuutti = new Student('Tuutti', 1);
console.log(tuutti.getDescription());

const pasi = new Traveler('Pasi Viheraho', 55, 'Hollola');
console.log(pasi.getGreeting());
const niilo = new Traveler('Niilo 22', 30);
console.log(niilo.getGreeting());