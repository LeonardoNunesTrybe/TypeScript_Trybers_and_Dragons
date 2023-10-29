import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static raceInstance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.raceInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return this.raceInstance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;