/* Mercury years. (A Mercury year is .24 Earth years.)
Venus years. (A Venus year is .62 Earth years.)
Mars years. (A Mars year is 1.88 Earth years.)
Jupiter years. (A Jupiter year is 11.86 Earth years.) */

export default class GalacticAge {
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    const merNum = 0.24;
    return this.age * merNum;
  }

  venusAge() {
    const veNum = 0.62;
    return this.age * veNum;
  }

  marsAge() {
    const marsNum = 1.88;
    return this.age * marsNum;
  }

  jupiterAge() {
    const jupNum = 11.86;
    return this.age * jupNum;
  }
}
