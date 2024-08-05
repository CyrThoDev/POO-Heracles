// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter.js");

const heracles = new Fighter("🦄 Heracles", 20, 6);
const nemean = new Fighter(" 🦁 Nemean", 11, 13);

//Lancer la bataille
//Heracles doit attaquer Nemean tant qu'il est en vie
//Nemean doit riposter tant qu'il est en vie
// Il en doit en rester qu'un à la fin

const diplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️ ${fighter2.name}  💙 ${fighter2.name} : ${fighter2.life}  `;
};

const score = (fighter1, fighter2) => {
  return fighter1.life
    ? {
        winner: fighter1,
        looser: fighter2,
      }
    : {
        winner: fighter2,
        looser: fighter1,
      };
};

let round = 1;
while (heracles.isAlive() && nemean.isAlive()) {
  console.info(`🕛 Round #${round}`);
  heracles.fight(nemean);
  console.info(diplay(heracles, nemean));

  if (nemean.isAlive()) {
    nemean.fight(heracles);
    console.info(diplay(nemean, heracles));
  }

  round++;
}

const result = score(heracles, nemean);

console.info(`💀 ${result.looser.name} is dead`);
console.info(`🏆 ${result.winner.name} wins (💙 ${result.winner.life}) `);
