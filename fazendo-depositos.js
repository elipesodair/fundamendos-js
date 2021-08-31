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
    }
   ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

console.log(cliente.saldo);
cliente.depositar(30)
console.log(cliente.saldo);

