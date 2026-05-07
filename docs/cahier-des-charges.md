# Cahier des Charges : Couleurs au potager

## 1. Objectif et Vision
Créer "Couleurs au potager", un espace en ligne comprenant un blog, un système de prise de notes et un calendrier interactif. 
Le projet vise l'excellence technique avec une architecture évolutive (prêt pour un Design System personnalisable), une qualité de code irréprochable et un coût d'hébergement/utilisation nul.

## 2. Stack Technique
*   **Framework :** Next.js (App Router) avec TypeScript (typage strict exigé).
*   **Gestionnaire de paquets :** `pnpm` (avec vérification de sécurité régulière via `pnpm audit`).
*   **Style & UI :** Tailwind CSS. L'architecture des composants doit être agnostique (séparation de la logique et de la vue) pour permettre un changement facile de système de design dans le futur.
*   **Base de données :** Supabase (PostgreSQL gratuit) avec Prisma comme ORM.
*   **Déploiement :** Vercel (100% gratuit, gestion native Next.js).
*   **Qualité de code & Tests :**
    *   ESLint (configuration stricte) et Prettier.
    *   Validation continue du typage TypeScript (`tsc --noEmit`).
    *   **Tests Unitaires :** Obligatoires pour chaque nouveau composant (avec Vitest + React Testing Library).
    *   **Tests E2E (Futur) :** Préparation de l'architecture pour une intégration future de Playwright.

## 3. Méthodologie et Workflow
*   **Commits Granulaires :** Chaque "Milestone" ou étape logique fonctionnelle ET testée fera l'objet d'un commit propre et descriptif.
*   **Refactoring Continu :** Le code doit être constamment refactorisé pour rester "Clean", DRY (Don't Repeat Yourself) et modulaire.
*   **Validation :** Exécution systématique du linter, du typage, des tests et des audits avant chaque validation de fonctionnalité.
*   **Git :** Branche principale `main`. Remote : `git@github.com:anassasrir/couleursaupotager.git`.

## 4. Architecture des Données (V1)
1.  **Articles (Blog) :** Titre, slug, contenu, date de publication, statut.
2.  **Notes :** Titre, contenu, date de création/modification.
3.  **Événements (Calendrier) :** Titre, date début/fin, description.
*(Une authentification basique sera ajoutée plus tard pour protéger la création/modification)*

## 5. Étapes d'Implémentation (Milestones)

**Milestone 1 : Initialisation & Socle Qualité (TERMINÉ)**
*   Init Next.js + TS + Tailwind avec `pnpm`.
*   Configuration stricte de TS, ESLint et Prettier.
*   Mise en place de l'environnement de Test Unitaire (Vitest).
*   Validation des scripts locaux (`pnpm audit`, lint, types, tests).
*   Création des premiers composants UI (Button).

**Milestone 2 : Base de données & Modèles**
*   Setup projet Supabase et Prisma.
*   Création des schémas de base de données.

**Milestone 3 : Design System Base & UI Communs**
*   Création des composants UI de base (Boutons, Layouts) avec leurs tests unitaires associés.

**Milestone 4 : Fonctionnalité Blog**
*   Création des pages et composants liés aux articles + Tests.

**Milestone 5 : Notes & Calendrier**
*   Création des interfaces et de la logique (Server Actions) + Tests.

**Milestone 6 : Déploiement**
*   Déploiement sur Vercel et configuration des variables d'environnement.
