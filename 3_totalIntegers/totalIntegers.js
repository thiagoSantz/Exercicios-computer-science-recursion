// const totalIntegers = function() {

// };

const totalIntegers = function (arrayRecebido) {
  //
  if (typeof arrayRecebido !== "object" || arrayRecebido === null) {
    return;
  }
  let contador = 0;
  //
  for (const valorAtual of Object.values(arrayRecebido)) {
    //
    if (typeof valorAtual === "object" && valorAtual !== null) {
      //
      contador += totalIntegers(valorAtual);
    }
    if (Number.isInteger(valorAtual)) {
      contador += 1;
    }
  }
  return contador;
};

// Do not edit below this line
module.exports = totalIntegers;
