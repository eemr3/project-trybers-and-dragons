import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected _player1: Fighter;
  protected _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
  
    return super.fight();
  }
}

export default PVP;