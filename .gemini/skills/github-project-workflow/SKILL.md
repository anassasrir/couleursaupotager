---
name: github-project-workflow
description: Gère le flux de travail strict basé sur les tickets GitHub et les Pull Requests.
---

# GitHub Project Workflow

Vous devez suivre ce processus systématiquement avant d'entamer tout travail de développement :

## 1. Vérification de la Branche
- Exécutez `git branch --show-current`.
- Si vous êtes sur `main` : **ARRÊT IMMÉDIAT**. Passez à l'étape 2.
- Si vous êtes sur une branche autre que `main` : Vérifiez que le nom de la branche correspond à une tâche en cours.

## 2. Vérification du Ticket (si sur `main`)
- Demandez à l'utilisateur : "Une branche existe-t-elle déjà pour ce travail ?"
- **Si OUI** : Demandez le nom de la branche et effectuez un `git pull` suivi d'un `git checkout <branche>`.
- **Si NON** : Demandez : "Un ticket GitHub est-il déjà créé pour cette tâche ?"
    - **Si OUI** : Demandez à l'utilisateur de créer la branche depuis le ticket sur GitHub, puis faites un `git fetch` et `git checkout`.
    - **Si NON** : Générez le contenu d'un ticket en Markdown (basé sur le modèle des Milestone 1-6) et demandez à l'utilisateur de le créer dans le GitHub Project. **Ne commencez pas le code tant que le ticket n'est pas créé.**

## 3. Template de Ticket (Modèle)
Titre : `type: description courte`
## Objectif
[Description de la valeur ajoutée]
## Tâches
- [ ] Tâche 1
- [ ] Tâche 2
## Critères d'acceptation
- [ ] Critère 1
- [ ] Critère 2

## Nom de branche suggéré
`type/description-courte` (ex: `chore/workflow-setup` ou `feat/blog-list`)

## 4. Liaison et Clôture (Pull Request)
- Pour chaque PR, la description DOIT inclure `Closes #XX` (où XX est le numéro du ticket).
- Cela permet :
    1. La fermeture automatique du ticket au merge.
    2. La liaison correcte dans le GitHub Project (passage auto à "Done").
    3. Une meilleure traçabilité pour la génération du Changelog.
