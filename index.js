/** Part for the starting instanciation */
/** creating the hero Heracles */
const heracles = new Hero('👨 Heracles', 45, 12, './images/heracles.svg', 9, 1);

/** Creating his weapon and associating it */
const weapon = new Weapon('sword', 10, './images/sword.svg');
heracles.weapon = weapon;

/** Creating his shield and associating it */
const shield = new Shield('shield', 10, './images/shield.svg');
heracles.shield = shield;

/** Creating all of his adversaries */
const bird1 = new Monster('Bird', 25, 12, './images/bird.svg', 1, 3);
console.log(bird1);
const bird2 = new Monster('Bird', 25, 12, './images/bird.svg', 4, 2);
const bird3 = new Monster('Bird', 25, 12, './images/bird.svg', 8, 9);

/** Creating the hero section in the html */
const fighterHtml = new FightersTemplate('fighters');
fighterHtml.createTemplate(heracles, bird1);

/** Your code goes here */

const arena = new Arena(heracles, [bird1, bird2, bird3]);
console.log(arena);
const ArenaHTML = new ArenaTemplate('arena');
ArenaHTML.createArena(arena);

/** Do not touch => allow the opening / closing of the hero information section */
let openingModal = true;
const openModal = () => {
  if (openingModal) {
    const heroInfo = new HeroInfoTemplate('heroInfo');
    heroInfo.createHeroInfoTemplate(heracles);
    document.getElementById("heroInfo").style.display = "flex";
    openingModal = false;
  }
}

const closeModal = () => {
  const heroInfo = document.getElementById("heroInfo");
  heroInfo.style.display = "none";
  heroInfo.innerHTML = "";
  openingModal = true;
}