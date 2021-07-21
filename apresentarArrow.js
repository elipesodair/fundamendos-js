function  apresentador ( nome )  {
    return  `meu nome é $ { nome } ` ;
  }
  
  // função de seta
  const  apresentarArrow  =  nome  =>  `meu nome é $ { nome } ` ;
  const  soma  =  ( num1 ,  num2 )  =>  num1  +  num2 ;
  
  // Função de seta com + de 1 linha de instrução
  
  const  somaNumerosPequenos  =  ( num1 ,  num2 )  =>  {
    if  ( num1  ||  num2  >  10 )  {
      return  "números somente de 1 a 9"
    }  else  {
      return  num1  +  num2 ;
    }
  }
  
  // Içar: função de seta se comporta como expressão
  
  // operador maior ou igual que
  //> =