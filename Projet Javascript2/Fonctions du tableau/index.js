// Fonction pour rechercher la valeur maximale dans un tableau
function findMax(arr) {
    return Math.max(...arr);
}

// Fonction pour rechercher la valeur minimale dans un tableau
function findMin(arr) {
    return Math.min(...arr);
}

// Fonction pour calculer la somme de tous les éléments d'un tableau
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// Fonction pour filtrer les éléments d'un tableau en fonction d'une condition donnée
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Exemples d'utilisation
let exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Valeur maximale :");
console.log(findMax(exampleArray)); // 10

console.log("Valeur minimale :");
console.log(findMin(exampleArray)); // 1

console.log("Somme du tableau :");
console.log(sumArray(exampleArray)); // 55

console.log("Filtrer les éléments pairs :");
console.log(filterArray(exampleArray, num => num % 2 === 0)); // [2, 4, 6, 8, 10]
