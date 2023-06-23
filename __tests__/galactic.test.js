import GalacticAge from "./../src/galactic.js";

describe("GalacticAge", () => {
  let age;
  let galacticAge;
  let pastAge;

  beforeEach(() => {
    age = 1;
    galacticAge = new GalacticAge(age);
  });

  test("should define GalaticAge constructor", () => {
    expect(galacticAge.age).toBe(age);
  });

  test("should calculate age on Mercury based on user's Earth age", () => {
    expect(galacticAge.mercuryAge()).toEqual(0.24);
  });

  test("should calculate age on Venus based on user's Earth age", () => {
    expect(galacticAge.venusAge()).toEqual(0.62);
  });

  test("should calculate age on Mars based on user's Earth age", () => {
    expect(galacticAge.marsAge()).toEqual(1.88);
  });

  test("should calculate age on Jupiter based on user's Earth age", () => {
    expect(galacticAge.jupiterAge()).toEqual(11.86);
  });
});
