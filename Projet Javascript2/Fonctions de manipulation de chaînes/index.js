// Fonction pour inverser une chaîne
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Fonction pour compter les caractères
function countCharacters(str) {
  return str.length;
}

// Fonction pour mettre les mots en majuscule
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Exemples d'utilisation
let exampleString = "bonjour tout le monde";

console.log("Inverser la chaîne :");
console.log(reverseString(exampleString)); // "ednom el tuot ruojnob"

console.log("Compter les caractères :");
console.log(countCharacters(exampleString)); // 19

console.log("Mettre les mots en majuscule :");
console.log(capitalizeWords(exampleString)); // "Bonjour Tout Le Monde"
