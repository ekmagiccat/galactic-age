import GalacticAge from "./../src/galactic.js";

describe("GalacticAge", () => {
  let age;
  let galacticAge;
  let pastAge;
  let futureAge;

  beforeEach(() => {
    age = 30;
    pastAge = 20;
    futureAge = 40;

    galacticAge = new GalacticAge(age, pastAge, futureAge);
  });

  test("should define GalaticAge constructor", () => {
    expect(galacticAge.age).toBe(age);
  });

  test("should calculate age on Mercury, Venus, Mars, and Jupiter, based on user's Earth age", () => {
    expect(galacticAge.planetAge()).toEqual([
      30, 7.199999999999999, 18.6, 56.4, 355.79999999999995,
    ]);
  });

  test("should calculate years between age and passed age on Earth, Mercury, Venus, Mars, and Jupiter", () => {
    expect(galacticAge.yearsBtwn()).toEqual([
      10, 2.4, 6.2, 18.799999999999997, 118.6,
    ]);
  });

  test("should calculate years between a future age and current age on Earth, Mercury, Venus, Mars, and Jupiter", () => {
    expect(galacticAge.futureYears()).toEqual([
      10, 2.4, 6.2, 18.799999999999997, 118.6,
    ]);
  });
});
