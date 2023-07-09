
# Task CRUD API with nodejs and Framework Serverless

Ceci est un projet d'API de gestion des tâches (Task CRUD API) développé en utilisant le framework Serverless. Cette API permet de créer, lire, mettre à jour et supprimer des tâches.


## Configuration
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

- Node.js
- Serverless Framework
- AWS CLI (si vous prévoyez de déployer l'API sur AWS)


## Installation

- Clonez ce référentiel sur votre machine locale :

```bash
  git clonehttps://github.com/fouzo09/nodejs-api-with-serverless-framework.git api-crud
```

- Accédez au répertoire du projet :

```bash
  cd api-crud
```

- Installez les dépendances NPM :

```bash
  npm install
```

## Déploiement

- Assurez-vous d'avoir configuré les informations d'identification AWS sur votre système en utilisant la commande suivante : :

```bash
  aws configure
```

- Déployez l'API en utilisant Serverless Framework :

```bash
  serverless deploy
```
Cette commande va créer les ressources nécessaires sur AWS et déployer l'API.

## Utilisation de l'API

L'API expose les endpoints suivants :

- `GET /tasks` : Récupère toutes les tâches.
- `GET /tasks/{id}` : Récupère une tâche spécifique en utilisant l'ID de la tâche.
- `POST /tasks` : Crée une nouvelle tâche. Les données de la tâche doivent être fournies dans le corps de la requête.
- `PUT /tasks/{id}` : Met à jour une tâche existante en utilisant l'ID de la tâche. Les données de la tâche mise à jour doivent être fournies dans le corps de la requête.
- `DELETE /tasks/{id}` : Supprime une tâche spécifique en utilisant l'ID de la tâche.


## Tech Stack

NodeJS, Lambda, Serverless framework, Dynamo DB


## Auteur

- [@fouzo09](https://github.com/fouzo09)
