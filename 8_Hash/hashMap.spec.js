const HashMap = require("./hashMap");

//npx jest 8_Hash --verbose

describe("HashMap", () => {
  let hash;

  beforeEach(() => {
    hash = new HashMap();
  });

  describe("setHash / getHash", () => {
    test("guarda e recupera um valor por chave", () => {
      hash.setHash("apple", "red");
      expect(hash.getHash("apple")).toBe("red");
    });

    test("atualiza o valor se a chave já existe", () => {
      hash.setHash("apple", "red");
      hash.setHash("apple", "green");
      expect(hash.getHash("apple")).toBe("green");
    });

    test("getHash retorna undefined para chave inexistente", () => {
      expect(hash.getHash("banana")).toBeUndefined();
    });
  });

  describe("temChaveHash", () => {
    test("retorna true se a chave existe", () => {
      hash.setHash("apple", "red");
      expect(hash.temChaveHash("apple")).toBe(true);
    });
    test("retorna false se a chave não existe", () => {
      expect(hash.temChaveHash("banana")).toBe(false);
    });
  });

  describe("removeHash", () => {
    test("remove uma chave existente e retorna true", () => {
      hash.setHash("apple", "red");
      expect(hash.removeHash("apple")).toBe(true);
      expect(hash.getHash("apple")).toBeUndefined();
    });
    test("retorna false ao tentar remover chave inexistente", () => {
      expect(hash.removeHash("banana")).toBe(false);
    });
    test("diminui o tamanho após remover", () => {
      hash.setHash("apple", "red");
      hash.removeHash("apple");
      expect(hash.tamanhoHash()).toBe(0);
    });
  });

  describe("tamanhoHash", () => {
    test("começa em 0", () => {
      expect(hash.tamanhoHash()).toBe(0);
    });
    test("incrementa a cada chave nova", () => {
      hash.setHash("a", 1);
      hash.setHash("b", 2);
      expect(hash.tamanhoHash()).toBe(2);
    });
    test("não incrementa ao atualizar chave existente", () => {
      hash.setHash("a", 1);
      hash.setHash("a", 2);
      expect(hash.tamanhoHash()).toBe(1);
    });
  });

  describe("limparHash", () => {
    test("esvazia todos os dados", () => {
      hash.setHash("a", 1);
      hash.limparHash();
      expect(hash.tamanhoHash()).toBe(0);
      expect(hash.getHash("a")).toBeUndefined();
    });
  });

  describe("chavesHash / valoresHash / chavesEvaloresHash", () => {
    test("retorna todas as chaves inseridas", () => {
      hash.setHash("a", 1);
      hash.setHash("b", 2);
      expect(hash.chavesHash().sort()).toEqual(["a", "b"]);
    });
    test("retorna todos os valores inseridos", () => {
      hash.setHash("a", 1);
      hash.setHash("b", 2);
      expect(hash.valoresHash().sort()).toEqual([1, 2]);
    });
    test("retorna pares [chave, valor] corretos", () => {
      hash.setHash("a", 1);
      expect(hash.chavesEvaloresHash()).toEqual([["a", 1]]);
    });
  });

  describe("redimensionamento automático", () => {
    test("dobra a capacidade ao passar do fator de carga", () => {
      const capacidadeInicial = hash.capacidade;
      for (let i = 0; i < 13; i++) {
        hash.setHash(`chave${i}`, i);
      }
      expect(hash.capacidade).toBe(capacidadeInicial * 2);
    });
    test("mantém todos os dados após redimensionar", () => {
      for (let i = 0; i < 13; i++) {
        hash.setHash(`chave${i}`, i);
      }
      expect(hash.tamanhoHash()).toBe(13);
      expect(hash.getHash("chave5")).toBe(5);
    });
  });
});