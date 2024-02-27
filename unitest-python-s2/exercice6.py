from datetime import datetime

def premier_jour_du_mois(date):
    # Créer une nouvelle date avec le même mois mais jour 1
    premier_jour = datetime(date.year, date.month, 1)
    
    return premier_jour
