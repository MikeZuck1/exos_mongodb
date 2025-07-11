### 🔸 **Exercice 1 : Filtrage et tri d’utilisateurs actifs**

> **Contexte** : Tu as une collection `User` avec les champs suivants :
>
> * `name` (String)
> * `age` (Number)
> * `isActive` (Boolean)
> * `createdAt` (Date)

**Objectif** :
Crée une requête Mongoose qui retourne **les 10 derniers utilisateurs actifs**, triés du plus récent au plus ancien (selon `date`), et ne sélectionne que les champs `name` et `age`.

**Contraintes** :

* Utiliser au moins 3 méthodes de Query : un filtre (`where`, `equals`, etc.), un tri (`sort`) et une sélection (`select`).
* N’exécute pas la requête immédiatement : construis-la et garde-la comme `Query`.

---

### 🔸 **Exercice 2 : Utilisateurs par tranche d'âge avec pagination**

> **Contexte** : Tu veux construire une API qui retourne une liste paginée des utilisateurs âgés entre 20 et 35 ans.

**Objectif** :
Crée une requête qui filtre les utilisateurs dont l’âge est compris entre 20 et 35 inclus, trie les résultats par ordre alphabétique (`name`), et affiche les résultats paginés (par page de 5 utilisateurs).

**Contraintes** :

* Utilise les méthodes `gte`, `lte`, `sort`, `limit` et `skip`.
* Implémente la logique de pagination avec une variable `pageNumber` (par exemple `pageNumber = 2` doit ignorer les 5 premiers résultats).
* Ne retourne que les champs `name` et `age`.

---
