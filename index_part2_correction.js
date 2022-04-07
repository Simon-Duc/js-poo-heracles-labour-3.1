const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");

/** Creation of Héraclès  */
const heracles = new Fighter("🧔 Heracles", 20, 6);
/** Creating his weapon and associating it */
const weapon = new Weapon('sword', 10);
heracles.weapon = weapon;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10);
heracles.shield = shield;

/** Creation of the new opponent  */
const boar = new Fighter('Erymanthian Boar', 25, 12);

/**
 * Display the result of the battle
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};

/**
 * Determin who is the winner and the looser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive() ? {
    winner: fighter1,
    looser: fighter2,
  } : {
    winner: fighter2,
    looser: fighter1
  };
};

// Launch the battle

let round = 0;
while (heracles.isAlive() && boar.isAlive()) {
  console.log(`🕛 Round #${round}`);

  heracles.fight(boar);
  console.log(roundDisplay(heracles, boar));

  //Boar can fight only if he is still alive after heracles strike
  if (boar.isAlive()) {
    boar.fight(heracles);
    console.log(roundDisplay(boar, heracles));
  }

  round++;
}

const result = score(heracles, boar);

console.log(`💀 ${result.looser.name} is dead`);
console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
