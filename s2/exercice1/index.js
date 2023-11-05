module.exports = function dateIlYADixAns() {
  let dateAuj = new Date();
  let ilYaDixAn = new Date(
    dateAuj.setFullYear(dateAuj.getFullYear() - 10)
  );
  return ilYaDixAn.toISOString().split("T")[0]; // Retourne la date au format 'YYYY-MM-DD'
};
