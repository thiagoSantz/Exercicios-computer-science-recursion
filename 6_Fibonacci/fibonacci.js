function fibs(n) {
  //
  let resultado = [0, 1];
  //
  if (n <= 0) return [];
  if (n === 1) return [0];
  //
  for (let index = 0; index < n - 2; index++) {
    let ultimo = resultado[resultado.length - 1];
    let penultimo = resultado[resultado.length - 2];
    let novoNumero = ultimo + penultimo;
    resultado.push(novoNumero);
  }
  return resultado;
}

function fibsRec(n) {
  //
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  //
  let arrayAnterior = fibsRec(n - 1);
  //
  //console.log(arrayAnterior);
  //
  let ultimo = arrayAnterior[arrayAnterior.length - 1];
  let penultimo = arrayAnterior[arrayAnterior.length - 2];
  let novoNumero = ultimo + penultimo;
  //
  return [...arrayAnterior, novoNumero];
}

function mergeSort(arrayRecebido) {
  //
  if (arrayRecebido.length <= 1) return arrayRecebido;
  //
  let metade = Math.floor(arrayRecebido.length / 2);
  let esquerda = arrayRecebido.slice(0, metade);
  let direita = arrayRecebido.slice(metade, arrayRecebido.length);
  //
  // LOG 1: Mostra a divisão acontecendo
  //console.log(
    //`✂️ Dividindo: [${arrayRecebido}] -> Esquerda: [${esquerda}] | Direita: [${direita}]`,
  //);
  //
  let esquerdaOrdenada = mergeSort(esquerda);
  let direitaOrdenada = mergeSort(direita);
  //
  return merge(esquerdaOrdenada, direitaOrdenada);
  //
}

function merge(esquerda, direita) {
  //
  let arrayRetorno = [];
  let iEsquerda = 0;
  let iDireita = 0;
  //
  while (iEsquerda < esquerda.length && iDireita < direita.length) {
    if (esquerda[iEsquerda] < direita[iDireita]) {
      arrayRetorno.push(esquerda[iEsquerda]);
      iEsquerda++;
    } else {
      arrayRetorno.push(direita[iDireita]);
      iDireita++;
    }
  }
  //
  let resultadoFinal = [
    ...arrayRetorno,
    ...esquerda.slice(iEsquerda),
    ...direita.slice(iDireita)
  ];
  // LOG 2: Mostra a intercalação dos dois lados
  //console.log(
  //  `🧩 Juntando [${esquerda}] + [${direita}] -> Resultado: [${resultadoFinal}]`,
  //);
  //
  return resultadoFinal;
}

//console.log("Resultado:", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
//console.log(fibsRec(8));

module.exports = {
  fibs,
  fibsRec,
  mergeSort,
  merge,
};
