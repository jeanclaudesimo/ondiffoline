# Projet Next.js avec Docker

Un projet [Next.js](https://nextjs.org) prêt pour le déploiement sur Dokploy avec Docker.

## Prérequis

- Node.js 20+
- Docker (pour le développement local avec Docker)
- Un compte Dokploy pour le déploiement

## Développement local

### Sans Docker

Installer les dépendances et lancer le serveur de développement :

```bash
npm install
npm run dev ok
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Vous pouvez commencer à éditer la page en modifiant `app/page.tsx`. La page se met à jour automatiquement.

### Avec Docker

```bash
# Construire l'image Docker
docker build -t my-nextjs-app .

# Lancer le conteneur
docker run -p 3000:3000 my-nextjs-app
```

## Déploiement sur Dokploy

### Méthode 1 : Déploiement depuis un dépôt Git

1. Poussez votre code vers un dépôt Git (GitHub, GitLab, Bitbucket, etc.)
2. Connectez-vous à votre instance Dokploy
3. Créez un nouveau projet
4. Sélectionnez "Docker" ou "Git" comme source
5. Connectez votre dépôt Git
6. Dokploy détectera automatiquement le Dockerfile
7. Configurez les variables d'environnement si nécessaire
8. Cliquez sur "Deploy"

### Méthode 2 : Configuration manuelle

Si vous déployez manuellement, assurez-vous que :
- Le Dockerfile est à la racine du projet
- Le port 3000 est exposé
- Les variables d'environnement sont configurées dans Dokploy

### Variables d'environnement (optionnel)

Ajoutez vos variables d'environnement dans l'interface Dokploy :

```env
NEXT_PUBLIC_API_URL=https://api.example.com
# Ajoutez d'autres variables selon vos besoins
```

## Caractéristiques du Dockerfile

- **Multi-stage build** : Optimise la taille de l'image finale
- **Image Alpine** : Image de base légère (Node.js 20)
- **Mode standalone** : Configuration optimisée pour la production
- **Utilisateur non-root** : Sécurité renforcée
- **Port 3000** : Port par défaut exposé

## Scripts disponibles

```bash
npm run dev      # Développement avec hot-reload
npm run build    # Build de production
npm run start    # Démarrer en production (après build)
npm run lint     # Vérification du code
```

## Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Docker** - Conteneurisation

## En savoir plus

- [Next.js Documentation](https://nextjs.org/docs) - Fonctionnalités et API Next.js
- [Learn Next.js](https://nextjs.org/learn) - Tutoriel interactif Next.js
- [Dokploy Documentation](https://docs.dokploy.com) - Documentation Dokploy

Ce projet utilise [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) pour optimiser automatiquement la police [Geist](https://vercel.com/font).
