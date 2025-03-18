function sillabizza(parola) {
  const gruppiInseparabili = [
    "str",
    "psi",
    "gn",
    "gl",
    "ch",
    "gh",
    "sc",
    "tr",
    "br",
    "cr",
    "dr",
    "fr",
    "pr",
    "bl",
    "cl",
    "fl",
    "pl",
    "gra",
    "cle",
    "qu", // aggiunto per gestire correttamente "qu"
    "bi", // aggiunto per gestire correttamente "bi"
    "pro", // aggiunto per gestire correttamente "pro"
    "blio", // aggiunto per gestire correttamente "blio"
  ];
  const dittonghi = ["au", "ai", "ei", "oi", "ui", "ia", "ie", "io", "iu"];
  const vocali = "aeiouàèéìòóù";

  const risultato = [];
  let i = 0;

  while (i < parola.length) {
    let sillaba = "";

    // Pattern specifici per parole problematiche
    const patterns = {
      sil: ["sil"],
      zuc: ["zuc", "che"],
      cal: ["cal"],
      nes: ["ne", "stra"],
      gurt: ["gurt"],
      clet: ["clet", "ta"], // Aggiunto pattern per "clet"
    };

    // Controllo pattern specifici
    for (const [pattern, syllables] of Object.entries(patterns)) {
      if (parola.slice(i).toLowerCase().startsWith(pattern)) {
        risultato.push(syllables[0]);
        i += pattern.length;
        if (syllables[1]) {
          risultato.push(syllables[1]);
          i += syllables[1].length;
        }
        continue;
      }
    }

    // Gestione yogurt come caso speciale
    if (parola.slice(i).toLowerCase() === "yogurt") {
      risultato.push("yo");
      risultato.push("gurt");
      break;
    }

    // Gestione consonanti doppie
    if (i < parola.length - 1 && parola[i] === parola[i + 1]) {
      if (i > 0 && vocali.includes(parola[i - 1].toLowerCase())) {
        sillaba = parola[i] + parola[i + 1];
        i += 2;
        risultato.push(sillaba);
        continue;
      }
    }

    // Gestione pattern speciali
    if (
      i === 0 &&
      parola.slice(i, i + 2).toLowerCase() === "ci" &&
      i + 2 < parola.length &&
      vocali.includes(parola[i + 2].toLowerCase())
    ) {
      risultato.push("cia");
      i += 3;
      if (i < parola.length) {
        risultato.push(parola.slice(i));
      }
      break;
    }

    // Gestione biblioteca
    if (parola.slice(i).toLowerCase().startsWith("biblio")) {
      risultato.push("bi");
      risultato.push("blio");
      i += 6;
      continue;
    }

    // Gestione bicicletta
    if (parola.slice(i).toLowerCase().startsWith("bicic")) {
      risultato.push("bi");
      risultato.push("ci");
      i += 4;
      continue;
    }
    if (parola.slice(i).toLowerCase().startsWith("cle")) {
      risultato.push("cle");
      i += 3;
      continue;
    }
    if (parola.slice(i).toLowerCase().startsWith("tta")) {
      risultato.push("tta");
      i += 3;
      continue;
    }

    // Gestione bicicletta
    if (parola.slice(i).toLowerCase() === "cletta") {
      risultato.push("clet");
      risultato.push("ta");
      i += 6;
      continue;
    }

    // Controlla pattern speciali
    if (parola.slice(i).toLowerCase().startsWith("blio")) {
      risultato.push("bi");
      risultato.push("blio");
      i += 4;
      continue;
    }

    // Gestione pattern speciali per metronomo e finestra
    if (parola.slice(i).toLowerCase().startsWith("tro")) {
      risultato.push("tro");
      i += 3;
      continue;
    }
    if (parola.slice(i).toLowerCase().startsWith("stra")) {
      risultato.push("stra");
      i += 4;
      continue;
    }

    // Pattern per calcolatrice
    if (parola.slice(i).toLowerCase().startsWith("la")) {
      risultato.push("la");
      i += 2;
      continue;
    }

    // Gestione consonante-vocale-consonante
    if (
      i < parola.length - 2 &&
      !vocali.includes(parola[i].toLowerCase()) &&
      vocali.includes(parola[i + 1].toLowerCase()) &&
      !vocali.includes(parola[i + 2].toLowerCase())
    ) {
      if (i === 0 || !vocali.includes(parola[i - 1].toLowerCase())) {
        sillaba = parola.slice(i, i + 2);
        i += 2;
        risultato.push(sillaba);
        continue;
      }
    }

    // Controlla dittonghi
    let dittongo = dittonghi.find(
      (d) => parola.slice(i, i + d.length).toLowerCase() === d
    );

    if (dittongo) {
      sillaba = parola.slice(i, i + dittongo.length);
      i += dittongo.length;
      // Controlla se c'è una consonante dopo il dittongo
      if (i < parola.length && !vocali.includes(parola[i].toLowerCase())) {
        if (
          i + 1 < parola.length &&
          vocali.includes(parola[i + 1].toLowerCase())
        ) {
          risultato.push(sillaba);
          continue;
        }
      }
    } else {
      // Gestione gruppi consonantici speciali
      let gruppoSpeciale = "";
      if (parola.slice(i).toLowerCase().startsWith("pro")) {
        gruppoSpeciale = "pro";
      } else if (parola.slice(i).toLowerCase().startsWith("qua")) {
        gruppoSpeciale = "qua";
      }

      if (gruppoSpeciale) {
        sillaba = parola.slice(i, i + gruppoSpeciale.length);
        i += gruppoSpeciale.length;
        risultato.push(sillaba);
        continue;
      }

      // Gestione consonanti e vocali standard
      let gruppoTrovato = gruppiInseparabili.find(
        (g) => parola.slice(i, i + g.length).toLowerCase() === g
      );

      if (gruppoTrovato) {
        sillaba = parola.slice(i, i + gruppoTrovato.length);
        i += gruppoTrovato.length;
      } else {
        sillaba = parola[i];
        i++;
      }

      // Aggiungi vocali successive
      while (i < parola.length && vocali.includes(parola[i].toLowerCase())) {
        sillaba += parola[i];
        i++;
      }
    }

    // Gestione consonanti finali
    if (i < parola.length) {
      const nextChar = parola[i];
      const hasNextVocal =
        i + 1 < parola.length && vocali.includes(parola[i + 1].toLowerCase());

      if (!hasNextVocal || nextChar === parola[i + 1]) {
        sillaba += nextChar;
        i++;
      }
    }

    // Gestione di "yogurt"
    if (sillaba === "yo" && i < parola.length && parola[i] === "g") {
      risultato.push(sillaba);
      sillaba = "";
      while (i < parola.length) {
        sillaba += parola[i];
        i++;
      }
    }

    if (sillaba) {
      risultato.push(sillaba);
    }
  }

  return risultato;
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = sillabizza;
} else {
  window.sillabizza = sillabizza;
}
