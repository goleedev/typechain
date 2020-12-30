class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
};

const go = new Human("Go", 1, "female");

const sayHi = (person: Human): string => {
    return `hi, ${person.name}, you are ${person.age} and a ${person.gender}`;
};

console.log(sayHi(go));

export { };

