# Ondiffoline - MariaDB Integration

## Datenbank-Setup

### 1. MariaDB Installation
Stellen Sie sicher, dass MariaDB installiert und laufend ist.

### 2. Datenbank erstellen
```sql
-- Führen Sie das SQL-Schema aus
mysql -u root -p < database/schema.sql
```

### 3. Umgebungsvariablen konfigurieren
```bash
# Kopieren Sie die Beispiel-Datei
cp env.example .env.local

# Bearbeiten Sie die Datenbankverbindung
nano .env.local
```

### 4. Datenbankverbindung testen
```bash
# Starten Sie die Anwendung
npm run dev

# Die Bewertungen werden automatisch aus der Datenbank geladen
```

## API-Endpunkte

### GET /api/reviews
Lädt alle genehmigten Bewertungen aus der Datenbank.

**Response:**
```json
{
  "reviews": [
    {
      "id": 1,
      "name": "Maria Schmidt",
      "rating": 5,
      "comment": "Sehr professionelle Reinigung!",
      "service": "Büroreinigung",
      "date": "2024-01-15T00:00:00.000Z"
    }
  ]
}
```

### POST /api/reviews
Erstellt eine neue Bewertung (wird erst nach Genehmigung angezeigt).

**Request Body:**
```json
{
  "name": "Max Mustermann",
  "rating": 5,
  "comment": "Tolle Arbeit!",
  "service": "Fensterreinigung"
}
```

## Datenbank-Schema

### Tabelle: reviews
- `id` - Eindeutige ID (Auto-Increment)
- `name` - Name des Kunden
- `rating` - Bewertung (1-5 Sterne)
- `comment` - Bewertungstext
- `service` - Art der Dienstleistung
- `approved` - Genehmigungsstatus (boolean)
- `created_at` - Erstellungsdatum
- `updated_at` - Aktualisierungsdatum

### Tabelle: admin_users
- `id` - Eindeutige ID (Auto-Increment)
- `username` - Admin-Benutzername
- `password_hash` - Gehashtes Passwort
- `email` - Admin-E-Mail
- `created_at` - Erstellungsdatum

## Bewertungen verwalten

### Neue Bewertungen genehmigen
```sql
-- Alle ausstehenden Bewertungen anzeigen
SELECT * FROM reviews WHERE approved = 0;

-- Bewertung genehmigen
UPDATE reviews SET approved = 1 WHERE id = 1;

-- Bewertung ablehnen/löschen
DELETE FROM reviews WHERE id = 1;
```

### Bewertungen bearbeiten
```sql
-- Bewertungstext bearbeiten
UPDATE reviews SET comment = 'Neuer Text' WHERE id = 1;

-- Bewertung löschen
DELETE FROM reviews WHERE id = 1;
```

## Sicherheitshinweise

1. **Passwort ändern**: Ändern Sie das Standard-Admin-Passwort
2. **Datenbankzugriff**: Beschränken Sie den Datenbankzugriff auf die Anwendung
3. **Backup**: Erstellen Sie regelmäßige Backups der Datenbank
4. **Validierung**: Alle Eingaben werden serverseitig validiert

## Fehlerbehebung

### Verbindungsfehler
- Prüfen Sie die Datenbankverbindung in `.env.local`
- Stellen Sie sicher, dass MariaDB läuft
- Prüfen Sie Firewall-Einstellungen

### Leere Bewertungen
- Prüfen Sie, ob Bewertungen genehmigt sind (`approved = 1`)
- Prüfen Sie die API-Route `/api/reviews`
- Fallback-Daten werden angezeigt, wenn die Datenbank nicht erreichbar ist
