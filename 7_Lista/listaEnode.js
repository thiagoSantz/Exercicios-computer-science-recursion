class Node {
  //
  constructor(valor = null, proximoNode = null) {
    this.valor = valor;
    this.proximoNode = proximoNode;
  }
}
//
class Lista {
  //
  constructor() {
    this.head = null;
  }
  //
  addFinal(valor) {
    const nodeNovo = new Node(valor);
    //
    if (this.head == null) {
      this.head = nodeNovo;
      return;
    }
    //
    let nodeAtual = this.head;
    //
    while (nodeAtual.proximoNode !== null) {
      nodeAtual = nodeAtual.proximoNode;
    }
    nodeAtual.proximoNode = nodeNovo;
  }
  //
  addInicio(valor) {
    //
    const nodeNovo = new Node(valor);
    //
    if (this.head == null) {
      this.head = nodeNovo;
      return;
    }
    //
    nodeNovo.proximoNode = this.head;
    this.head = nodeNovo;
  }
  //
  tamanho() {
    //
    let contador = 0;
    let nodeAtual = this.head;
    //
    while (nodeAtual !== null) {
      contador++;
      nodeAtual = nodeAtual.proximoNode;
    }
    return contador;
  }
  //
  nodePrimero() {
    //
    let nodeAtual = this.head;
    //
    if (nodeAtual == null) {
      return undefined;
    }
    return nodeAtual.valor;
  }
  //
  nodeUltimo() {
    //
    let nodeAtual = this.head;
    //
    if (nodeAtual == null) {
      return undefined;
    }
    //
    while (nodeAtual.proximoNode !== null) {
      nodeAtual = nodeAtual.proximoNode;
    }
    return nodeAtual.valor;
  }
  //
  indicePosicao(indice) {
    //
    let contador = 0;
    let nodeAtual = this.head;
    //
    while (nodeAtual !== null) {
      if (contador === indice) {
        return nodeAtual.valor;
      }
      //
      contador++;
      nodeAtual = nodeAtual.proximoNode;
    }
    //
    return undefined;
  }
  //
  contem(valor) {
    //
    let nodeAtual = this.head;
    //
    while (nodeAtual !== null) {
      if (nodeAtual.valor == valor) {
        return true;
      }
      //
      nodeAtual = nodeAtual.proximoNode;
    }
    //
    return false;
  }
  //
  indiceAchar(valor) {
    //
    let contador = 0;
    let nodeAtual = this.head;
    //
    while (nodeAtual !== null) {
      if (nodeAtual.valor == valor) {
        return contador;
      }
      //
      contador++;
      nodeAtual = nodeAtual.proximoNode;
    }
    //
    return -1;
  }
  //
  toString() {
    //
    if (this.head === null) {
      return "";
    }
    //
    let nodeAtual = this.head;
    let resultado = "";
    //
    while (nodeAtual !== null) {
      resultado += `( ${nodeAtual.valor} ) -> `;
      //
      nodeAtual = nodeAtual.proximoNode;
    }
    //
    resultado += "null";
    return resultado;
  }
  //
  tirarUltimo() {
    //
    if (this.head === null) {
      return undefined;
    }
    if (this.head.proximoNode === null) {
      const ultimo = this.head.valor;
      this.head = null;
      return ultimo;
    }
    //
    let nodeAtual = this.head;
    //
    while (nodeAtual.proximoNode.proximoNode !== null) {
      //
      nodeAtual = nodeAtual.proximoNode;
    }
    //
    const valorRemovido = nodeAtual.proximoNode.valor; 
    nodeAtual.proximoNode = null;                     
    return valorRemovido;
  }
  //
  inserirNoIndice(indice, valor) {
    //
    if (indice < 0 || indice > this.tamanho()) {
      throw new RangeError("Índice fora dos limites");
    }
    if (indice === 0) {
      return this.addInicio(valor);
    }
    if (indice === this.tamanho()) {
      return this.addFinal(valor);
    }
    //
    let contador = 0;
    let nodeAtual = this.head;
    //
    while (nodeAtual !== null) {
      if (contador === indice-1) {
        const nodeNovo = new Node(valor);
        nodeNovo.proximoNode = nodeAtual.proximoNode;
        nodeAtual.proximoNode = nodeNovo;
        return;
      }
      //
      contador++;
      nodeAtual = nodeAtual.proximoNode;
    }
  }
  //
  removerNoIndice(indice) {
    //
    if (indice < 0 || indice >= this.tamanho()) {
      throw new RangeError("Índice fora dos limites");
    }
    if (indice === 0) {
      this.head = this.head.proximoNode;
      return;
    }
    //
    let contador = 0;
    let nodeAtual = this.head;
    //
    while (nodeAtual !== null) {
      if (contador === indice-1) {
        nodeAtual.proximoNode = nodeAtual.proximoNode.proximoNode
        return;
      }
      //
      contador++;
      nodeAtual = nodeAtual.proximoNode;
    }
  }
  //
}
module.exports = Lista;
