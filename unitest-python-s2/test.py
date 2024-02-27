import unittest
from datetime import datetime, timedelta
from exercice1 import obtenir_date_10_ans_avant
from exercice2 import formater_date
from exercice3 import difference_entre_dates
from exercice4 import ajouter_jours
from exercice5 import est_bissextile
from exercice6 import premier_jour_du_mois
from exercice7 import dernier_jour_du_mois
from exercice8 import formater_duree
from exercice9 import plages_se_chevauchent
from exercice10 import calculer_age

class TestObtenirDate10AnsAvant(unittest.TestCase):

    def test_obtenir_date_10_ans_avant(self):
        # Obtenir la date d'aujourd'hui
        date_aujourdhui = datetime.now()

        # Calculer la date d'il y a 10 ans
        date_attendue = date_aujourdhui - timedelta(days=10*365)

        # Obtenir la date d'il y a 10 ans à partir de la fonction
        date_calculée = obtenir_date_10_ans_avant()

        # Vérifier si la date calculée est égale à la date attendue
        self.assertEqual(date_calculée, date_attendue)


class TestFormaterDate(unittest.TestCase):

    def test_formater_date(self):
        # Créer une date pour le 15 mars 2023
        date_test = datetime(2023, 3, 15)
        
        # Formater la date
        date_formatee = formater_date(date_test)
        
        # Vérifier si la date formatée est correcte
        self.assertEqual(date_formatee, "15/03/2023")


class TestDifferenceEntreDates(unittest.TestCase):

    def test_difference_entre_dates(self):
        # Créer deux dates pour tester
        date1 = datetime(2023, 3, 15)
        date2 = datetime(2023, 4, 1)
        
        # Calculer la différence en jours entre les deux dates
        difference = difference_entre_dates(date1, date2)
        
        # Vérifier si la différence calculée est correcte
        self.assertEqual(difference, 17)


class TestAjouterJours(unittest.TestCase):

    def test_ajouter_jours(self):
        # Créer une date pour le 15 mars 2023
        date_test = datetime(2023, 3, 15)
        
        # Ajouter 5 jours à la date
        nouvelle_date = ajouter_jours(date_test, 5)
        
        # Vérifier si la nouvelle date est correcte
        self.assertEqual(nouvelle_date, datetime(2023, 3, 20))

class TestEstBissextile(unittest.TestCase):

    def test_est_bissextile(self):
        # Tester une année bissextile
        self.assertTrue(est_bissextile(2000))
        self.assertTrue(est_bissextile(2004))
        
        # Tester une année non bissextile
        self.assertFalse(est_bissextile(1900))
        self.assertFalse(est_bissextile(2001))
        
        # Tester une année bissextile non divisible par 400
        self.assertFalse(est_bissextile(1800))

class TestPremierJourDuMois(unittest.TestCase):

    def test_premier_jour_du_mois(self):
        # Créer une date pour tester
        date_test = datetime(2023, 3, 15)
        
        # Obtenir le premier jour du mois de la date
        premier_jour = premier_jour_du_mois(date_test)
        
        # Vérifier si le premier jour est correct
        self.assertEqual(premier_jour, datetime(2023, 3, 1))

class TestDernierJourDuMois(unittest.TestCase):

    def test_dernier_jour_du_mois(self):
        # Créer une date pour tester
        date_test = datetime(2023, 3, 15)
        
        # Obtenir le dernier jour du mois de la date
        dernier_jour = dernier_jour_du_mois(date_test)
        
        # Vérifier si le dernier jour est correct
        self.assertEqual(dernier_jour, datetime(2023, 3, 31))

class TestFormaterDuree(unittest.TestCase):

    def test_formater_duree(self):
        # Tester une durée de 90 minutes
        self.assertEqual(formater_duree(90), "1 heures et 30 minutes")
        
        # Tester une durée de 60 minutes
        self.assertEqual(formater_duree(60), "1 heures")
        
        # Tester une durée de 30 minutes
        self.assertEqual(formater_duree(30), "30 minutes")
        
        # Tester une durée de 0 minutes
        self.assertEqual(formater_duree(0), "0 minutes")


class TestPlagesSeChevauchent(unittest.TestCase):

    def test_plages_se_chevauchent(self):
        # Tester des plages de dates qui se chevauchent
        self.assertTrue(plages_se_chevauchent(datetime(2023, 3, 10), datetime(2023, 3, 20),
                                               datetime(2023, 3, 15), datetime(2023, 3, 25)))
        
        # Tester des plages de dates qui ne se chevauchent pas
        self.assertFalse(plages_se_chevauchent(datetime(2023, 3, 10), datetime(2023, 3, 20),
                                                datetime(2023, 3, 25), datetime(2023, 3, 30)))
        
class TestCalculerAge(unittest.TestCase):

    def test_calculer_age(self):
        # Tester avec une date de naissance équivalente à l'âge actuel
        self.assertEqual(calculer_age(datetime(2014, 2, 27)), 10)
        
        # Tester avec une date de naissance équivalente à l'âge précédent
        self.assertEqual(calculer_age(datetime(2014, 2, 28)), 9)
        
        # Tester avec une date de naissance équivalente à l'âge suivant
        self.assertEqual(calculer_age(datetime(2014, 2, 26)), 10)   
        
             
if __name__ == '__main__':
    unittest.main()
