function promedio(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0; // O podrías lanzar: throw new Error("El arreglo está vacío o no es válido");
  }
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function desviacionEstandar(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0; // O lanzar un error también
  }
  const media = promedio(arr);
  const sumaCuadrados = arr.reduce((acc, val) => acc + (val - media) ** 2, 0);
  return Math.sqrt(sumaCuadrados / arr.length);
}

module.exports = { promedio, desviacionEstandar };