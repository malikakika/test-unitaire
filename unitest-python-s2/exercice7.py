from datetime import datetime, timedelta
import calendar

def dernier_jour_du_mois(date):
    # Obtenir le premier jour du mois suivant
    premier_jour_mois_suivant = datetime(date.year, date.month, 1) + timedelta(days=32)
    
    # Obtenir le dernier jour du mois actuel en soustrayant un jour au premier jour du mois suivant
    dernier_jour = premier_jour_mois_suivant - timedelta(days=premier_jour_mois_suivant.day)
    
    return dernier_jour
