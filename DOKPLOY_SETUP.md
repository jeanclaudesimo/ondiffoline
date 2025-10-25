# Ondiffoline - Dokploy MariaDB Setup

## Dokploy MariaDB Installation

### 1. MariaDB Service in Dokploy erstellen

1. **Neuen Service erstellen**
   - Gehen Sie zu Ihrem Dokploy Dashboard
   - Klicken Sie auf "New Service"
   - Wählen Sie "Database" → "MariaDB"

2. **Service konfigurieren**
   ```
   Service Name: ondiffoline-mariadb
   Version: 10.11 (oder neueste stabile Version)
   Port: 3306
   ```

3. **Umgebungsvariablen setzen**
   ```
   MYSQL_ROOT_PASSWORD=your_secure_root_password
   MYSQL_DATABASE=ondiffoline
   MYSQL_USER=ondiffoline_user
   MYSQL_PASSWORD=your_secure_user_password
   ```

4. **Volumes hinzufügen**
   ```
   /var/lib/mysql → Persistent Storage
   ```

### 2. Datenbank-Schema einrichten

**Option A: Über Dokploy Terminal**
1. Gehen Sie zu Ihrem MariaDB Service
2. Klicken Sie auf "Terminal"
3. Verbinden Sie sich mit MariaDB:
   ```bash
   mysql -u root -p
   ```
4. Führen Sie das Schema aus:
   ```sql
   USE ondiffoline;
   SOURCE /path/to/schema.sql;
   ```

**Option B: Über phpMyAdmin (empfohlen)**
1. Installieren Sie phpMyAdmin als separaten Service
2. Verbinden Sie sich mit Ihren MariaDB-Credentials
3. Importieren Sie die `database/schema.sql` Datei

### 3. Next.js App konfigurieren

1. **Umgebungsvariablen in Dokploy setzen**
   ```
   DB_HOST=ondiffoline-mariadb.dokploy.internal
   DB_USER=ondiffoline_user
   DB_PASSWORD=your_secure_user_password
   DB_NAME=ondiffoline
   DB_PORT=3306
   ```

2. **Service-Verbindung**
   - Ihre Next.js App kann sich über den internen Service-Namen verbinden
   - `ondiffoline-mariadb.dokploy.internal` ist der interne Hostname

### 4. Externe Verbindung (optional)

Falls Sie von außerhalb auf die Datenbank zugreifen möchten:

1. **Port freigeben**
   - In Dokploy: Service → Settings → Ports
   - Port 3306 nach außen freigeben

2. **Firewall konfigurieren**
   ```bash
   # Nur von bestimmten IPs erlauben
   ufw allow from YOUR_IP to any port 3306
   ```

3. **Umgebungsvariablen anpassen**
   ```
   DB_HOST=your-server-ip
   DB_USER=ondiffoline_user
   DB_PASSWORD=your_secure_user_password
   DB_NAME=ondiffoline
   DB_PORT=3306
   ```

## Sicherheitshinweise für Dokploy

### 1. Passwörter
- Verwenden Sie starke Passwörter
- Ändern Sie Standard-Passwörter
- Verwenden Sie Dokploy's Secret Management

### 2. Netzwerk-Sicherheit
- Verwenden Sie interne Service-Namen
- Beschränken Sie externe Zugriffe
- Aktivieren Sie SSL/TLS für externe Verbindungen

### 3. Backups
- Konfigurieren Sie regelmäßige Backups
- Testen Sie Backup-Wiederherstellung
- Speichern Sie Backups extern

## Troubleshooting

### Verbindungsfehler
```bash
# Prüfen Sie den Service-Status
docker ps | grep mariadb

# Prüfen Sie die Logs
docker logs ondiffoline-mariadb

# Testen Sie die Verbindung
mysql -h ondiffoline-mariadb.dokploy.internal -u ondiffoline_user -p
```

### Performance-Optimierung
```sql
-- MariaDB Konfiguration für bessere Performance
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL max_connections = 100;
SET GLOBAL query_cache_size = 32M;
```

### Monitoring
- Verwenden Sie Dokploy's Monitoring-Dashboard
- Überwachen Sie CPU, RAM und Disk-Usage
- Setzen Sie Alerts für kritische Metriken

## Nützliche Dokploy-Features

### 1. Auto-Scaling
- Konfigurieren Sie Auto-Scaling basierend auf CPU/RAM
- Setzen Sie minimale und maximale Instanzen

### 2. Health Checks
- Konfigurieren Sie Health Checks für MariaDB
- Automatische Neustarts bei Problemen

### 3. Logs
- Zentrale Log-Verwaltung
- Log-Rotation und Archivierung
- Real-time Log-Viewing

### 4. Updates
- Automatische Security-Updates
- Rolling Updates ohne Downtime
- Rollback-Funktionalität
