def formater_duree(minutes):
    # Calculer le nombre d'heures et de minutes
    heures = minutes // 60
    minutes_restantes = minutes % 60
    
    # Formater la durée en heures et minutes
    if heures == 0:
        return f"{minutes_restantes} minutes"
    elif minutes_restantes == 0:
        return f"{heures} heures"
    else:
        return f"{heures} heures et {minutes_restantes} minutes"
