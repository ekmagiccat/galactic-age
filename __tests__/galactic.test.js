import GalacticAge from "./../src/galactic.js";

describe("GalacticAge", () => {
  let age;
  let galacticAge;

  beforeEach(() => {
    age = 1;
    galacticAge = new GalacticAge(age);
  });

  test("should define GalaticAge constructor", () => {
    expect(galacticAge.age).toBe(age);
  });

  test("should calculate age on Mercury based on user's age", () => {
    expect(galacticAge.mercuryAge()).toEqual(1.24);
  });
});
