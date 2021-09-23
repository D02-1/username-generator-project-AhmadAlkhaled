const fs = require('fs'); // FileSystem, zum lesen des dateisystems
const path = require('path'); // Path, zum arbeiten mit dateipfaden

// Benutzernamen Generator
// Beispiel für Benutzer: ShinySunflower55555 oder FlyingAutomobile34567 oder BeautifulCheesecake44567.

// Was benötigen wir?
// - Eine Funktion um die werte aus der JSON datei zu lesen

/**
 * @function getWords
 * @description Reads words from json file.
 * @returns { object }
 */

 function getWords()
 {
     const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));
 
     return json;
 }

// - Eine Funktion um die zufällige Nummer hinter dem Namen zu generieren
// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (PascalCase)
// - Eine Funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktionen zugreifen
// - Einen export, um die Applikation in einer anderen datei zu nutzen