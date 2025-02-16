const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "l",
  "m",
  "n",
  "p",
  "qu",
  "r",
  "s",
  "t",
  "v",
  //"x",
  "z",
];
const doubles = [
  "BL",
  "BR",
  "CL",
  "CR",
  "FL",
  "FR",
  "GL",
  "GR",
  "PL",
  "PR",
  "TR",
  "DR",
  "GN",
  "PN",
];
const colors = [
  "rosso",
  "arancione",
  "giallo",
  "verde",
  "blu",
  "indaco",
  "viola",
  "nero",
  "bianco",
  "marrone",
  "rosa",
  "grigio",
  "porpora",
  "turchese",
  "argento",
  "oro",
];
const numbers = [
  "zero",
  "uno",
  "due",
  "tre",
  "quattro",
  "cinque",
  "sei",
  "sette",
  "otto",
  "nove",
  "dieci",
];
const animals = [
  "ape",
  "cane",
  "cavallo",
  "cicogna",
  "cigno",
  "elefante",
  "farfalla",
  "gallina",
  "gatto",
  "giraffa",
  "giraffa",
  "ippopotamo",
  "leone",
  "lupo",
  "mucca",
  "orso",
  "pappagallo",
  "pulcino",
  "rana",
  "scimmia",
  "serpente",
  "struzzo",
  "tigre",
  "cinghiale",
  "coccinella",
  "colomba",
  "coniglio",
  "corvo",
  "criceto",
  "delfino",
  "dromedario",
  "elefante marino",
  "faina",
  "falco",
  "gazzella",
  "ghepardo",
  "gufo",
  "istrice",
  "lince",
  "lontra",
  "lucciola",
  "maiale",
  "maialino",
  "marmotta",
  "mulo",
  "nibbio",
  "ostrica",
  "panda",
  "pantera",
  "pappagallo",
  "pecora",
  "pipistrello",
  "pulce",
  "ratto",
  "riccio",
  "salmone",
  "scoiattolo",
  "tartaruga",
  "topo",
  "tortora",
  "tritone",
  "uccello",
  "verme",
];
const names = [
  "Alessandro",
  "Alice",
  "Andrea",
  "Angela",
  "Antonio",
  "Beatrice",
  "Caterina",
  "Chiara",
  "Davide",
  "Elena",
  "Emanuele",
  "Federico",
  "Filippo",
  "Francesca",
  "Gabriele",
  "Giorgia",
  "Giovanni",
  "Giulia",
  "Giulio",
  "Giuseppe",
  "Leonardo",
  "Lorenzo",
  "Luigi",
  "Marco",
  "Martina",
  "Massimo",
  "Matteo",
  "Michele",
  "Nicola",
  "Paolo",
  "Riccardo",
  "Roberta",
  "Roberto",
  "Sara",
  "Silvia",
  "Simone",
  "Sofia",
  "Stefano",
  "Tommaso",
  "Valentina",
  "Vittoria",
];
const things = [
  "accendino",
  "agenda",
  "altoparlante",
  "anello",
  "arpa",
  "asciugacapelli",
  "auto",
  "barometro",
  "bicicletta",
  "bilancia",
  "binocolo",
  "bottiglia",
  "braccialetto",
  "bussola",
  "cacciavite",
  "calcolatrice",
  "calendario",
  "campanelli",
  "candele",
  "cappello",
  "carta",
  "cassa",
  "cassetta",
  "castagnette",
  "catena",
  "chiave",
  "chiavi",
  "chitarra",
  "cimbalo",
  "cintura",
  "clarinetto",
  "clessidra",
  "colla",
  "collana",
  "computer",
  "corda",
  "cuffie",
  "cuscino",
  "distintivo",
  "divano",
  "elastici",
  "finestra",
  "flauto",
  "forbici",
  "forno",
  "frigorifero",
  "giacca",
  "globo",
  "gong",
  "graffette",
  "igrometro",
  "lampada",
  "lanterna",
  "lavatrice",
  "lente",
  "letto",
  "libro",
  "livella",
  "lucchetto",
  "macchina",
  "mappa",
  "maracas",
  "martello",
  "metro",
  "metronomo",
  "microonde",
  "microscopio",
  "monitor",
  "mouse",
  "nastro",
  "occhiali",
  "ombrello",
  "orecchini",
  "orologio",
  "penna",
  "pennello",
  "pianoforte",
  "piatti",
  "porta",
  "portatile",
  "puntine",
  "quadro",
  "router",
  "sacco",
  "saxofono",
  "scaffale",
  "scarpa",
  "scarponi",
  "scrivania",
  "sedia",
  "sega",
  "serratura",
  "smartwatch",
  "spago",
  "specchio",
  "stampante",
  "stufa",
  "tablet",
  "taglierina",
  "tamburello",
  "tamburo",
  "tappeto",
  "tastiera",
  "tavolo",
  "telefono",
  "telescopio",
  "televisore",
  "tenda",
  "termometro",
  "torcia",
  "trapano",
  "triangolo",
  "tromba",
  "trombone",
  "usb",
  "ventilatore",
  "vernice",
  "videocamera",
  "violino",
  "xilofono",
  "zaino",
];

const vowels = ["a", "e", "i", "o", "u"];

