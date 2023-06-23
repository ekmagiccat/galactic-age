import GalacticAge from "./../src/galactic.js";

describe("GalacticAge", () => {
  let age;
  let galacticAge;
  let years;
  let pastAge;
  let merNum;
  let veNum;
  let marsNum;
  let jupNum;
  let futureAge;
  let fYears;

  beforeEach(() => {
    age = 30;
    pastAge = 20;
    futureAge = 40;

    galacticAge = new GalacticAge(age);
  });

  test("should define GalaticAge constructor", () => {
    expect(galacticAge.age).toBe(age);
  });

  test("should calculate age on Mercury based on user's Earth age", () => {
    expect(galacticAge.mercuryAge()).toEqual(age * 0.24);
  });

  test("should calculate age on Venus based on user's Earth age", () => {
    expect(galacticAge.venusAge()).toEqual(age * 0.62);
  });

  test("should calculate age on Mars based on user's Earth age", () => {
    expect(galacticAge.marsAge()).toEqual(age * 1.88);
  });

  test("should calculate age on Jupiter based on user's Earth age", () => {
    expect(galacticAge.jupiterAge()).toEqual(age * 11.86);
  });

  test("should calculate years between age and passed age on Earth, Mercury, Venus, Mars, and Jupiter", () => {
    expect(galacticAge.yearsBtwn()).toBe(
      years * 1,
      years * merNum,
      years * veNum,
      years * marsNum,
      years * jupNum
    );
  });

  test("should calculate years between a future age and current age on Earth, Mercury, Venus, Mars, and Jupiter", () => {
    expect(galacticAge.futureYears()).toBe(
      fYears * 1,
      fYears * merNum,
      fYears * veNum,
      fYears * marsNum,
      fYears * jupNum
    );
  });
});
