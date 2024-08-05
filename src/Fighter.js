/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(enemy) {
    // Calcul des points marqués par l'attaquant (attackPoints) : Un nombre aléatoire entre 1 et la force de l'attaquant
    // Degats reels contre l'enemi (damages) : attackPoints - dexterite de l'enemi
    // Points de vie de l'enemi : points de vie actuelle - Degats (damages)
    const attackPoints = Math.floor(Math.random() * this.strength) + 1;
    const damages = Math.max(attackPoints - enemy.dexterity, 0);
    enemy.life = Math.max(enemy.life - damages, 0);
  }

  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
