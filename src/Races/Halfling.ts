import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  static raceInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.raceInstance += 1;
  }

  static createdRacesInstances() {
    return this.raceInstance; 
  }
}

export default Halfling;