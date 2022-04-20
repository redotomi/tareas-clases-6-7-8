function encontrarMayor(array){
    let mayor = 0;
    for(let i=0; i <array.length; i++){
        if(mayor < array[i]){
            mayor = array[i];
        }
    }
    return mayor;
}

function encontrarMenor(array){
    let menor = 10000000000000000n;
    for(let i=0; i <array.length; i++){
        if(menor > array[i]){
            menor = array[i];
        }
    }
    return menor;
}

function promediar(array){
    let sumEdades = 0;
    let promedio = 0;
    for(let i=0; i<array.length; i++){
        sumEdades = sumEdades + array[i]
    }
    promedio = sumEdades / array.length;
    return promedio;
}

function promediarMensual(array){
    let valorAnual = promediar(array);
    valorAnual = valorAnual / 12;
    return valorAnual;
}