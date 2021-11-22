const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678",
    email:"adre@emal.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]))


console.log(cliente["nome"]);

const vendedor = {
    nome: "Elipes",
    idade: 26,
    cpf:"34567890",
    email:"elipes@emall.com"
}
const chave = [ "nome", "idade", "cpf", "email"]

console.log(vendedor[chave[0]]);

chave.forEach(info => console.log(vendedor[info]))

console.log(cliente["nome"]);



console atendente = {
    nome: "Junior",
    idade: 35,
    cpf:"34500874446",
    email: "junior@gmail.com"
}

const chave = [ "nome", "idade", "cpf", "email"]

console.log(atendente[chaves[0]]);

chaves.forEach(info => console.log(atendente[info]))

console.log(atendente["nome"]);