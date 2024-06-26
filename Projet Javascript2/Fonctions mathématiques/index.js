// Fonction pour calculer la factorielle d'un nombre
function factorial(num) {
    if (num < 0) return -1; // La factorielle n'est pas définie pour les nombres négatifs
    if (num === 0) return 1; // La factorielle de 0 est 1
    return num * factorial(num - 1);
}

// Fonction pour vérifier si un nombre est premier
function isPrime(num) {
    if (num <= 1) return false; // Les nombres <= 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fonction pour générer la séquence de Fibonacci jusqu'à un nombre donné de termes
function fibonacciSequence(terms) {
    if (terms <= 0) return []; // Pas de termes pour des nombres <= 0
    if (terms === 1) return [0]; // La séquence de Fibonacci pour 1 terme est [0]
    if (terms === 2) return [0, 1]; // La séquence de Fibonacci pour 2 termes est [0, 1]
    
    let sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Exemples d'utilisation
console.log("Factorielle de 5 :");
console.log(factorial(5)); // 120

console.log("Le nombre 7 est-il premier ?");
console.log(isPrime(7)); // true

console.log("Séquence de Fibonacci pour 10 termes :");
console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
