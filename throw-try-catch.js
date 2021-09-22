function sayMyName(name = ''){
    if (name === ''){
        throw 'Nome é obrigatorio'
    }

    console.log('depois do erro');

}



try {

    sayMyName()

} catch(e) {

    console.log(e);

}

console.log('apos a função de erro');