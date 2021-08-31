const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678",
    email:"adre@emal.com",
    fones:  ["8751888", "3254970"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"finha",
    dataNasc:"20/03/2013"
}
console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)