function getRandomSyllable() {
  const addS = document
    .getElementById("add-s-toggle")
    .classList.contains("active");
  const twoConsonants = document
    .getElementById("two-consonants-toggle")
    .classList.contains("active");
  const useDoubles = document
    .getElementById("double-toggle")
    .classList.contains("active");
  const showMin = document
    .getElementById("min-toggle")
    .classList.contains("active");
  const showColor = document
    .getElementById("color-toggle")
    .classList.contains("active");
  const showNumbers = document
    .getElementById("number-toggle")
    .classList.contains("active");
  const showAnimals = document
    .getElementById("animal-toggle")
    .classList.contains("active");
  const showNames = document
    .getElementById("name-toggle")
    .classList.contains("active");
  const showThings = document
    .getElementById("things-toggle")
    .classList.contains("active");

  const randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
  let randomConsonant,
    randomConsonant2 = "";

  document.getElementById("random-syllable").hidden = showMin;

  const consonantSet = useDoubles ? doubles : consonants;

  if (randomVowel === "e" || randomVowel === "i") {
    const specialConsonants = ["ch", "gh"];
    const allConsonants = consonantSet.concat(specialConsonants);
    randomConsonant =
      allConsonants[Math.floor(Math.random() * allConsonants.length)];
  } else {
    randomConsonant =
      consonantSet[Math.floor(Math.random() * consonantSet.length)];
  }
  if (addS && randomConsonant !== "z" && randomConsonant !== "x") {
    randomConsonant = "s" + randomConsonant;
  } else if (twoConsonants) {
    randomConsonant2 =
      consonantSet[Math.floor(Math.random() * consonantSet.length)];
  }

  if (showColor) {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  if (showNumbers) {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  if (showAnimals) {
    return animals[Math.floor(Math.random() * animals.length)];
  }
  if (showNames) {
    return names[Math.floor(Math.random() * names.length)];
  }
  if (showThings) {
    return things[Math.floor(Math.random() * things.length)];
  }
  return randomConsonant + randomVowel + randomConsonant2;
}

function showRandomSyllable() {
  const xt = getRandomSyllable();
  document.getElementById("random-syllable").innerHTML = xt.toUpperCase();
  document.getElementById("random-syllable-min").innerHTML = xt.toLowerCase();
}

function toggleButton(element) {
  element.classList.toggle("active");
  showRandomSyllable();
}

function toggleExclusive(element, type) {
  const colorToggle = document.getElementById("color-toggle");
  const numberToggle = document.getElementById("number-toggle");
  const animalToggle = document.getElementById("animal-toggle");
  const nameToggle = document.getElementById("name-toggle");
  const thingsToggle = document.getElementById("things-toggle");

  switch (type) {
    case "color":
      numberToggle.classList.remove("active");
      animalToggle.classList.remove("active");
      nameToggle.classList.remove("active");
      thingsToggle.classList.remove("active");
      break;
    case "number":
      colorToggle.classList.remove("active");
      animalToggle.classList.remove("active");
      nameToggle.classList.remove("active");
      thingsToggle.classList.remove("active");
      break;
    case "animal":
      colorToggle.classList.remove("active");
      numberToggle.classList.remove("active");
      nameToggle.classList.remove("active");
      thingsToggle.classList.remove("active");
      break;
    case "name":
      colorToggle.classList.remove("active");
      numberToggle.classList.remove("active");
      animalToggle.classList.remove("active");
      thingsToggle.classList.remove("active");
      break;
    case "things":
      colorToggle.classList.remove("active");
      numberToggle.classList.remove("active");
      animalToggle.classList.remove("active");
      nameToggle.classList.remove("active");
      break;
  }

  element.classList.toggle("active");
  showRandomSyllable();
}

document.addEventListener("DOMContentLoaded", showRandomSyllable);
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 32) {
    showRandomSyllable();
  }
});

document.getElementById("button").addEventListener("click", showRandomSyllable);
document
  .getElementById("add-s-toggle")
  .addEventListener("click", () =>
    toggleButton(document.getElementById("add-s-toggle"))
  );
document
  .getElementById("two-consonants-toggle")
  .addEventListener("click", () =>
    toggleButton(document.getElementById("two-consonants-toggle"))
  );
document
  .getElementById("double-toggle")
  .addEventListener("click", () =>
    toggleButton(document.getElementById("double-toggle"))
  );
document
  .getElementById("min-toggle")
  .addEventListener("click", () =>
    toggleButton(document.getElementById("min-toggle"))
  );
document
  .getElementById("color-toggle")
  .addEventListener("click", () =>
    toggleExclusive(document.getElementById("color-toggle"), "color")
  );
document
  .getElementById("number-toggle")
  .addEventListener("click", () =>
    toggleExclusive(document.getElementById("number-toggle"), "number")
  );
document
  .getElementById("animal-toggle")
  .addEventListener("click", () =>
    toggleExclusive(document.getElementById("animal-toggle"), "animal")
  );
document
  .getElementById("name-toggle")
  .addEventListener("click", () =>
    toggleExclusive(document.getElementById("name-toggle"), "name")
  );
document
  .getElementById("things-toggle")
  .addEventListener("click", () =>
    toggleExclusive(document.getElementById("things-toggle"), "things")
  );
