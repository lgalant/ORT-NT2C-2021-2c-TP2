function convertToObjectArray(names) {
  return names.map((n) => {
    return { nombre: n, longitud: n.length };
  });
}
