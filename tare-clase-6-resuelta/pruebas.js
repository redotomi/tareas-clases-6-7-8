function probarValidarCantidadIntegrantes(){
    console.assert(
        validarCantidadIntegrantes(0) === 'Los integrantes deben ser al menos 1',
        'Validar cantidad integrantes no valido que la cantidad no sea 0'
    );
    console.assert(
        validarCantidadIntegrantes(16) === 'Los integrantes no pueden ser mas de 15',
        'Validar cantidad integrantes no valido que la cantidad no sea menos de 15'
    );
    console.assert(
        validarCantidadIntegrantes('asdasa') === 'La cantidad de integrantes solo acepta un numero',
        'Validar cantidad integrantes no valido que solo se escriban números'
    );
    console.assert(
        validarCantidadIntegrantes(5) === '',
        'Validar cantidad integrantes no funciono con un valor valido'
    );
}


probarValidarCantidadIntegrantes();