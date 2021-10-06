const idadeMinima = 18;
const idadeCliente = 19;

//if (idadeCliente >= idadeMinima) {
//    console.log("cerveja");
//} else {
//    console.log("suco");
//}
                //condição                   //true    //false  
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");

let pao = true

let queijo = false

const niceBreakfast = pao && queijo ? 'Café top' : ' Cafe ruim'

console.log(niceBreakfast);

let pao = true

let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : ' Cafe ruim'

console.log(niceBreakfast);


