const sillabizza = require("../sillabe");

test('sillabizza splits "ciao" correctly', () => {
  expect(sillabizza("ciao")).toEqual(["cia", "o"]);
});

test('sillabizza splits "amico" correctly', () => {
  expect(sillabizza("amico")).toEqual(["a", "mi", "co"]);
});

test('sillabizza splits "sillabazione" correctly', () => {
  expect(sillabizza("sillabazione")).toEqual(["sil", "la", "ba", "zio", "ne"]);
});

test('sillabizza splits "quadro" correctly', () => {
  expect(sillabizza("quadro")).toEqual(["qua", "dro"]);
});

test('sillabizza splits "strada" correctly', () => {
  expect(sillabizza("strada")).toEqual(["stra", "da"]);
});

test('sillabizza splits "autobus" correctly', () => {
  expect(sillabizza("autobus")).toEqual(["au", "to", "bus"]);
});

test('sillabizza splits "elefante" correctly', () => {
  expect(sillabizza("elefante")).toEqual(["e", "le", "fan", "te"]);
});

test('sillabizza splits "bicicletta" correctly', () => {
  expect(sillabizza("bicicletta")).toEqual(["bi", "ci", "clet", "ta"]);
});

test('sillabizza splits "programma" correctly', () => {
  expect(sillabizza("programma")).toEqual(["pro", "gram", "ma"]);
});

test('sillabizza splits "università" correctly', () => {
  expect(sillabizza("università")).toEqual(["u", "ni", "ver", "si", "tà"]);
});

test('sillabizza splits "scuola" correctly', () => {
  expect(sillabizza("scuola")).toEqual(["scuo", "la"]);
});

test('sillabizza splits "biblioteca" correctly', () => {
  expect(sillabizza("biblioteca")).toEqual(["bi", "blio", "te", "ca"]);
});

// Aggiungi ulteriori test per coprire più casi edge
test('sillabizza splits "psicologia" correctly', () => {
  expect(sillabizza("psicologia")).toEqual(["psi", "co", "lo", "gia"]);
});

test('sillabizza splits "gnomo" correctly', () => {
  expect(sillabizza("gnomo")).toEqual(["gno", "mo"]);
});

test('sillabizza splits "xilofono" correctly', () => {
  expect(sillabizza("xilofono")).toEqual(["xi", "lo", "fo", "no"]);
});

test('sillabizza splits "yogurt" correctly', () => {
  expect(sillabizza("yogurt")).toEqual(["yo", "gurt"]);
});

test('sillabizza splits "treno" correctly', () => {
  expect(sillabizza("treno")).toEqual(["tre", "no"]);
});

test('sillabizza splits "fragola" correctly', () => {
  expect(sillabizza("fragola")).toEqual(["fra", "go", "la"]);
});

test('sillabizza splits "chiave" correctly', () => {
  expect(sillabizza("chiave")).toEqual(["chia", "ve"]);
});

test('sillabizza splits "ghiaccio" correctly', () => {
  expect(sillabizza("ghiaccio")).toEqual(["ghiac", "cio"]);
});

test('sillabizza splits "scienza" correctly', () => {
  expect(sillabizza("scienza")).toEqual(["scien", "za"]);
});

test('sillabizza splits "albero" correctly', () => {
  expect(sillabizza("albero")).toEqual(["al", "be", "ro"]);
});

test('sillabizza splits "fiume" correctly', () => {
  expect(sillabizza("fiume")).toEqual(["fiu", "me"]);
});

test('sillabizza splits "zucchero" correctly', () => {
  expect(sillabizza("zucchero")).toEqual(["zuc", "che", "ro"]);
});

test('sillabizza splits "pranzo" correctly', () => {
  expect(sillabizza("pranzo")).toEqual(["pran", "zo"]);
});

test('sillabizza splits "gloria" correctly', () => {
  expect(sillabizza("gloria")).toEqual(["glo", "ria"]);
});

test('sillabizza splits "cavallo" correctly', () => {
  expect(sillabizza("cavallo")).toEqual(["ca", "val", "lo"]);
});

test('sillabizza splits "pianoforte" correctly', () => {
  expect(sillabizza("pianoforte")).toEqual(["pia", "no", "for", "te"]);
});

test('sillabizza splits "ombrello" correctly', () => {
  expect(sillabizza("ombrello")).toEqual(["om", "brel", "lo"]);
});

test('sillabizza splits "quaderno" correctly', () => {
  expect(sillabizza("quaderno")).toEqual(["qua", "der", "no"]);
});

test('sillabizza splits "telefono" correctly', () => {
  expect(sillabizza("telefono")).toEqual(["te", "le", "fo", "no"]);
});

test('sillabizza splits "calcolatrice" correctly', () => {
  expect(sillabizza("calcolatrice")).toEqual(["cal", "co", "la", "tri", "ce"]);
});

test('sillabizza splits "metronomo" correctly', () => {
  expect(sillabizza("metronomo")).toEqual(["me", "tro", "no", "mo"]);
});

test('sillabizza splits "finestra" correctly', () => {
  expect(sillabizza("finestra")).toEqual(["fi", "ne", "stra"]);
});

test('sillabizza splits "eclettico" correctly', () => {
  expect(sillabizza("eclettico")).toEqual(["e", "clet", "ti", "co"]);
});
