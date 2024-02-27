from datetime import datetime, timedelta

def obtenir_date_10_ans_avant():
    # Obtenir la date d'aujourd'hui
    date_aujourdhui = datetime.now()

    # Soustraire 10 ans à la date d'aujourd'hui
    date_il_y_a_10_ans = date_aujourdhui - timedelta(days=10*365)

    return date_il_y_a_10_ans
