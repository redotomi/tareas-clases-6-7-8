function probarValidarSalarios(){
    console.assert(
        validarSalarios(0) === 'El salario debe ser al menos 1',
        'Validar Salarios no validó que el salario no sea menor que 1'
    );
    console.assert(
        validarSalarios('asdada') === 'El salario solo acepta numeros',
        'Validar Salarios no validó que el campo solo tenga números'
    );
    console.assert(
        validarSalarios(12312) === '',
        'Validar Salarios no funcionó con un valor valido'
    );
}

probarValidarSalarios();
