//import { HashMap } from "./hashMap.js"; // Ajuste o nome do arquivo se necessário

const HashMap = require('./hashMap');

//node 8_Hash/mainTest.js

const meuHash = new HashMap();

console.log("--- Capacidade Inicial ---");
console.log("Capacidade:", meuHash.capacidade); // 16
console.log("Tamanho:", meuHash.tamanho);       // 0

console.log("\n--- Inserindo 12 elementos (Limite de 75%) ---");
meuHash.setHash("apple", "red");
meuHash.setHash("banana", "yellow");
meuHash.setHash("carrot", "orange");
meuHash.setHash("dog", "brown");
meuHash.setHash("elephant", "gray");
meuHash.setHash("frog", "green");
meuHash.setHash("grape", "purple");
meuHash.setHash("hat", "black");
meuHash.setHash("ice cream", "white");
meuHash.setHash("jacket", "blue");
meuHash.setHash("kite", "pink");
meuHash.setHash("lion", "golden");

console.log("Capacidade após 12 itens:", meuHash.capacidade); // 16
console.log("Tamanho total:", meuHash.tamanho);               // 12

console.log("\n--- Inserindo o 13º elemento (Dispara o Resize) ---");
meuHash.setHash("melon", "green");

console.log("Capacidade após o 13º item:", meuHash.capacidade); // Deve subir para 32!
console.log("Tamanho total:", meuHash.tamanho);               // 13
console.log("Busca pelo novo item 'melon':", meuHash.getHash("melon"));