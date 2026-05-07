# Règles de Développement : Couleurs au potager

## 1. Flux de Travail (Workflows)
- **Systématique** : Avant de commencer toute tâche, activez et suivez scrupuleusement le skill `github-project-workflow`.
- **Branches** : Interdiction de travailler directement sur `main`. Toute modification doit passer par une branche dédiée et une Pull Request.
- **Tickets** : Chaque branche doit être liée à un ticket GitHub Issue. Si le ticket n'existe pas, générez-en le contenu d'abord.

## 2. Validation & Commits
- Pour toute validation finale et envoi de code, déléguez systématiquement la tâche au sub-agent `@qa-committer`.
- Pour toute modification de la structure de données ou problème de connexion à Supabase, déléguez la tâche au sub-agent `@db-expert`.
- Ne jamais forcer un commit (`--no-verify`) si les tests ou audits échouent.

## 3. Standards Techniques
- **pnpm** : Seul gestionnaire autorisé.
- **Tests** : Un composant = un fichier `.test.tsx` associé. Couverture maximale visée.
- **Types** : Aucun `any` autorisé sans justification exceptionnelle.
- **Design System** : Garder les composants UI dans `src/components/ui` agnostiques de la logique métier.

## 4. Documentation
- Maintenir à jour `docs/cahier-des-charges.md` à chaque Milestone.
- Documenter les décisions architecturales importantes dans des fichiers `.md` dans `docs/`.
