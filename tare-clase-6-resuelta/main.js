function pasarListaAArray(lista){
    let array = [];
    for(let i=0; i<lista.length; i++){
        array.push(Number(lista[i].value));
    }
    return array;
}

function mostrarBoton(){
    document.querySelector('#calcular').className = '';
}

function crearLabel(i){
    const $nuevoLabel = document.createElement('label');
    $nuevoLabel.innerHTML = `<br />Edad integrante #${i+1}`;
    $nuevoLabel.className = 'label-integrante';

    return $nuevoLabel;
}

function crearInput(){
    const $nuevoInput = document.createElement('input');
    $nuevoInput.setAttribute('type', 'number');
    $nuevoInput.className = 'integrante';
    $nuevoInput.setAttribute('name', 'edad-integrante');

    return $nuevoInput;
}

function mostrarBotonResetear(){
    const $botonResetear = document.querySelector('#boton-resetear');
    $botonResetear.className = '';
}

function borrarBotonResetear(){
    const $botonResetear = document.querySelector('#boton-resetear');
    $botonResetear.className = 'oculto';
}

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');

    $integrantes.forEach(function(elemento){
        let labelIntegranteEliminar = document.querySelector('.label-integrante')
        let integranteAEliminar = document.querySelector('.integrante');
        integranteAEliminar.className = 'oculto';
        labelIntegranteEliminar.className = 'oculto';
        
    })
}

document.querySelector('#enviar').onclick = function(event){
    borrarIntegrantesAnteriores();
    validarFormularioSiguientePaso();
    
    let $cantidadFamiliares = document.querySelector('#cantidad-integrantes').value;
    let cantidadFamiliares = Number($cantidadFamiliares);
    let $nodoFormulario = document.querySelector('form');
    const $respuesta = document.querySelector('#respuesta');

    if(cantidadFamiliares > 15 || cantidadFamiliares < 1){
        return;
    }

    for(let i=0; i<cantidadFamiliares; i++){       
        $nodoFormulario.appendChild(crearLabel(i));
        $nodoFormulario.appendChild(crearInput());
    }

    mostrarBotonResetear();
    mostrarBoton();

    event.preventDefault();
}

document.querySelector('#calcular').onclick = function(event){
    validarFormularioCalcular();

    const $edadesIntegrantes = document.querySelectorAll('.integrante');


    const $respuesta = document.querySelector('#respuesta');
    const edadesFamilia = pasarListaAArray($edadesIntegrantes);


    let integranteMayor = encontrarMayor(edadesFamilia);
    let integranteMenor = encontrarMenor(edadesFamilia);
    let promedioFamilia = promediar(edadesFamilia);
    
    
    $respuesta.innerHTML = `El mas grande tiene ${integranteMayor} años.<br />
    El mas chico tiene ${integranteMenor} años.<br />
    El promedio de edad de la familia es de ${promedioFamilia} años.`;


    event.preventDefault();
}

document.querySelector('#boton-resetear').onclick = function(){
    borrarIntegrantesAnteriores();
}

////////////////////////
///// VALIDACIONES /////
////////////////////////

function validarFormularioSiguientePaso(){
    const $form = document.querySelector('#calculadora-familiares');

    let $cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value;
    $cantidadIntegrantes = Number($cantidadIntegrantes);

    const errorCantidad = validarCantidadIntegrantes($cantidadIntegrantes);

    const errores = {
        'cantidad-integrantes': errorCantidad,
    }

    manejarErrores(errores);
}

function validarFormularioCalcular(){
    const $edadesIntegrantes = document.querySelectorAll('input.integrante');

    manejarErroresCalculos($edadesIntegrantes);

    let cantidadErrores = manejarErroresCalculos($edadesIntegrantes);
    return cantidadErrores;
    // console.log(edadesIntegrantes);

    // manejarErroresCalculos(edadesIntegrantes);

}

function validarCantidadIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes < 1){
        return 'Los integrantes deben ser al menos 1';
    }
    if(cantidadIntegrantes > 15){
        return 'Los integrantes no pueden ser mas de 15';
    }
    if(!/^[0-9]+$/.test(cantidadIntegrantes)){
        return 'La cantidad de integrantes solo acepta un numero';
    }
    return '';
}

function validarEdadIntegrantes(edadIntegrantes){
    if(edadIntegrantes < 1){
        return 'La edad del integrante no puede ser menor que 1';
    }
    if(edadIntegrantes >110){
        return 'la edad del integrante no puede ser mayor que 110';
    }
    return '';
}

function manejarErrores(errores){
    let cantidadErrores = 0;
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');

    keys.forEach(function(key){
        const error = errores[key];

        if(error){
            cantidadErrores++;
            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;

            $errores.appendChild($error);

        }
    }
    );

        
}

function manejarErroresCalculos(nodeList){
    const $errores = document.querySelector('#errores');
    
    nodeList.forEach(function(elemento){
        let edadesIntegrantes = Number(elemento.value);
        let edadValidada = validarEdadIntegrantes(edadesIntegrantes);


        if(edadValidada){
            elemento.className = 'error';

            const $error = document.createElement('li');
            $error.innerText = edadValidada;
            
            $errores.appendChild($error);
        }
    });
}


const $form = document.querySelector('#calculadora-familiares');


