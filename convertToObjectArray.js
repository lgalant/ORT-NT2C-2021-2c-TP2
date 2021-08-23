function convertToObjectArray(items) {
  return items.map((x) => {
    return { nombre: x, longitud: x.length };
  });
}
