const notas =[10, 9, 8, 7, 6]


const notasAtualizadoas = notas.map( nota => nota == 10 ? nota : ++ nota)
console.log(notasAtualizadoas);