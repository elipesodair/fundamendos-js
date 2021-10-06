//let x = "";
//console.log(x);
//x = "oi"
function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90
  

 function imprimeTexto(texto){
    console.log(texto);
}

/* imprimeTexto("oi")
imprimeTexto("Elipes")
imprimeTexto("junior")

 */ 
imprimeTexto(soma());
function soma (){
    return resultado = 2+2;
}

//console.log(soma()); 
function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()


   function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”



   let subject = ' create video'

   function createThink(subject) {
       subject = 'study'
       return subject
   }

   console.log(createThink(subject));
   console.log(subject);
  

   // function hoisting

   sayMyName()

   const sayMyName = function() {
       console.log('Mayk');
   }



   // arrow function

   const sayMyName = (name) => {
       console.log(name);
   }

   sayMyName('Mayk')


   //callback function

   function sayMyName = (name) {
    console.log('antes de execultar a funcao calback');

    name()
    console.log('estou em uma callback');
}

sayMyName(
    () => {
    
        console.log('estou em uma callback');
    }
)

//function() construtor


function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + "está andando"
    }
}
const mayk = new Person("Mayk")
const Joao = new Person ("Joao")
console.log(mayk.walk());
console.log(Joao.walk());