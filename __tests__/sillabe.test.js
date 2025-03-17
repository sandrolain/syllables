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
  expect(sillabizza("bicicletta")).toEqual(["bi", "ci", "cle", "tta"]);
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
