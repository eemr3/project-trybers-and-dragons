import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  attack(enemy: Fighter | SimpleFighter): void;
  special(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPonts: number): void;
}

export default Fighter;