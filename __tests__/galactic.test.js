import GalacticAge from "./../src/galactic.js";

describe("GalacticAge", () => {
  let age;

  beforeEach(() => {
    age = 0;
    galacticAge = new GalacticAge(age);
  });
});

test("should define GalaticAge constructor", () => {
  expect(galacticAge.age).toBe(age);
});
