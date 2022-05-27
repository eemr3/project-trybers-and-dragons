import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player1: Fighter;
  private _monster: Array<SimpleFighter | Fighter>;

  constructor(player1: Fighter, monster: Array<SimpleFighter | Fighter>) {
    super(player1);
    this._player1 = player1;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((npc) => {
      while (this._player1.lifePoints > 0 && npc.lifePoints > 0) {
        this._player1.attack(npc);
        npc.attack(this._player1);
      }
    });
    
    return super.fight();
  }
}

export default PVE;