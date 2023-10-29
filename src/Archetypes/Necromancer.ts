import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static raceInstance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.raceInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return this.raceInstance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;