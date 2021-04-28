import sqlite3
import os




# file imports
import config

print(config.BASE_DIR)

connection = sqlite3.connect(os.path.join(config.BASE_DIR, 'app.db'))

cursor = connection.cursor()

cursor.execute("""
        DELETE FROM stock
""")



symbols = [
    
]