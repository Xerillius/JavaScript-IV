// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(stuObj, subject) {
        console.log(`${stuObj.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => console.log(element));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(stuObj, subject) {
        console.log(`${this.name} debugs ${stuObj.name}'s code on ${subject}.`);
    }
}

const autoTest = (array) => {
    let count = 0;
    array.forEach(element => {
        console.log(element);
        element.speak();
        if(element instanceof ProjectManager){
            console.log(element.gradClassName);
            console.log(element.favInstructor);
            element.standUp("Random");
            element.debugsCode(studentArray[count], "CSS");
            count++;
        }else if(element instanceof Instructor){
            console.log(element.specialty);
            console.log(element.favLanguage);
            console.log(element.catchPhrase);
            element.demo("JavaScript");
            element.grade(studentArray[count], "JavaScript");
            count++;
        }else if(element instanceof Student){
            element.listsSubjects();
            element.PRAssignment("HTML");
            element.sprintChallenge("CSS");
        };
    });
};


const joe = new Student({
    name: "Joe",
    age: 26,
    location: "Chicago",
    previousBackground: "Customer Service",
    className: 'FSWD9001',
    favSubjects: ['JavaScript', 'React', 'Sleep']
});

const jerry = new Student({
    name: "Jerry",
    age: 42,
    location: "Atlanta",
    previousBackground: "Racecar Driver",
    className: "DS1002",
    favSubjects: ['Going Fast', 'HTML', 'CSS']
});

const frank = new Instructor({
    name: "Frank",
    age: 37,
    location: "Milwaukie",
    specialty: "React",
    favLanguage: "Python",
    catchPhrase: "I like turtles"
});

const bill = new Instructor({
    name: "Bill",
    age: 34,
    location: "Detroit",
    specialty: "CSS",
    favLanguage: "C",
    catchPhrase: "Dallas Cowboys suck"
});

const jason = new ProjectManager({
    name: "Jason",
    age: 42,
    location: "New York",
    gradClassName: "FSW2",
    favInstructor: "James"
});
const tom = new ProjectManager({
    name: "Tom",
    age: 32,
    location: "Orlando",
    gradClassName: "CS2",
    favInstructor: "Matt"
});

const studentArray = [joe, jerry];
const instructorArray = [frank, bill];
const pmArray = [jason, tom];

autoTest(studentArray);
autoTest(instructorArray);
autoTest(pmArray);