import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static countInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.countInstance;
  }
}

export default Dwarf;
