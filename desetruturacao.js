let idade;

const pessoa = {
    name: "Elton",
    age: 26
};


({ age: idade } = pessoa)

console.log(idade);


const frutas = ["banana", "pera", "uva"]

const [ b, ...rest] = frutas

console.log(rest);


function liquidificador({pera}) {
    
    console.log(pera);
}

const fruits = {
    banana: "banana",
    pera: "pera",
    uva: "uva"
}

liquidificador(fruits)


function liquidificador({name, ...rest}) {
    
    console.log(rest);
}



liquidificador({name: "elipes", age: 35})