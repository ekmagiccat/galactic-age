import GalacticAge from "./../src/galactic.js";

describe("GalacticAge", () => {
  let age;
  let galacticAge;
  let years;
  let merNum;
  let veNum;
  let marsNum;
  let jupNum;
  let fYears;
  let pastAge;
  let futureAge;

  beforeEach(() => {
    // age = 30;
    //pastAge = 20;
    //futureAge = 40;

    galacticAge = new GalacticAge(age, pastAge, futureAge);
  });

  test("should define GalaticAge constructor", () => {
    expect(galacticAge.age).toBe(age);
  });

  test("should calculate age on Mercury, Venus, Mars, and Jupiter, based on user's Earth age", () => {
    expect(galacticAge.planetAge()).toEqual(
      age * 1,
      age * 0.24,
      age * 0.62,
      age * 1.88,
      age * 11.86
    );
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
