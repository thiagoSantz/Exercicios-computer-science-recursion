const { fibs } = require("./fibonacci");

describe("fibonacci", () => {
  test("fibs de 8 = [0, 1, 1, 2, 3, 5, 8, 13]", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
  test("fibs de 0 = []", () => {
    expect(fibs(0)).toEqual([]);
  });
  test("fibs de 1 = [0]", () => {
    expect(fibs(1)).toEqual([0]);
  });
  test("fibs de 2 = [0,1]", () => {
    expect(fibs(2)).toEqual([0,1]);
  });
});
