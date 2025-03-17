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
    "cle",
    "gra",
    "dro",
  ];
  const dittonghiSpeciali = [
    "cia",
    "cio",
    "ciu",
    "gia",
    "gio",
    "giu",
    "qua",
    "que",
    "qui",
    "quo",
    "au",
    "yo",
  ];
  const vocali = "aeiouàèéìòóù";
  const risultato = [];
  let i = 0;

  while (i < parola.length) {
    let sillaba = "";
    let trovato = false;

    // Controlla dittonghi speciali
    for (let dittongo of dittonghiSpeciali) {
      if (parola.slice(i, i + dittongo.length).toLowerCase() === dittongo) {
        sillaba = parola.slice(i, i + dittongo.length);
        i += dittongo.length;

        // Gestione consonante successiva
        if (i < parola.length && !vocali.includes(parola[i].toLowerCase())) {
          const restante = parola.slice(i);
          let aggiuntaConsonante = false;

          for (let gruppo of gruppiInseparabili) {
            if (restante.toLowerCase().startsWith(gruppo)) {
              break;
            }
          }

          if (!aggiuntaConsonante && restante.length === 1) {
            sillaba += restante;
            i++;
          }
        }

        trovato = true;
        break;
      }
    }

    if (!trovato) {
      // Controlla gruppi consonantici inseparabili
      for (let gruppo of gruppiInseparabili) {
        if (parola.slice(i, i + gruppo.length).toLowerCase() === gruppo) {
          sillaba = parola.slice(i, i + gruppo.length);
          i += gruppo.length;
          while (
            i < parola.length &&
            vocali.includes(parola[i].toLowerCase())
          ) {
            sillaba += parola[i];
            i++;
          }
          trovato = true;
          break;
        }
      }
    }

    if (!trovato) {
      sillaba = parola[i];
      i++;

      // Gestione vocali successive
      while (i < parola.length && vocali.includes(parola[i].toLowerCase())) {
        sillaba += parola[i];
        i++;
      }

      // Gestione consonanti
      if (i < parola.length) {
        const nextChar = parola[i].toLowerCase();
        const nextNextChar =
          i + 1 < parola.length ? parola[i + 1].toLowerCase() : "";

        if (nextChar === nextNextChar) {
          // Consonante doppia: dividi tra le due
          i++;
        } else if (
          !vocali.includes(nextChar) &&
          !vocali.includes(nextNextChar)
        ) {
          // Controlla se le consonanti fanno parte di un gruppo inseparabile
          let isGruppoInseparabile = false;
          for (let gruppo of gruppiInseparabili) {
            if (parola.slice(i).toLowerCase().startsWith(gruppo)) {
              isGruppoInseparabile = true;
              break;
            }
          }
          if (!isGruppoInseparabile) {
            sillaba += nextChar;
            i++;
          }
        }
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
