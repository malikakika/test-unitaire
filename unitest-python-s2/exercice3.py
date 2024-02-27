from datetime import datetime

def difference_entre_dates(date1, date2):
    # Calculer la différence entre les deux dates
    difference = date2 - date1
    
    # Extraire le nombre de jours de la différence
    difference_en_jours = difference.days
    
    return difference_en_jours
