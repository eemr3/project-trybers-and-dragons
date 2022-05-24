import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static archetypeInstance = 0;
  type_: EnergyType;
  constructor(name: string) {
    super(name);
    this.type_ = 'stamina';
    Warrior.archetypeInstance += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Warrior.archetypeInstance;
  }
}

export default Warrior;
