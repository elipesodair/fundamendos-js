const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

for (let i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i]);
}
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media = 0;

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j] / notasGerais[i].length;
  }
}

console.log(media);



for(let i = 0; i < 10;  i++) {
  console.log(i);
}


for (let i = 1; i > 0; i--) {
  console.log(i);
}


for ( let i = 100; i > 0; i--) {
  if (i == 50) {
    break;
  }
  console.log(i);
}


for (let i = 20; i > 0; i-- ){
  if(i === 10){
    continue; 
  }
  console.log(i);
}
