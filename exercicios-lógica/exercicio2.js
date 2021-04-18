const comprimirString = (palavra) => {
    let novaString = []
    let ultimaLetra = palavra[0]
    let quantidadeLetraRepetida = 0;
    for (letra of palavra) {
        if (letra !== ultimaLetra) {            
            novaString.push(ultimaLetra + quantidadeLetraRepetida)
            ultimaLetra = letra
            quantidadeLetraRepetida = 0
        }
        quantidadeLetraRepetida += 1;      
    }

    novaString.push(ultimaLetra + quantidadeLetraRepetida)  
    let stringMostrada = ''
    for (string of novaString){
        stringMostrada += string
    }   


    if (stringMostrada.length > palavra.length) {
        return palavra
    } else {
        return stringMostrada
    }

}

console.log(comprimirString('accuraaaaaaaaate'))