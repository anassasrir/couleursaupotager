# Couleurs au potager

Bienvenue sur **Couleurs au potager**, un espace numérique personnel dédié à la passion du jardinage, à la prise de notes de culture et à la planification saisonnière. Ce projet est une application web moderne construite avec l'excellence technique comme priorité.

## Vision du Projet

L'objectif est de fournir une plateforme fluide et performante pour :
- **Blog** : Partager des articles et des retours d'expérience sur le potager.
- **Notes** : Capturer des idées et des observations rapides au fil des saisons.
- **Calendrier** : Planifier les semis, les plantations et les récoltes de manière interactive.

## Stack Technique

Le projet repose sur une architecture robuste et moderne :

- **Framework** : [Next.js 15+](https://nextjs.org/) (App Router) pour le rendu hybride (SSR/Static).
- **Langage** : [TypeScript](https://www.typescriptlang.org/) avec typage strict.
- **Style** : [Tailwind CSS](https://tailwindcss.com/) pour une interface responsive et élégante.
- **Base de données** : [PostgreSQL](https://www.postgresql.org/) hébergé sur [Supabase](https://supabase.com/).
- **ORM** : [Prisma 6](https://www.prisma.io/) pour la gestion du schéma et la sécurité des types.
- **Tests** : [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- **CI/CD** : [GitHub Actions](https://github.com/features/actions) pour la validation et [Vercel](https://vercel.com/) pour le déploiement.
- **Gestionnaire de paquets** : [pnpm](https://pnpm.io/) (v11+).

---

## Installation et Développement Local

### Prérequis
- Node.js v22.13.0 ou supérieur.
- pnpm v11.0.8 ou supérieur.
- Une instance PostgreSQL (locale ou Supabase).

### Configuration Initiale

1. **Cloner le dépôt** :
   ```bash
   git clone git@github.com:anassasrir/couleursaupotager.git
   cd couleursaupotager
   ```

2. **Installer les dépendances** :
   ```bash
   pnpm install
   ```

3. **Variables d'environnement** :
   Créez un fichier `.env` à la racine du projet et ajoutez votre URL de base de données :
   ```env
   DATABASE_URL="postgresql://user:password@host:port/postgres?pgbouncer=true"
   ```

4. **Initialiser la base de données** :
   ```bash
   npx prisma generate
   npx prisma db push
   ```

### Commandes Utiles

| Commande | Description |
| :--- | :--- |
| `pnpm dev` | Lance le serveur de développement sur [http://localhost:3000](http://localhost:3000) |
| `pnpm build` | Compile l'application pour la production |
| `pnpm start` | Lance l'application compilée localement |
| `pnpm lint` | Vérifie la qualité du code avec ESLint |
| `pnpm test` | Exécute les tests unitaires via Vitest |
| `pnpm test:coverage` | Génère un rapport de couverture de tests |
| `pnpm type-check` | Valide l'intégrité des types TypeScript |
| `pnpm audit` | Analyse les vulnérabilités de sécurité des dépendances |
| `npx prisma studio` | Ouvre l'interface graphique de gestion des données (localhost:5555) |

---

## Gestion de la Base de Données

Toute modification de la structure des données doit passer par le fichier `prisma/schema.prisma`. 

1. Modifiez le schéma.
2. Synchronisez avec la base de données : `npx prisma db push`.
3. Régénérez le client TypeScript : `npx prisma generate`.

---

## Processus de Déploiement

### Déploiement sur Vercel
Le projet est configuré pour un déploiement automatique sur Vercel à chaque merge sur la branche `main`.

**Configuration requise sur Vercel** :
- **Framework Preset** : Next.js.
- **Build Command** : `pnpm build`.
- **Install Command** : `pnpm install`.
- **Environment Variables** : Ajouter `DATABASE_URL`.

### Pipeline CI (GitHub Actions)
Chaque Pull Request déclenche automatiquement une pipeline de validation qui effectue :
1. L'installation des dépendances.
2. L'audit de sécurité.
3. Le linting.
4. La vérification des types.
5. L'exécution des tests.
6. La validation du build Next.js.

---

## Workflow de Développement

Nous suivons une méthodologie **Issue-Driven Development** :

1. **Ticket** : Création d'un ticket GitHub Issue pour chaque tâche.
2. **Branche** : Création d'une branche dédiée `type/description-courte`.
3. **Développement & Tests** : Développement local avec validation systématique des tests.
4. **Validation (QA)** : Utilisation de l'agent `@qa-committer` pour vérifier le code avant commit.
5. **Pull Request** : Création d'une PR vers `main` incluant la mention `Closes #XX`.
6. **Merge** : Déploiement automatique après validation de la PR.

---

## Architecture des Dossiers

- `src/app` : Routes et pages de l'application (Next.js App Router).
- `src/components/ui` : Composants atomiques du Design System (agnostiques du métier).
- `src/components/layout` : Structure globale (Navbar, Footer).
- `src/lib` : Utilitaires et configuration (Prisma, Actions).
- `prisma/` : Schéma et migrations de la base de données.
- `docs/` : Documentation détaillée et cahier des charges.
- `.github/workflows` : Configuration de la CI.
