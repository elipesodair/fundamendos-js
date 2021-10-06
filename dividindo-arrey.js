const nomes  =  ['elipe', 'eliel', 'erika', 'eva', 'eduardo', 'elias', 'emerson', 'evandro', 'elves', 'erik', 'aline',
'amanda', 'ana', 'andre', 'antonio', 'athila', 'anita', 'alice', 'alison', 'amaral', 'amanda' ]

const lista1 = nomes.slice(0,nomes.length/2)
const lista2 = nomes.slice(nomes.length/2)

console.log(`Nome da primeira lista ${lista1}`);
console.log(`Nome da sgunda lista ${lista2}`);


let myArray = new Arreay ('10')
console.log(myArrey);



console.log([
    "a",
    {type: "arrey"},
    function(){ return "alo"},
][2]);

let word = "manipulação"
console.log(Arrey.from(word))


let techs = [ 'html', "css", "js"]

//console.log(techs.push("nodejs"));

techs.unshift("sql")
techs.pop()
techs.shift()

//console.log(techs.slice(1, 2));

techs.splice(1, 2)

let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs);