// const permutations = function() {

// };

function permutations(arrayRecebido) {
  // 1. Caso base (se o array for vazio)
  if (arrayRecebido.length === 0) {
    return [[]];
  }
  let resultado = [];
  // 2. Loop principal
  for (const valorAtual of arrayRecebido) {
    // Tira o valor atual da lista
    const resto = arrayRecebido.filter(item => item !== valorAtual);
    // Recursão: pega as permutações do resto
    const subPermutacoes = permutations(resto);
    // 3. Coloca o valorAtual na frente de cada combinação recebida
    for (const subPerm of subPermutacoes) {
      resultado.push([valorAtual, ...subPerm]);
    }
  }
  return resultado;
}

// Do not edit below this line
module.exports = permutations;
