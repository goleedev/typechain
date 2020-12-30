interface Human {
    name: string,
    age: number,
    gender: string
};

const person = {
    name: "Go",
    age: 1,
    gender: "female"
};

const sayHi = (person: Human): string => {
    return `hi, ${person.name}, you are ${person.age} and a ${person.gender}`;
};

console.log(sayHi(person));

export { };

