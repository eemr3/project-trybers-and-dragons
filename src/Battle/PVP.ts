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
      // console.log('player - antes atk', this.player.lifePoints);
      this.player.attack(this._player2);
      // console.log('player - depois atk', this.player.lifePoints);

      // console.log('player2 - antes atk', this._player2.lifePoints);
      this._player2.attack(this.player);
      // console.log('player2 - depois atk', this._player2.lifePoints);
    }
    
    // this._player1.attack(this._player2);
    // if (this._player2.lifePoints < 0) return 1;

    // this._player2.attack(this._player1);
    // if (this._player1.lifePoints < 0) return -1;
    // // if (this._player1.lifePoints > 0) {
    // // }
    
    // // if (this._player2.lifePoints > 0) {
    // // }
    return super.fight();
    // return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;