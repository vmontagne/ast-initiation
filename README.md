# Introduction à AST

## Pré-requis

avoir node >= v13 installé

## Exemple

Vous avez un exemple simple d'utilisation d'AST dans le fichier `simple.js`
Il parse un bout de code présent dans le fichier, met les noms de fonctions et de viables en camelCase puis l'affiche via console.log

## Objectif

Une implementation un peu plus poussée est disponnible dans le fichier `transformFiles.js`, elle prend tous les fichiers disponible dans le dossier `in` réalise un traitement à l'aide de la fonction `computeCode` et créer les fichier transformé dans le dossier `out`

Actuellement les noms de fonctions et de variables sont transformés en camelCase.

L'objectif est de transformer aussi les paramètres de fonctions

Pour explorer le code AST disponnible vous pouvez utiliser cet explorateur : https://astexplorer.net/, avec `javascript` comme language et `@babel/parser` comme parser.
