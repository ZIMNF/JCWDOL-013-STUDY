// Exercise - Shooting Game

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    let randomItem = [{ health: 0 }, { health: 10 }, { power: 0 }, { power: 10 }];

    let randomIndex = Math.floor(Math.random() * randomItem.length);

    return randomItem[randomIndex];
  }

  // asumsi: player 1 akan selalu jalan duluan
  start() {
    while (true) {
      // Giliran Player 1
      console.log("=====================");
      console.log(`Giliran: ${player1.name}`);

      console.log("=====================");
      this.player1.showStatus();

      let getItem1 = this.getRandomItem();
      console.log(`Memperoleh ${JSON.stringify(getItem1)}`);
      this.player1.useItem(getItem1);
      this.player2.hit(this.player1.power);

      this.player1.showStatus();
      this.player2.showStatus();

      if (this.player2.health <= 0) {
        console.log(`${this.player1} Win`);
        break;
      }

      // Giliran Player 2
      console.log();
      console.log("=====================");
      console.log(`Giliran: ${player2.name}`);
      console.log("=====================");
      this.player2.showStatus();

      let getItem2 = this.getRandomItem();
      console.log(`Memperoleh ${JSON.stringify(getItem2)}`);
      this.player2.useItem(getItem2);
      this.player1.hit(this.player2.power);

      this.player1.showStatus();
      this.player2.showStatus();

      if (this.player1.health <= 0) {
        console.log(`${this.player2} Win`);
        break;
      }
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    for (let key in item) {
      if (key == "health") {
        this.health += item[key];
      } else {
        this.power += item[key];
      }
    }
  }

  showStatus() {
    console.log(`${this.name} ( Health => ${this.health}, Power => ${this.power} )`);
  }
}

let player1 = new Player("anto");
let player2 = new Player("malabar");

let game = new ShootingGame(player1, player2);

game.start();
