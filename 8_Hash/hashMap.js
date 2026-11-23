class NodeHash {
  //
  constructor(key, valor = null, proximoNode = null) {
    this.key = key;
    this.valor = valor;
    this.proximoNode = proximoNode;
  }
}
//
class HashMap {
  //
  constructor(capacidade = 16, fatorCarga = 0.75) {
    this.capacidade = capacidade;
    this.fatorCarga = fatorCarga;
    this.baldes = new Array(capacidade);
    this.tamanho = 0;
  }
  //
  auxIndex(indice) {
    if (indice < 0 || indice >= this.baldes.length) {
      throw new Error("tamanho inválido.");
    }
  }
  //
  hashKey(chave) {
    let acumulador = 0;
    const numeroPrimo = 31;
    //
    for (let index = 0; index < chave.length; index++) {
      acumulador =
        (acumulador * numeroPrimo + chave.charCodeAt(index)) % this.capacidade;
    }
    return acumulador;
  }
  //
  redimensionarHash() {
    // 1. Pega todas as entradas antes de limpar a tabela
    const entradasAntigas = this.chavesEvaloresHash();

    // 2. Dobra a capacidade e reinicia a tabela
    this.capacidade *= 2;
    this.baldes = new Array(this.capacidade);
    this.tamanho = 0;

    // 3. Reinere os dados na nova tabela
    for (const [chave, valor] of entradasAntigas) {
      this.setHash(chave, valor);
    }
  }
  //
  setHash(chave, valor) {
    //se precisar aumentar o tamanho
    if ((this.tamanho + 1) / this.capacidade > 0.75) {
      this.redimensionarHash();
    }
    //
    let valorBalde = this.hashKey(chave);
    this.auxIndex(valorBalde);
    //
    if (!this.baldes[valorBalde]) {
      // Cenário 1: O balde está completamente vazio
      let novoNodo = new NodeHash(chave, valor);
      this.baldes[valorBalde] = novoNodo;
      this.tamanho++;
    }
    //
    else {
      //tem balde na lista
      let nodeAtual = this.baldes[valorBalde];
      //
      while (nodeAtual !== null) {
        // Se a chave já existe, atualiza o valor e encerra
        if (nodeAtual.key === chave) {
          // atualiza o valor da chave passada
          nodeAtual.valor = valor;
          return;
        }
        if (nodeAtual.proximoNode === null) {
          //ultimo no da lista
          let novoNodo = new NodeHash(chave, valor);
          nodeAtual.proximoNode = novoNodo;
          this.tamanho++;
          return;
        }
        nodeAtual = nodeAtual.proximoNode;
      }
    }
    //
  }
  //
  getHash(chave) {
    let valorBalde = this.hashKey(chave);
    this.auxIndex(valorBalde);
    //
    if (!this.baldes[valorBalde]) {
      // Cenário 1: O balde está completamente vazio
      return undefined;
    }
    //
    else {
      //tem balde na lista
      let nodeAtual = this.baldes[valorBalde];
      //
      while (nodeAtual !== null) {
        // Se a chave já existe, retorna o valor do node
        if (nodeAtual.key === chave) {
          return nodeAtual.valor;
        }
        nodeAtual = nodeAtual.proximoNode;
      }
      return null;
    }
    //
  }
  //
  temChaveHash(chave) {
    let valorBalde = this.hashKey(chave);
    this.auxIndex(valorBalde);
    //
    if (!this.baldes[valorBalde]) {
      // Cenário 1: O balde está completamente vazio
      return false;
    }
    //
    else {
      //tem balde na lista
      let nodeAtual = this.baldes[valorBalde];
      //
      while (nodeAtual !== null) {
        // Se a chave já existe, retorna true
        if (nodeAtual.key === chave) {
          return true;
        }
        nodeAtual = nodeAtual.proximoNode;
      }
      return false;
    }
    //
  }
  //
  removeHash(chave) {
    let valorBalde = this.hashKey(chave);
    this.auxIndex(valorBalde);
    //
    if (!this.baldes[valorBalde]) {
      // Cenário 1: O balde está completamente vazio
      return false;
    }
    //
    else {
      //tem balde na lista
      if (this.baldes[valorBalde].key === chave) {
        this.baldes[valorBalde] = this.baldes[valorBalde].proximoNode;
        this.tamanho--;
        return true;
      }
      //
      let nodeAtual = this.baldes[valorBalde];
      //
      while (nodeAtual.proximoNode !== null) {
        //
        if (nodeAtual.proximoNode.key === chave) {
          nodeAtual.proximoNode = nodeAtual.proximoNode.proximoNode;
          this.tamanho--;
          return true;
        }
        nodeAtual = nodeAtual.proximoNode;
      }
      return false;
    }
    //
  }
  //
  tamanhoHash() {
    return this.tamanho;
  }
  //
  limparHash() {
    this.baldes = new Array(this.capacidade);
    this.tamanho = 0;
  }
  //
  chavesHash() {
    //
    let arrayAux = [];
    //
    for (let index = 0; index < this.baldes.length; index++) {
      //
      if (this.baldes[index]) {
        // Se tiver algo na posição
        //
        let nodeAtual = this.baldes[index]; // variável para percorrer
        //
        while (nodeAtual !== null) {
          arrayAux.push(nodeAtual.key); // armazenando chaves aqui
          nodeAtual = nodeAtual.proximoNode; // proximo node
        }
      }
      //
    }
    return arrayAux;
    //
  }
  //
  valoresHash() {
    //
    let arrayAux = [];
    //
    for (let index = 0; index < this.baldes.length; index++) {
      //
      if (this.baldes[index]) {
        // Se tiver algo na posição
        //
        let nodeAtual = this.baldes[index]; // variável para percorrer
        //
        while (nodeAtual !== null) {
          arrayAux.push(nodeAtual.valor); // armazenando valores aqui
          nodeAtual = nodeAtual.proximoNode; // proximo node
        }
      }
      //
    }
    return arrayAux;
    //
  }
  //
  chavesEvaloresHash() {
    //
    let arrayAux = [];
    //
    for (let index = 0; index < this.baldes.length; index++) {
      //
      if (this.baldes[index]) {
        // Se tiver algo na posição
        //
        let nodeAtual = this.baldes[index]; // variável para percorrer
        //
        while (nodeAtual !== null) {
          arrayAux.push([nodeAtual.key, nodeAtual.valor]); // armazenando valores aqui
          nodeAtual = nodeAtual.proximoNode; // proximo node
        }
      }
      //
    }
    return arrayAux;
    //
  }
  //
}
module.exports = HashMap;
