import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy: Energy ;
  private race: Race;
  private archetype: Archetype;
  private maxLifePoints: number;
  private dexterity: number;
  private _energy: Energy ;
  constructor(name: string) {
    this.race = new Elf(name, 40);
    this.archetype = new Mage(name);
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this.lifePoints = this.race.maxLifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this.dexterity = this.race.dexterity;
    this.energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
    this._energy = this.energy;
  }

  get getRace(): Race {
    return this.race;
  }

  get getArchetype(): Archetype {
    return this.archetype;
  }

  get getLifePoints(): number {
    return this.lifePoints;
  }

  get getStrength(): number {
    return this.strength;
  }

  get getDefense(): number {
    return this.defense;
  }

  get getDexterity(): number {
    return this.dexterity;
  }

  get getEnergy(): Energy | undefined {
    return this._energy;
  }

  attack(enemy: Fighter): void {
    this.receiveDamage(enemy.strength);
  }

  levelUp(): void {
    this.defense = getRandomInt(1, 10);
    this.dexterity = getRandomInt(1, 10);
    this.strength = getRandomInt(1, 10);
    this.maxLifePoints = getRandomInt(1, 10);
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
    }
    this.lifePoints = this.maxLifePoints;

    this.energy.amount = 10;
  }

  receiveDamage(attackPoints: number): void {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this.lifePoints -= damage;
    } else if (this.lifePoints <= 0) {
      this.lifePoints = -1;
    }
  }

  special(enemy: Fighter): void {
    this.receiveDamage(enemy.strength);
  }
}

export default Character;