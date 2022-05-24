import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static archetypeInstance = 0;
  type_: EnergyType;
  constructor(name: string) {
    super(name);
    this.type_ = 'stamina';
    Ranger.archetypeInstance += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  static createdArchetypeInstances(): number {
    return Ranger.archetypeInstance;
  }
}

export default Ranger;
