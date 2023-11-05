// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa"
module.exports = function formaterDate(date) {
  let jour = date.getDate().toString().padStart(2, "0");
  let mois = (date.getMonth() + 1).toString().padStart(2, "0"); 
  // 'date.getMonth()' renvoie le mois (de 0 pour janvier à 11 pour décembre) de l'objet Date.
  // On ajoute 1 pour obtenir le mois de 1 à 12.
  let année = date.getFullYear().toString();
  return `${jour}/${mois}/${année}`;
};
