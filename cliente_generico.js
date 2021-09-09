function Cliente (nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const elipes = new Cliente("Elipes", "34519783901", "elipes@email", 100)

console.log(elipes);