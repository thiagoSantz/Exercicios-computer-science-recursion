// Importe as classes do seu arquivo (ajuste o nome do arquivo se necessário)
//import { Lista } from './listaEnode.js';

const Lista = require('./listaEnode');

//node 7_Lista/mainTest.js

const minhaLista = new Lista();

console.log("=== 1. TESTANDO ADICIONAR (addFinal e addInicio) ===");
minhaLista.addFinal("cachorro");
minhaLista.addFinal("gato");
minhaLista.addFinal("papagaio");
console.log(minhaLista.toString()); 
// Esperado: ( cachorro ) -> ( gato ) -> ( papagaio ) -> null

minhaLista.addInicio("cobra");
console.log(minhaLista.toString()); 
// Esperado: ( cobra ) -> ( cachorro ) -> ( gato ) -> ( papagaio ) -> null


console.log("\n=== 2. TESTANDO TAMANHO E ACESSOS (tamanho, head, tail, indicePosicao) ===");
console.log("Tamanho:", minhaLista.tamanho());                  // Esperado: 4
console.log("Primeiro elemento (head):", minhaLista.nodePrimero());      // Esperado: cobra
console.log("Último elemento (tail):", minhaLista.nodeUltimo());        // Esperado: papagaio
console.log("Elemento no índice 2:", minhaLista.indicePosicao(2)); // Esperado: gato


console.log("\n=== 3. TESTANDO BUSCAS (contem e indiceAchar) ===");
console.log("Contém 'gato'?", minhaLista.contem("gato"));         // Esperado: true
console.log("Contém 'leão'?", minhaLista.contem("leão"));         // Esperado: false
console.log("Índice do 'papagaio':", minhaLista.indiceAchar("papagaio")); // Esperado: 3
console.log("Índice do 'peixe' (não existe):", minhaLista.indiceAchar("peixe")); // Esperado: -1


console.log("\n=== 4. TESTANDO REMOÇÃO DO FIM (tirarUltimo) ===");
console.log("Valor removido:", minhaLista.tirarUltimo());         // Esperado: papagaio
console.log(minhaLista.toString()); 
// Esperado: ( cobra ) -> ( cachorro ) -> ( gato ) -> null


console.log("\n=== 5. TESTANDO EXTRA CREDIT (inserirNoIndice e removerNoIndice) ===");
minhaLista.inserirNoIndice(1, "hamster");
console.log("Após inserir 'hamster' no índice 1:");
console.log(minhaLista.toString()); 
// Esperado: ( cobra ) -> ( hamster ) -> ( cachorro ) -> ( gato ) -> null

minhaLista.removerNoIndice(2);
console.log("Após remover o elemento do índice 2 (cachorro):");
console.log(minhaLista.toString()); 
// Esperado: ( cobra ) -> ( hamster ) -> ( gato ) -> null


console.log("\n=== 6. TESTANDO VALIDAÇÃO DE ERRO (RangeError) ===");
try {
  minhaLista.inserirNoIndice(99, "erro");
} catch (erro) {
  console.log("Erro pego com sucesso:", erro.message); 
  // Esperado: Índice fora dos limites
}