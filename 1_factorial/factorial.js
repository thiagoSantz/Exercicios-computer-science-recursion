// const factorial = function() {

// };

const factorial = function (input) {
  /// 1. Validação de entradas inválidas:
  // - Precisa ser do tipo 'number'
  // - Precisa ser um número inteiro (Number.isInteger)
  // - Não pode ser negativo (input < 0)
  if (typeof input !== "number" || !Number.isInteger(input) || input < 0) {
    return undefined;
  }
  // 2. Caso Base (Freio)
  if (input == 0) {
    return 1;
  }
  // 3. Passo Recursivo
  return input * factorial(input - 1)
};

// Do not edit below this line
module.exports = factorial;
