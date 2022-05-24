import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static archetypeInstance = 0;
  type_: EnergyType;
  constructor(name: string) {
    super(name);
    this.type_ = 'mana';
    Mage.archetypeInstance += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number { 
    return Mage.archetypeInstance;
  }
}

export default Mage;