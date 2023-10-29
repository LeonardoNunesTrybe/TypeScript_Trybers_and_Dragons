import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;
  static raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.raceInstance += 1;
  }

  static createdRacesInstances() {
    return this.raceInstance; 
  }
}

export default Dwarf;