
const ArvoreBinaria = require('./binaryTree');

//node 9_BinaryTree/mainTest.js

//#region

// 1. Cria a árvore
const arvore = new ArvoreBinaria([10, 5, 15, 3, 7, 12, 20]);
console.log("--- Árvore inicial ---");
arvore.prettyPrint();

// 2. Testa includes
console.log("Tem 7?", arvore.arvoreTemValor(7)); // true
console.log("Tem 99?", arvore.arvoreTemValor(99)); // false

// 3. Testa insert
arvore.nodeRaiz = arvore.arvoreInserirValor(6);
console.log("--- Depois de inserir 6 ---");
arvore.prettyPrint();

// 4. Testa delete - caso folha
arvore.nodeRaiz = arvore.arvoreDeleteValor(3);
console.log("--- Depois de deletar 3 (folha) ---");
arvore.prettyPrint();

// 5. Testa delete - caso 1 filho
arvore.nodeRaiz = arvore.arvoreDeleteValor(7);
console.log("--- Depois de deletar 7 (1 filho, o 6) ---");
arvore.prettyPrint();

// 6. Testa delete - caso 2 filhos (deleta a raiz)
arvore.nodeRaiz = arvore.arvoreDeleteValor(10);
console.log("--- Depois de deletar 10 (2 filhos) ---");
arvore.prettyPrint();

console.log("---Ordem Nivel--");
arvore.arvoreOrdemNivel((valor) => console.log(valor));
console.log("---Ordem Crescente--");
arvore.arvoreOrdemCrescente((valor) => console.log(valor));
console.log("---Ordem Pre--");
arvore.arvoreOrdemNodePre((valor) => console.log(valor));
console.log("---Ordem Pos--");
arvore.arvoreOrdemNodePos((valor) => console.log(valor));

// 8. Testa Alturas
console.log("-----");
console.log("Altura 6?", arvore.arvoreGetAltura(6));
console.log("Altura 12?", arvore.arvoreGetAltura(12));
console.log("Tem 99?", arvore.arvoreGetAltura(99));

// 9. Testa Profundidade
console.log("-----");
console.log("Profundidade 6?", arvore.arvoreProfundidade(6));
console.log("Altura 12?", arvore.arvoreProfundidade(12));
console.log("Tem 99?", arvore.arvoreProfundidade(99));
console.log("É balanceada?", arvore.arvoreEbalanceada());

// 10. Driver script - números aleatórios < 100
function gerarArrayAleatorio(tamanho) {
  let array = [];
  for (let i = 0; i < tamanho; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

const arvoreDriver = new ArvoreBinaria(gerarArrayAleatorio(15));
console.log("--- Árvore driver inicial ---");
arvoreDriver.prettyPrint();

console.log("Está balanceada?", arvoreDriver.arvoreEbalanceada());

console.log("--- Nível ---");
arvoreDriver.arvoreOrdemNivel((valor) => console.log(valor));
console.log("--- Pré-ordem ---");
arvoreDriver.arvoreOrdemNodePre((valor) => console.log(valor));
console.log("--- Pós-ordem ---");
arvoreDriver.arvoreOrdemNodePos((valor) => console.log(valor));
console.log("--- Em ordem (crescente) ---");
arvoreDriver.arvoreOrdemCrescente((valor) => console.log(valor));

console.log("--- Desbalanceando (inserindo valores > 100) ---");
arvoreDriver.nodeRaiz = arvoreDriver.arvoreInserirValor(150);
arvoreDriver.nodeRaiz = arvoreDriver.arvoreInserirValor(200);
arvoreDriver.nodeRaiz = arvoreDriver.arvoreInserirValor(250);
arvoreDriver.nodeRaiz = arvoreDriver.arvoreInserirValor(300);
arvoreDriver.prettyPrint();

console.log("Está balanceada?", arvoreDriver.arvoreEbalanceada());

arvoreDriver.arvoreRebalancear();
console.log("--- Depois de rebalancear ---");
arvoreDriver.prettyPrint();

console.log("Está balanceada?", arvoreDriver.arvoreEbalanceada());

console.log("--- Nível ---");
arvoreDriver.arvoreOrdemNivel((valor) => console.log(valor));
console.log("--- Pré-ordem ---");
arvoreDriver.arvoreOrdemNodePre((valor) => console.log(valor));
console.log("--- Pós-ordem ---");
arvoreDriver.arvoreOrdemNodePos((valor) => console.log(valor));
console.log("--- Em ordem (crescente) ---");
arvoreDriver.arvoreOrdemCrescente((valor) => console.log(valor));

//#endregion