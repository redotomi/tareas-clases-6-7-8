const $form = document.querySelector("calculadora-salario-familia");

document.querySelector('#agregar-integrantes').onclick = function(event){
    agregarIntegrante();

    event.preventDefault();
}

document.querySelector('#borrar-integrantes').onclick = function(event){
    borrarIntegrante()

    event.preventDefault();
}

document.querySelector('#calcular').onclick = function(event){
    let salarios = crearArraySalarios();
    
    const $inputs = document.querySelectorAll('.salario-mensual');
    manejarErrores($inputs);


    const anualMayor = encontrarMayor(salarios);
    const anualMenor = encontrarMenor(salarios);
    const anualPromedio = promediar(salarios);
    const mensualPromedio = promediarMensual(salarios);
    
    document.querySelector('#resultados').innerHTML = `El salario anual mayor es: ${anualMayor}<br />
    El salario anual menor es: ${anualMenor}<br /> El promedio de salarios anuales es: ${anualPromedio}<br />
    El promedio de salarios mensuales es: ${mensualPromedio}`;
    
    salarios = [];

    event.preventDefault();
}

function agregarIntegrante(){
    const $form = document.querySelector('#calculadora-salario-familia');
    const div = crearDiv();
    const label = crearLabel();
    const input = crearInput();

    div.appendChild(label);
    div.appendChild(input);

    $form.appendChild(div);
}

function borrarIntegrante(){
    const $div = document.querySelectorAll('.integrante');
    let ultimoDiv = $div[$div.length- 1];
    ultimoDiv.className = 'oculto';

    const $input = document.querySelectorAll('.salario-mensual');
    let ultimoInput = $input[$input.length- 1];
    ultimoInput.className = '';
}

function crearDiv(){
    const $div = document.createElement('div');
    $div.className = 'integrante';
    return $div;
}

function crearLabel(){
    const $label = document.createElement('label');
    $label.setAttribute('for', 'salario-mensual');
    $label.innerText = 'Ingrese el salario anual del integrante: '
    return $label;
}

function crearInput(){
    const $input = document.createElement('input');
    $input.setAttribute('name', 'salario-mensual');
    $input.setAttribute('type', 'number');
    $input.className = 'salario-mensual';
    return $input;
}

function crearArraySalarios(){
    const $salarios = document.querySelectorAll('.salario-mensual');
    const arraySalarios = [];

    $salarios.forEach(function(elemento){
        
        let salario = Number(elemento.value);
        if(salario !== 0){
            arraySalarios.push(salario);
        }
        
    });
    return arraySalarios;
}

function validarSalarios(salario){
    if(salario < 1){
        return 'El salario debe ser al menos 1';
    }
    if(!/^[0-9]+$/.test(salario)){
        return 'El salario solo acepta numeros';
    }

    return '';

}
function manejarErrores(nodeList){
    const $errores = document.querySelector('#errores');
    const $resultados = document.querySelector('#resultados');

    nodeList.forEach(function(elemento){
        let salario = Number(elemento.value);
        let salarioValido = validarSalarios(salario);

        if(salarioValido){
            elemento.className = 'error';

            const $error = document.createElement('li');
            $error.innerText = salarioValido;

            $errores.appendChild($error);

            $resultados.className = 'oculto';
        }
    });
}
