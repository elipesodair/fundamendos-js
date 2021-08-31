const cliente = {
    nome: "Elipes",
    idade: 25,
    cpf: "62785578321",
    email: "juqhqj@huyHJK.com",
    fones: ['7854655466', '46545985658'],
    dependentes: [{
        nome:"Jao da Silva",
        paretesco: "filho",
        dataNasc: '20/03/2011'
    }]
}

cliente.dependentes.push({
    nome:"Pedro Silva",
    paretesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome);