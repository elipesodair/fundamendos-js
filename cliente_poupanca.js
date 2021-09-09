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

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca( "Ju", "7649087890-0", "ju@email", 100, 200)

console.log(ju);

ClientePoupanca.prototype.depositarProup = function(valor){
    this.saldoPoup += valor
}

ju.depositarProup(30)
console.log(ju.saldoPoup);