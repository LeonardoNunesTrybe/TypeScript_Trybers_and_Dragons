import Race from './Race';

class Elf extends Race {
  maxLifePoints: number;
  static raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.raceInstance += 1;
  }

  static createdRacesInstances() {
    return this.raceInstance; 
  }
}

export default Elf;