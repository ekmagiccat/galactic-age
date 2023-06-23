/* Mercury years. (A Mercury year is .24 Earth years.)
Venus years. (A Venus year is .62 Earth years.)
Mars years. (A Mars year is 1.88 Earth years.)
Jupiter years. (A Jupiter year is 11.86 Earth years.) */

export default class GalacticAge {
  constructor(age, pastAge, futureAge) {
    this.age = age;
    this.pastAge = pastAge;
    this.futureAge = futureAge;
  }
  planetAge() {
    const merNum = 0.24;
    const veNum = 0.62;
    const marsNum = 1.88;
    const jupNum = 11.86;
    return (
      this.age * 1,
      this.age * merNum,
      this.age * veNum,
      this.age * marsNum,
      this.age * jupNum
    );
  }

  yearsBtwn() {
    let years = this.age - this.pastAge;
    const merNum = 0.24;
    const veNum = 0.62;
    const marsNum = 1.88;
    const jupNum = 11.86;
    return (
      years * 1, years * merNum, years * veNum, years * marsNum, years * jupNum
    );
  }
  futureYears() {
    let fYears = this.futureAge - this.age;
    const merNum = 0.24;
    const veNum = 0.62;
    const marsNum = 1.88;
    const jupNum = 11.86;
    return (
      fYears * 1,
      fYears * merNum,
      fYears * veNum,
      fYears * marsNum,
      fYears * jupNum
    );
  }
}
