def est_palindrome(chaine):
    chaine = chaine.lower()  # Convertir la chaîne en minuscules pour ignorer la casse
    chaine = chaine.replace(" ", "")  # Supprimer les espaces de la chaîne
    return chaine == chaine[::-1]  # Vérifier si la chaîne est égale à son inversion
