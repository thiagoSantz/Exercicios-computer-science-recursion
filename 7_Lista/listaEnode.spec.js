const Lista = require("./listaEnode");

//npx jest 7_Lista --verbose

describe("Lista", () => {
  let lista;

  beforeEach(() => {
    lista = new Lista();
  });

  describe("addFinal / addInicio", () => {
    test("adiciona no final mantendo ordem de inserção", () => {
      lista.addFinal(1);
      lista.addFinal(2);
      expect(lista.toString()).toBe("( 1 ) -> ( 2 ) -> null");
    });

    test("addInicio coloca na frente da lista", () => {
      lista.addFinal(1);
      lista.addInicio(0);
      expect(lista.toString()).toBe("( 0 ) -> ( 1 ) -> null");
    });

    test("funciona em lista vazia", () => {
      lista.addFinal(1);
      expect(lista.nodePrimero()).toBe(1);
    });
  });

  describe("tamanho", () => {
    test("lista vazia tem tamanho 0", () => {
      expect(lista.tamanho()).toBe(0);
    });
    test("conta corretamente após inserções", () => {
      lista.addFinal(1);
      lista.addFinal(2);
      expect(lista.tamanho()).toBe(2);
    });
  });

  describe("nodePrimero / nodeUltimo", () => {
    test("retorna undefined em lista vazia", () => {
      expect(lista.nodePrimero()).toBeUndefined();
      expect(lista.nodeUltimo()).toBeUndefined();
    });
    test("retorna valores corretos com elementos", () => {
      lista.addFinal(1);
      lista.addFinal(2);
      expect(lista.nodePrimero()).toBe(1);
      expect(lista.nodeUltimo()).toBe(2);
    });
  });

  describe("indicePosicao", () => {
    test("retorna valor no índice correto", () => {
      lista.addFinal("a");
      lista.addFinal("b");
      expect(lista.indicePosicao(1)).toBe("b");
    });
    test("retorna undefined pra índice fora do alcance", () => {
      expect(lista.indicePosicao(5)).toBeUndefined();
    });
  });

  describe("contem / indiceAchar", () => {
    test("contem retorna true/false corretamente", () => {
      lista.addFinal("x");
      expect(lista.contem("x")).toBe(true);
      expect(lista.contem("y")).toBe(false);
    });
    test("indiceAchar retorna -1 se não encontrar", () => {
      expect(lista.indiceAchar("z")).toBe(-1);
    });
  });

  describe("tirarUltimo", () => {
    test("remove e retorna o último elemento", () => {
      lista.addFinal(1);
      lista.addFinal(2);
      expect(lista.tirarUltimo()).toBe(2);
      expect(lista.toString()).toBe("( 1 ) -> null");
    });
    test("retorna undefined em lista vazia", () => {
      expect(lista.tirarUltimo()).toBeUndefined();
    });
    test("funciona com lista de um único elemento", () => {
      lista.addFinal(1);
      expect(lista.tirarUltimo()).toBe(1);
      expect(lista.tamanho()).toBe(0);
    });
  });

  describe("inserirNoIndice / removerNoIndice", () => {
    test("insere no meio corretamente", () => {
      lista.addFinal(1);
      lista.addFinal(3);
      lista.inserirNoIndice(1, 2);
      expect(lista.toString()).toBe("( 1 ) -> ( 2 ) -> ( 3 ) -> null");
    });
    test("remove no meio corretamente", () => {
      lista.addFinal(1);
      lista.addFinal(2);
      lista.addFinal(3);
      lista.removerNoIndice(1);
      expect(lista.toString()).toBe("( 1 ) -> ( 3 ) -> null");
    });
    test("lança RangeError para índice inválido ao inserir", () => {
      expect(() => lista.inserirNoIndice(5, "x")).toThrow(RangeError);
    });
    test("lança RangeError para índice inválido ao remover", () => {
      expect(() => lista.removerNoIndice(5)).toThrow(RangeError);
    });
  });
});