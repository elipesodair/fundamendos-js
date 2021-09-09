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





function oferecerSeguro(obj){
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes("dependentes"))
    {
        console.log(`oferta de seguro de vida para ${obj.nome}
        `);
    }

}

console.log(Object.values(cliente'));
oferecerSeguro(cliente)