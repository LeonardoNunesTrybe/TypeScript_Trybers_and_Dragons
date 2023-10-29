import Race from './Race';

class Orc extends Race {
  maxLifePoints: number;
  static raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.raceInstance += 1;
  }

  static createdRacesInstances() {
    return this.raceInstance; 
  }
}

export default Orc;