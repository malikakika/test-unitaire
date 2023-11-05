// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
  const today = new Date();
  const birthDate = new Date(dateNaissance);
  let age = today.getFullYear() - birthDate.getFullYear();
  const t = today.getMonth() - birthDate.getMonth();

  if (t < 0 || (t === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};



