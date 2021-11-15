function transformarNombres(nombres) {
    return nombres.map(nombre => ({nombre: nombre, longitud: nombre.length}));
}

transformarNombres(["Juan", "Nicolas", "Milagros"]);