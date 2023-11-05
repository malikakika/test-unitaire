// Exercice 3: Multiplication de deux nombres

module.exports = function multiplication(a, b) {
    return isValidNumber(a) && isValidNumber(b) ? a * b : 'Veuillez entrer des nombres valides';
};

function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
