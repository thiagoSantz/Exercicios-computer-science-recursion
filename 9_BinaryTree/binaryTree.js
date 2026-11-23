class NodeBinario {
  constructor(valor = null, nodeEsquerdo = null, nodeDireito = null) {
    this.valor = valor;
    this.nodeEsquerdo = nodeEsquerdo;
    this.nodeDireito = nodeDireito;
  }
}
//
class ArvoreBinaria {
  constructor(arrayEntrada) {
    //tira duplicado e ordena
    this.arrayOrdenado = [...new Set(arrayEntrada)].sort((a, b) => a - b);
    this.nodeRaiz = this.arvoreConstruir(this.arrayOrdenado);
  }
  //
  arvoreConstruir(arrayRecebido, start = 0, end = arrayRecebido.length - 1) {
    //
    if (start > end) {
      return null;
    }
    //
    let mid = Math.floor((start + end) / 2);
    let nodeAtual = new NodeBinario(arrayRecebido[mid]);
    //
    nodeAtual.nodeEsquerdo = this.arvoreConstruir(
      arrayRecebido,
      start,
      mid - 1,
    );
    nodeAtual.nodeDireito = this.arvoreConstruir(arrayRecebido, mid + 1, end);
    //
    return nodeAtual;
  }
  //
  arvoreTemValor(valorBuscado, nodeBuscado = this.nodeRaiz) {
    //
    if (nodeBuscado === null) {
      return false;
    }
    //
    if (nodeBuscado.valor === valorBuscado) {
      return true;
    }
    //
    if (valorBuscado < nodeBuscado.valor) {
      //valor menor que o meio é esquerdo se nao, direito
      return this.arvoreTemValor(valorBuscado, nodeBuscado.nodeEsquerdo);
    } else {
      //
      return this.arvoreTemValor(valorBuscado, nodeBuscado.nodeDireito);
    }
  }
  //
  arvoreInserirValor(valorBuscado, nodeBuscado = this.nodeRaiz) {
    //
    if (nodeBuscado === null) {
      let nodeNovo = new NodeBinario(valorBuscado);
      return nodeNovo;
    }
    //
    if (nodeBuscado.valor === valorBuscado) {
      return nodeBuscado;
    }
    //
    if (valorBuscado < nodeBuscado.valor) {
      //valor menor que o meio é esquerdo se nao, direito
      nodeBuscado.nodeEsquerdo = this.arvoreInserirValor(
        valorBuscado,
        nodeBuscado.nodeEsquerdo,
      );
      //
    } else {
      //
      nodeBuscado.nodeDireito = this.arvoreInserirValor(
        valorBuscado,
        nodeBuscado.nodeDireito,
      );
    }
    //
    return nodeBuscado;
    //
  }
  //
  arvoreDeleteValor(valorBuscado, nodeBuscado = this.nodeRaiz) {
    //
    if (nodeBuscado === null) {
      //
      return null;
    }
    //
    if (nodeBuscado.valor === valorBuscado) {
      //1 caso
      if (
        nodeBuscado.nodeDireito === null &&
        nodeBuscado.nodeEsquerdo === null
      ) {
        return null;
      }
      //2 caso
      if (
        nodeBuscado.nodeDireito !== null &&
        nodeBuscado.nodeEsquerdo === null
      ) {
        return nodeBuscado.nodeDireito;
      }
      //
      if (
        nodeBuscado.nodeEsquerdo !== null &&
        nodeBuscado.nodeDireito === null
      ) {
        return nodeBuscado.nodeEsquerdo;
      }
      //3 caso
      //
      let nodeAuxiliar = nodeBuscado.nodeDireito;
      //
      while (nodeAuxiliar.nodeEsquerdo !== null) {
        //
        nodeAuxiliar = nodeAuxiliar.nodeEsquerdo;
      }
      //
      nodeBuscado.valor = nodeAuxiliar.valor;
      nodeBuscado.nodeDireito = this.arvoreDeleteValor(
        nodeAuxiliar.valor,
        nodeBuscado.nodeDireito,
      );
      //
      return nodeBuscado;
    }
    //
    if (valorBuscado < nodeBuscado.valor) {
      //valor menor que o meio é esquerdo se nao, direito
      nodeBuscado.nodeEsquerdo = this.arvoreDeleteValor(
        valorBuscado,
        nodeBuscado.nodeEsquerdo,
      );
      //
    } else {
      //
      nodeBuscado.nodeDireito = this.arvoreDeleteValor(
        valorBuscado,
        nodeBuscado.nodeDireito,
      );
    }
    //
    return nodeBuscado;
    //
  }
  //
  arvoreOrdemNivel(callback) {
    //
    if (!callback) {
      throw new Error("nao é callback");
    }
    //
    let arrayAuxiliar = [this.nodeRaiz];
    //
    while (arrayAuxiliar.length > 0) {
      //
      let nodeAtual = arrayAuxiliar.shift(); //tira o primeiro elemento
      callback(nodeAtual.valor);
      //
      if (nodeAtual.nodeEsquerdo !== null) {
        arrayAuxiliar.push(nodeAtual.nodeEsquerdo);
      }
      //
      if (nodeAtual.nodeDireito !== null) {
        arrayAuxiliar.push(nodeAtual.nodeDireito);
      }
      //
    }
  }
  //
  arvoreOrdemCrescente(callback, nodeAuxiliar = this.nodeRaiz) {
    //
    if (!callback) {
      throw new Error("nao é callback");
    }
    //
    if (nodeAuxiliar === null) {
      return; // nao precisa de else por causa do return
    }
    //
    this.arvoreOrdemCrescente(callback, nodeAuxiliar.nodeEsquerdo);
    callback(nodeAuxiliar.valor);
    this.arvoreOrdemCrescente(callback, nodeAuxiliar.nodeDireito);
    //
  }
  //
  arvoreRebalancear() {
    //
    let arrayAuxiliar = [];
    //
    this.arvoreOrdemCrescente((valor) => arrayAuxiliar.push(valor));
    //
    this.nodeRaiz = this.arvoreConstruir(arrayAuxiliar);
    //
  }
  //
  arvoreOrdemNodePre(callback, nodeAuxiliar = this.nodeRaiz) {
    //
    if (!callback) {
      throw new Error("nao é callback");
    }
    //
    if (nodeAuxiliar === null) {
      return; // nao precisa de else por causa do return
    }
    //
    callback(nodeAuxiliar.valor);
    this.arvoreOrdemNodePre(callback, nodeAuxiliar.nodeEsquerdo);
    this.arvoreOrdemNodePre(callback, nodeAuxiliar.nodeDireito);
    //
  }
  //
  arvoreOrdemNodePos(callback, nodeAuxiliar = this.nodeRaiz) {
    //
    if (!callback) {
      throw new Error("nao é callback");
    }
    //
    if (nodeAuxiliar === null) {
      return; // nao precisa de else por causa do return
    }
    //
    this.arvoreOrdemNodePos(callback, nodeAuxiliar.nodeEsquerdo);
    this.arvoreOrdemNodePos(callback, nodeAuxiliar.nodeDireito);
    callback(nodeAuxiliar.valor);
    //
  }
  //
  arvoreAltura(node = this.nodeRaiz) {
    //
    if (node === null) {
      return -1;
    }
    //
    let alturaEsquerda = this.arvoreAltura(node.nodeEsquerdo);
    let alturaDireita = this.arvoreAltura(node.nodeDireito);
    return 1 + Math.max(alturaEsquerda, alturaDireita);
    //
  }
  //
  arvoreGetAltura(valor, nodeBuscado = this.nodeRaiz) {
    //
    if (nodeBuscado === null) {
      return undefined;
    }
    //
    if (nodeBuscado.valor === valor) {
      return this.arvoreAltura(nodeBuscado);
    }
    //
    if (valor < nodeBuscado.valor) {
      //valor menor que o meio é esquerdo se nao, direito
      return this.arvoreGetAltura(valor, nodeBuscado.nodeEsquerdo);
    } else {
      //
      return this.arvoreGetAltura(valor, nodeBuscado.nodeDireito);
    }
    //
  }
  //
  arvoreProfundidade(valor, nodeBuscado = this.nodeRaiz) {
    //
    if (nodeBuscado === null) {
      return undefined;
    }
    //
    if (nodeBuscado.valor === valor) {
      return 0;
    }
    //
    if (valor < nodeBuscado.valor) {
      let resultado = this.arvoreProfundidade(valor, nodeBuscado.nodeEsquerdo);
      if (resultado === undefined) {
        return undefined;
      }
      return 1 + resultado;
    } else {
      let resultado = this.arvoreProfundidade(valor, nodeBuscado.nodeDireito);
      if (resultado === undefined) {
        return undefined;
      }
      return 1 + resultado;
    }
  }
  //
  arvoreEbalanceada(nodeBuscado = this.nodeRaiz) {
    if (nodeBuscado === null) {
      return true;
    }
    //
    let subEsquerda = this.arvoreAltura(nodeBuscado.nodeEsquerdo);
    let subDireita = this.arvoreAltura(nodeBuscado.nodeDireito);
    //
    return Math.abs(subEsquerda - subDireita) <= 1 && this.arvoreEbalanceada(nodeBuscado.nodeEsquerdo) && this.arvoreEbalanceada(nodeBuscado.nodeDireito);
  }
  //
  // Função prettyPrint adaptada para as suas propriedades
  prettyPrint(node = this.nodeRaiz, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }
    this.prettyPrint(
      node.nodeDireito,
      `${prefix}${isLeft ? " │ " : "    "}`,
      false,
    );
    console.log(`${prefix}${isLeft ? " └── " : "┌── "}${node.valor}`);
    this.prettyPrint(
      node.nodeEsquerdo,
      `${prefix}${isLeft ? "    " : " │ "}`,
      true,
    );
  }
}
module.exports = ArvoreBinaria;
