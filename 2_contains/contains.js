// const contains = function() {

// };

const contains = function (arrayObjeto, valorProcurado) {
  for (const valorBuscado of Object.values(arrayObjeto)) {
    //
    if (typeof valorBuscado === "object" && valorBuscado !== null) {
      // Testamos se a busca lá dentro retornou verdadeiro:
      if (contains(valorBuscado, valorProcurado) === true) {
        return true; // Paramos a função atual e avisamos que achou!
      }
    }
    if (Object.is(valorBuscado, valorProcurado)) {
      return true;
    }
  }
  return false;
};
// Do not edit below this line
module.exports = contains;
