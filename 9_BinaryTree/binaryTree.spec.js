const ArvoreBinaria = require("./binaryTree");

//npx jest 9_BinaryTree

describe("ArvoreBinaria", () => {
  let arvore;

  beforeEach(() => {
    arvore = new ArvoreBinaria([10, 5, 15, 3, 7, 12, 20]);
  });

  describe("construção", () => {
    test("remove duplicados e ordena antes de montar a árvore", () => {
      const arvoreDup = new ArvoreBinaria([5, 5, 3, 3, 1]);
      expect(arvoreDup.arrayOrdenado).toEqual([1, 3, 5]);
    });
    test("constrói balanceada a partir de array ordenado", () => {
      expect(arvore.arvoreEbalanceada()).toBe(true);
    });
  });

  describe("arvoreTemValor", () => {
    test("retorna true para valor presente", () => {
      expect(arvore.arvoreTemValor(7)).toBe(true);
    });
    test("retorna false para valor ausente", () => {
      expect(arvore.arvoreTemValor(99)).toBe(false);
    });
  });

  describe("arvoreInserirValor", () => {
    test("insere um novo valor e passa a ser encontrável", () => {
      arvore.nodeRaiz = arvore.arvoreInserirValor(6);
      expect(arvore.arvoreTemValor(6)).toBe(true);
    });
    test("não duplica valor já existente", () => {
      arvore.nodeRaiz = arvore.arvoreInserirValor(10);
      const valores = [];
      arvore.arvoreOrdemCrescente((v) => valores.push(v));
      expect(valores.filter((v) => v === 10).length).toBe(1);
    });
  });

  describe("arvoreDeleteValor", () => {
    test("remove nó folha (sem filhos)", () => {
      arvore.nodeRaiz = arvore.arvoreDeleteValor(3);
      expect(arvore.arvoreTemValor(3)).toBe(false);
    });
    test("remove nó com um filho, promovendo o filho", () => {
      arvore.nodeRaiz = arvore.arvoreInserirValor(6);
      arvore.nodeRaiz = arvore.arvoreDeleteValor(7);
      expect(arvore.arvoreTemValor(7)).toBe(false);
      expect(arvore.arvoreTemValor(6)).toBe(true);
    });
    test("remove nó com dois filhos, usando sucessor em ordem", () => {
      arvore.nodeRaiz = arvore.arvoreDeleteValor(10);
      expect(arvore.arvoreTemValor(10)).toBe(false);
      const valores = [];
      arvore.arvoreOrdemCrescente((v) => valores.push(v));
      expect(valores).toEqual([3, 5, 7, 12, 15, 20]);
    });
    test("não quebra ao tentar remover valor inexistente", () => {
      arvore.nodeRaiz = arvore.arvoreDeleteValor(999);
      expect(arvore.arvoreTemValor(999)).toBe(false);
    });
  });

  describe("travessias", () => {
    test("arvoreOrdemCrescente retorna valores em ordem", () => {
      const valores = [];
      arvore.arvoreOrdemCrescente((v) => valores.push(v));
      expect(valores).toEqual([3, 5, 7, 10, 12, 15, 20]);
    });
    test("arvoreOrdemNivel visita por nível", () => {
      const valores = [];
      arvore.arvoreOrdemNivel((v) => valores.push(v));
      expect(valores[0]).toBe(10); // raiz primeiro
      expect(valores.length).toBe(7);
    });
    test("arvoreOrdemNodePre visita raiz antes dos filhos", () => {
      const valores = [];
      arvore.arvoreOrdemNodePre((v) => valores.push(v));
      expect(valores[0]).toBe(10);
    });
    test("arvoreOrdemNodePos visita raiz por último", () => {
      const valores = [];
      arvore.arvoreOrdemNodePos((v) => valores.push(v));
      expect(valores[valores.length - 1]).toBe(10);
    });
    test("lança erro se callback não for fornecido", () => {
      expect(() => arvore.arvoreOrdemCrescente()).toThrow();
      expect(() => arvore.arvoreOrdemNivel()).toThrow();
    });
  });

  describe("altura e profundidade", () => {
    test("arvoreAltura da raiz bate com a árvore balanceada", () => {
      expect(arvore.arvoreAltura()).toBe(2);
    });
    test("arvoreGetAltura retorna altura de um nó específico", () => {
      expect(arvore.arvoreGetAltura(5)).toBe(1);
    });
    test("arvoreGetAltura retorna undefined pra valor inexistente", () => {
      expect(arvore.arvoreGetAltura(99)).toBeUndefined();
    });
    test("arvoreProfundidade da raiz é 0", () => {
      expect(arvore.arvoreProfundidade(10)).toBe(0);
    });
    test("arvoreProfundidade retorna undefined pra valor inexistente", () => {
      expect(arvore.arvoreProfundidade(99)).toBeUndefined();
    });
  });

  describe("balanceamento", () => {
    test("árvore recém-construída está balanceada", () => {
      expect(arvore.arvoreEbalanceada()).toBe(true);
    });
    test("fica desbalanceada após inserções sequenciais crescentes", () => {
      arvore.nodeRaiz = arvore.arvoreInserirValor(100);
      arvore.nodeRaiz = arvore.arvoreInserirValor(200);
      arvore.nodeRaiz = arvore.arvoreInserirValor(300);
      expect(arvore.arvoreEbalanceada()).toBe(false);
    });
    test("arvoreRebalancear torna a árvore balanceada novamente", () => {
      arvore.nodeRaiz = arvore.arvoreInserirValor(100);
      arvore.nodeRaiz = arvore.arvoreInserirValor(200);
      arvore.nodeRaiz = arvore.arvoreInserirValor(300);
      arvore.arvoreRebalancear();
      expect(arvore.arvoreEbalanceada()).toBe(true);
    });
  });
});