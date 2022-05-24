import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static archetypeInstance = 0;
  type_: EnergyType;
  constructor(name: string) {
    super(name);
    this.type_ = 'mana';
    Necromancer.archetypeInstance += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.archetypeInstance;
  }
}

export default Necromancer;
