const nomes = ["elipes", "erika", "tiago", "rafael"];
const notas = [10, 4, 9, 6];

const reprovados = nomes.filter( (aluno, indice) => notas [indice] < 5) 
console.log(`reprovados: ${reprovados}`); 