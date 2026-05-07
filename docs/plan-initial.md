Plan de Développement : Couleurs au potagerPlan de Développement : Couleurs au potager

1. Objectif
   Créer "Couleurs au potager", un espace en ligne comprenant un blog, un système de prise de notes et un calendrier
   interactif. Le projet doit rester gratuit à l'hébergement et à l'utilisation, tout en permettant une gestion dynamique
   des contenus.

2. Stack Technique (Choisie)

- Framework : Next.js (App Router) avec TypeScript pour sa robustesse et ses performances.
- Style : Tailwind CSS pour un design rapide et responsive.
- Base de données : Supabase (ou Neon). Ce sont des bases PostgreSQL avec un excellent plan gratuit. Nous utiliserons
  Prisma (ou Drizzle) comme ORM pour interagir facilement avec la base de données depuis Next.js.
- Déploiement : Vercel. C'est l'hébergeur naturel de Next.js, 100% gratuit pour les projets personnels, gérant
  nativement les API et le rendu côté serveur nécessaires pour éditer vos notes et votre calendrier.

3. Architecture des Données
   La base de données contiendra (au minimum) trois tables :
1. Articles (Blog) : Titre, contenu (Markdown/Rich Text), date de publication, statut (brouillon/publié).
1. Notes : Titre, contenu, date de création/modification.
1. Événements (Calendrier) : Titre, date de début, date de fin, description.

Note : À l'avenir, une simple authentification (via NextAuth ou Supabase Auth) pourra être ajoutée pour protéger la
modification de vos notes et de votre calendrier, mais nous commencerons par l'architecture de base.

4. Étapes d'Implémentation
   Phase 1 : Initialisation

- Créer le projet Next.js avec TypeScript et Tailwind CSS.
- Nettoyer les fichiers de base et mettre en place la structure de l'application (dossiers app, components, lib).

Phase 2 : Base de données

- Créer un projet gratuit sur Supabase (ou Neon).
- Configurer Prisma ORM dans le projet Next.js.
- Créer le schéma de la base de données (Articles, Notes, Événements) et générer le client Prisma.

Phase 3 : Développement des Fonctionnalités

- Blog : Page d'accueil listant les articles, page de lecture d'un article.
- Notes : Interface pour lister, ajouter et éditer des notes (via Next.js Server Actions).
- Calendrier : Vue mensuelle avec possibilité d'ajouter des dates importantes.

Phase 4 : Déploiement

- Pousser le code sur GitHub.
- Connecter le dépôt à Vercel.
- Configurer les variables d'environnement (URL de la base de données) sur Vercel.

5. Alternatives considérées

- GitHub Pages + Fichiers Locaux : Écarté car cela ne permet pas de modifier facilement les notes et le calendrier
  depuis le site lui-même sans faire de "commits" de code. Vercel + DB offre une vraie expérience de gestion de
  contenu.
