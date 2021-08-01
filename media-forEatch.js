const notas = [7, 6.5, 9, 5.5, 8];

let somaDasNotas = 0;
//callBack

/* notas.forEach (notas => {
    somaDasNotas += notas
}) */

notas.forEach(function (notas) {
  somaDasNotas += notas;
});

let media = somaDasNotas / notas.length;

console.log(media);
