# README - Nouvelle Application HRnet en React

## Description
Ce projet consiste à créer une toute nouvelle application HRnet en utilisant React, en reproduisant les mêmes fonctionnalités que l'application HRnet existante. Au lieu de convertir l'application existante basée sur jQuery, nous avons choisi de partir de zéro pour bénéficier des avantages de React dès le début. Cette approche nous permettra de concevoir une application propre, performante et hautement maintenable.

## Installation
Pour commencer le projet, suivez les étapes suivantes :
1. Clonez le référentiel GitHub de ce projet sur votre système local.
2. Installez les dépendances nécessaires à l'aide de la commande :
```shell
npm install
```

## Plugins jQuery à Convertir

### 1. Sélecteurs de Date
- Description : Ce plugin jQuery est actuellement utilisé pour gérer la sélection de dates dans l'application HRnet. Il permet aux utilisateurs de choisir des dates dans un calendrier.
- Objectif : Convertir ce plugin jQuery en un composant React personnalisé qui offre une expérience de sélection de dates similaire tout en tirant parti des avantages de React.

### 2. Fenêtres Modales (jQuery.modal.js)
- Description : Le plugin jQuery.modal.js est utilisé pour afficher des fenêtres modales dans l'application HRnet, notamment pour les confirmations et les messages contextuels.
- Objectif : Créer un composant React personnalisé pour gérer l'affichage des fenêtres modales de manière similaire, en utilisant React pour une meilleure performance et une intégration fluide.

### 3. Menus Déroulants
- Description : Les menus déroulants actuels de l'application HRnet sont gérés par un plugin jQuery. Ils permettent la sélection d'options dans différents contextes de l'application.
- Objectif : Remplacer ce plugin jQuery par un composant React personnalisé qui offre la même fonctionnalité tout en étant optimisé pour React.

### 4. Plugin pour les Tables de Données
- Description : Le plugin jQuery actuel pour les tables de données permet d'afficher et de trier les données tabulaires dans HRnet.
- Objectif : Convertir ce plugin en un composant React personnalisé qui gère l'affichage et la manipulation des tables de données tout en exploitant les avantages de React.

## Plugin Choisi pour la Conversion en Bibliothèque React

### 5. [Plugin pour les Tables de Données]
- Description : Le plugin pour les tables de données actuel est utilisé dans l'application HRnet pour afficher et gérer les données tabulaires. Il offre des fonctionnalités telles que le tri, la pagination et la recherche dans les tableaux de données.
- Objectif : L'objectif de la conversion de ce plugin est de créer un composant React personnalisé qui permettra de gérer l'affichage et la manipulation des tables de données de manière plus efficace en utilisant les fonctionnalités de React. Cela permettra d'améliorer les performances et la maintenabilité de cette partie cruciale de l'application.

## Menu LIBRARY (Menu de Test Démonstratif)
Dans ce projet, nous avons créé une bibliothèque React réutilisable à partir du composant de la table de données (Plugin pour les Tables de Données). Cette bibliothèque a été placée dans un référentiel distinct pour permettre son utilisation dans d'autres projets React. Vous pouvez accéder à cette bibliothèque en utilisant le menu "LIBRARY".

### Installation de la Bibliothèque
Vous pouvez installer la bibliothèque de la table en utilisant npm (Node Package Manager) en exécutant la commande suivante :

1. **Installation** : Installez SuperTable en utilisant npm ou yarn.

```shell
npm i supertable-react-javascript
```

2. **Importation** : Importez la bibliothèque dans votre composant React.

```javascript
import SuperTable from "supertable-react-javascript";
```

3. **Personnalisation** : Pour personnaliser SuperTableReact, veuillez consulter la documentation de personnalisation pour plus de détails.

```shell
https://www.npmjs.com/package/supertable-react-javascript
```


## Technologies Utilisées
Voici les principales technologies et bibliothèques utilisées dans ce projet :
- React : Framework JavaScript pour la construction de l'interface utilisateur.
- Redux Toolkit : Bibliothèque Redux pour la gestion de l'état de l'application.
- React Router Dom : Bibliothèque pour la gestion des routes dans une application React.
- Axios : Bibliothèque pour effectuer des requêtes HTTP.
- Sass : Préprocesseur CSS pour la gestion des styles.
- JSON Server : Outil pour simuler une API REST en utilisant un fichier JSON.
- React Icons : Bibliothèque d'icônes pour React.
- Web Vitals : Outil pour mesurer les performances Web.

---
