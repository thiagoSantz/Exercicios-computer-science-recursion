// const pascal = function() {
  
// };
  
function pascal(n) {
  // 1. Caso base: a primeira linha é sempre [1]
  if (n === 1) {
    return [1];
  }

  // 2. Recursão: busca a linha anterior (n - 1)
  const linhaAnterior = pascal(n - 1);

  // 3. Adiciona zeros nas pontas para facilitar as somas laterais
  const linhaComZeros = [0, ...linhaAnterior, 0];
  const novaLinha = [];

  // 4. Soma cada elemento com o seu vizinho da direita
  for (let i = 0; i < linhaComZeros.length - 1; i++) {
    const soma = linhaComZeros[i] + linhaComZeros[i + 1];
    novaLinha.push(soma);
  }

  // 5. Retorna a nova linha calculada
  return novaLinha;
}

// Do not edit below this line
module.exports = pascal;
