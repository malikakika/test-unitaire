import unittest
import math
from exercice1 import addition
from exercice2 import soustraction
from exercice3 import multiplication
from exercice4 import division
from exercice5 import factorielle
from exercice6 import est_pair
from exercice7 import celsius_en_fahrenheit
from exercice8 import aire_cercle
from exercice9 import est_palindrome
from exercice10 import pgcd

class TestAddition(unittest.TestCase):

    def test_addition(self):
        # Test de l'addition de deux nombres positifs
        self.assertEqual(addition(3, 5), 8)
        
        # Test de l'addition de deux nombres négatifs
        self.assertEqual(addition(-3, -5), -8)
        
        # Test de l'addition d'un nombre positif et d'un nombre négatif
        self.assertEqual(addition(3, -5), -2)
        
        # Test de l'addition de deux nombres à virgule flottante
        self.assertAlmostEqual(addition(3.5, 2.5), 6.0)
        
        # Test de l'addition de zéro avec un nombre
        self.assertEqual(addition(0, 7), 7)
        
        # Test de l'addition de zéro avec zéro
        self.assertEqual(addition(0, 0), 0)



class TestSoustraction(unittest.TestCase): 

    def test_soustraction(self):
        #Test de la soustraction de deux nombre positifs avec a>b 
        self.assertEqual (soustraction(6,3),3)
         #Test de la soustraction de deux nombre positifs avec a<b 
        self.assertEqual (soustraction(3,6),-3)
         #Test de la soustraction de deux nombre positifs avec a=b 
        self.assertEqual (soustraction(6,6),0)
         #Test de la soustraction de deux nombre positifs avec a<0
        self.assertEqual (soustraction(-6,3),-9)
          #Test de la soustraction de deux nombre positifs avec b<0
        self.assertEqual (soustraction(6,-3),9)
           #Test de la soustraction de deux nombre positifs avec a<0 et b<0
        self.assertEqual (soustraction(-6,-3),-3)

class TestMultiplication(unittest.TestCase):

    def test_multiplication(self):
    #Test de la multiplication avec a = 0
        self.assertEqual(multiplication(0,5),0)
    #Test de la multiplication avec b = 0
        self.assertEqual(multiplication(5,0),0)
    #Test de la multiplication avec a et b = 0
        self.assertEqual(multiplication(0,0),0)
    #Test de la multiplication avec a et b = 1
        self.assertEqual(multiplication(1,1),1)
    #Test de la multiplication avec a = 1
        self.assertEqual(multiplication(1,6),6)
    #Test de la multiplication avec b = 1
        self.assertEqual(multiplication(9,1),9)    
    #Test de la multiplication avec a<0 
        self.assertEqual(multiplication(-9,2),-18)
    #Test de la multiplication avec b<0 
        self.assertEqual(multiplication(9,-2),-18)
    #Test de la multiplication avec a et b<0  
        self.assertEqual(multiplication(-9,-2),18)



class TestDivision(unittest.TestCase):
    def test_division(self):
        # Test de la division de deux nombres positifs
        self.assertEqual(division(6, 3), 2)
        
        # Test de la division de deux nombres négatifs
        self.assertEqual(division(-6, -3), 2)
        
        # Test de la division d'un nombre positif et d'un nombre négatif
        self.assertEqual(division(6, -3), -2)
        
        # Test de la division de deux nombres à virgule flottante
        self.assertAlmostEqual(division(5.0, 2.0), 2.5)
        
        # Test de la division par zéro
        with self.assertRaises(ZeroDivisionError):
            division(5, 0)

class TestFactorielle(unittest.TestCase):

    def test_factorielle(self):
        # Test de la factorielle de 0
        self.assertEqual(factorielle(0), 1)
        
        # Test de la factorielle de 1
        self.assertEqual(factorielle(1), 1)
        
        # Test de la factorielle de 5
        self.assertEqual(factorielle(5), 120)
        
        # Test de la factorielle de 10
        self.assertEqual(factorielle(10), 3628800)
        
        # Test de la factorielle de nombres négatifs (doit lever une exception ValueError)
        with self.assertRaises(ValueError):
            factorielle(-5)      

class TestEstPair(unittest.TestCase):

    def test_est_pair(self):
        # Test d'un nombre pair
        self.assertTrue(est_pair(2))
        
        # Test d'un nombre impair
        self.assertFalse(est_pair(3))
        
        # Test d'un nombre négatif pair
        self.assertTrue(est_pair(-4))
        
        # Test d'un nombre négatif impair
        self.assertFalse(est_pair(-5))   

class TestConversionCelsiusFahrenheit(unittest.TestCase):

    def test_celsius_en_fahrenheit(self):
        # Test avec 0 degrés Celsius (point de congélation de l'eau)
        self.assertAlmostEqual(celsius_en_fahrenheit(0), 32)
        
        # Test avec 100 degrés Celsius (point d'ébullition de l'eau)
        self.assertAlmostEqual(celsius_en_fahrenheit(100), 212)
        
        # Test avec -40 degrés Celsius (valeurs égales en Fahrenheit)
        self.assertAlmostEqual(celsius_en_fahrenheit(-40), -40)
        
        # Test avec une température positive quelconque
        self.assertAlmostEqual(celsius_en_fahrenheit(20), 68)
        
        # Test avec une température négative quelconque
        self.assertAlmostEqual(celsius_en_fahrenheit(-10), 14)                      
      

class TestCalculAireCercle(unittest.TestCase):

    def test_aire_cercle(self):
        # Test avec un rayon de 1 unité
        self.assertAlmostEqual(aire_cercle(1), math.pi)
        
        # Test avec un rayon de 0 (doit retourner une aire de 0)
        self.assertAlmostEqual(aire_cercle(0), 0)
        
        # Test avec un rayon de 5 unités
        self.assertAlmostEqual(aire_cercle(5), 25 * math.pi)
        
        # Test avec un rayon négatif (doit lever une exception ValueError)
        with self.assertRaises(ValueError):
            aire_cercle(-2)



class TestVerificationPalindrome(unittest.TestCase):

    def test_est_palindrome(self):
        # Test avec un palindrome en minuscules
        self.assertTrue(est_palindrome("radar"))
        
        # Test avec un palindrome en majuscules
        self.assertTrue(est_palindrome("Eva, can I see bees in a cave?"))
        
        # Test avec une phrase non palindrome
        self.assertFalse(est_palindrome("Hello, world!"))
        
        # Test avec un palindrome numérique
        self.assertTrue(est_palindrome("12321"))
        
        # Test avec un mot non palindrome
        self.assertFalse(est_palindrome("python"))
class TestCalculPGCD(unittest.TestCase):

    def test_pgcd(self):
        # Test avec des nombres premiers entre eux
        self.assertEqual(pgcd(12, 35), 1)
        
        # Test avec des nombres ayant un facteur commun
        self.assertEqual(pgcd(24, 36), 12)
        
        # Test avec des nombres négatifs
        self.assertEqual(pgcd(-24, -36), 12)
        
        # Test avec un nombre nul
        self.assertEqual(pgcd(0, 5), 5)
        self.assertEqual(pgcd(5, 0), 5)
        self.assertEqual(pgcd(0, 0), 0)

if __name__ == '__main__':
    unittest.main()
