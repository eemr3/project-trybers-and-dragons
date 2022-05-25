import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player1: Fighter;
  private _monster: Array<SimpleFighter>;

  constructor(player1: Fighter, monster: Array<SimpleFighter>) {
    super(player1);
    this._player1 = player1;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((battle) => {
      if (this._player1.lifePoints > 0 || battle.lifePoints > 0) {
        this._player1.attack(battle);
        battle.attack(this._player1);
      }
    });

    return super.fight();
  }
}

export default PVE;