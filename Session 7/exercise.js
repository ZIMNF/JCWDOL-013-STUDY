// 06 Exercise - Shooting Game

class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return { health, power };
  }

  start() {
    let currentPlayer = this.player1;
    let opponentPlayer = this.player2;

    while (currentPlayer.health > 0 && opponentPlayer.health > 0) {
      console.log("Player Status before shooting:");
      this.player1.showStatus();
      this.player2.showStatus();

      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      console.log(`${currentPlayer.name} got item:`, item1);
      console.log(`${opponentPlayer.name} got item:`, item2);

      currentPlayer.useItem(item1);
      opponentPlayer.useItem(item2);

      console.log("Player Status after shooting:");
      this.player1.showStatus();
      this.player2.showStatus();

      opponentPlayer.hit(currentPlayer.power);

      if (opponentPlayer.health <= 0) {
        console.log(`${currentPlayer.name} wins!`);
        break;
      }

      // Swap players for next turn
      [currentPlayer, opponentPlayer] = [opponentPlayer, currentPlayer];
    }
  }
}

// Create players
const player1 = new Player("Player A");
const player2 = new Player("Player B");

// Create shooting game
const game = new ShootingGame(player1, player2);

// Start the game
game.start();
