from datetime import datetime

def calculer_age(date_naissance):
    # Obtenir la date d'aujourd'hui
    date_aujourdhui = datetime.now()
    
    # Calculer l'âge en soustrayant l'année de naissance de l'année actuelle
    age = date_aujourdhui.year - date_naissance.year
    
    # Ajuster l'âge si la date de naissance n'est pas encore passée cette année
    if (date_naissance.month, date_naissance.day) > (date_aujourdhui.month, date_aujourdhui.day):
        age -= 1
    
    return age
