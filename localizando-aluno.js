const alunos = ["elipes", "erika", "tiago", "rafael"];

const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);

    return (
      listaDeNotasEAlunos[0][indice] +
      ", sua media é " +
      listaDeNotasEAlunos[1][indice]
    );
  } else {
    return "Aluno não está Cadastrado";
  }
};
console.log(exibeNomeNota("joao"));
