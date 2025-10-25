-- MariaDB Schema für Ondiffoline Bewertungen
-- Erstelle die Datenbank falls sie nicht existiert
CREATE DATABASE IF NOT EXISTS ondiffoline CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE ondiffoline;

-- Tabelle für Bewertungen
CREATE TABLE IF NOT EXISTS reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    rating TINYINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    service VARCHAR(100) NOT NULL,
    approved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_approved (approved),
    INDEX idx_rating (rating),
    INDEX idx_created_at (created_at)
);

-- Beispiel-Bewertungen einfügen
INSERT INTO reviews (name, rating, comment, service, approved) VALUES
('Maria Schmidt', 5, 'Sehr professionelle Reinigung! Das Team war pünktlich und gründlich. Kann ich nur weiterempfehlen.', 'Büroreinigung', TRUE),
('Thomas Weber', 5, 'Exzellente Arbeit! Unsere Praxis ist immer perfekt sauber. Sehr zuverlässig und freundlich.', 'Praxisreinigung', TRUE),
('Anna Müller', 4, 'Gute Qualität und faire Preise. Das Team ist sehr zuverlässig und arbeitet gründlich.', 'Grundreinigung', TRUE),
('Peter Klein', 5, 'Fantastischer Service! Schnell, gründlich und sehr freundlich. Definitiv wieder!', 'Fensterreinigung', TRUE),
('Lisa Hoffmann', 5, 'Sehr zufrieden mit der Reinigung unseres Restaurants. Hygienisch und professionell.', 'Gastronomie-Reinigung', TRUE),
('Michael Bauer', 4, 'Gute Arbeit, pünktlich und sauber. Das Team ist sehr professionell.', 'Unterhaltsreinigung', TRUE),
('Sabine Wagner', 5, 'Perfekte Reinigung! Sehr zuverlässig und das Ergebnis ist immer top.', 'Treppenhausreinigung', TRUE),
('Klaus Richter', 5, 'Ausgezeichneter Service! Sehr gründlich und das Team ist sehr freundlich.', 'Event-Reinigung', TRUE);

-- Admin-Tabelle für die Verwaltung
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Standard Admin-User (Passwort: admin123 - sollte geändert werden!)
INSERT IGNORE INTO admin_users (username, password_hash, email) VALUES
('admin', '$2b$10$rQZ8K9mN2pL3oI4uY5vW6eR7tY8uI9oP0aS1dF2gH3jK4lM5nB6cV7xZ8', 'admin@ondiffoline.de');
