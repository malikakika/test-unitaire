from datetime import datetime, timedelta

def ajouter_jours(date, jours):
    # Ajouter le nombre de jours à la date donnée
    nouvelle_date = date + timedelta(days=jours)
    
    return nouvelle_date
