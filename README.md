# blogging-app-react


## Objectif du Sprint
Notre objectif est de créer une application de blog dynamique sur une seule page.

### React

React est une bibliothèque JavaScript front-end gratuite et open-source pour construire des interfaces utilisateur basées sur des composants UI. Elle est maintenue par Meta (anciennement Facebook) et une communauté de développeurs individuels et d'entreprises.


React est un outil formidable pour créer des applications web bien structurées, car vous pouvez construire des composants encapsulés qui gèrent leur propre état, puis les composer pour créer des interfaces utilisateur complexes. Étant donné que la logique des composants est écrite en JavaScript plutôt qu'en templates, vous pouvez facilement faire circuler des données riches dans votre application et maintenir l'état en dehors du DOM.

React permet de créer des interfaces utilisateur interactives sans effort. Concevez des vues simples pour chaque état de votre application, et React mettra à jour et affichera efficacement les composants appropriés lorsque vos données changeront.

Les vues déclaratives rendent votre code plus prévisible et plus facile à déboguer.

### Beaucoup à apprendre sur React
 #### JSX et syntaxe ES6
JSX est une extension syntaxique de JavaScript. Utilisée avec React pour décrire à quoi l'interface utilisateur devrait ressembler. JSX peut vous rappeler un langage de template, mais il bénéficie de toute la puissance de JavaScript.

JSX produit des "éléments" React. Nous explorerons comment les afficher dans le DOM dans la prochaine section. Ici, vous pouvez trouver les bases de JSX nécessaires pour commencer.

ES6 est plein de surprises, consultez ces deux aide-mémoire impressionnants ici pour en apprendre davantage sur la déstructuration, les modules ES6 et autres fonctionnalités d'ES6.


#### Penser en React
Vous devrez commencer à penser en React

   ### Votre Projet 
Installez vos dépendances en utilisant npm install, vérifiez vos scripts dans package.json, puis exécutez votre application .


L'application contient les composants suivants :

 * [ 1 ] - Composant App
Le composant principal de l'application, chargé d'organiser les composants et de configurer les routes.



 * [ 2 ] - AllPosts (TousLesArticles)
Un composant function qui est censé parcourir une collection de données de blog reçues via des props et afficher une liste de son composant enfant PostDetails

![alt text](./client/public/allposts.png)

* [ 3 ] - PostDetails (Détail d'un article)

Un composant function qui reçoit les données d'un article via les props et affiche son titre, son auteur et un aperçu de son contenu.

 * [ 4 ] - OnePost (UnArticle)
OnePost est un composant function simple qui affiche un article



 * [ 5 ] - CreatePost (CréerUnArticle)
Un composant function qui devrait avoir des champs permettant à l'utilisateur de publier des blogs

![alt text](./client/public/CreatePost.PNG)

 * [ 6 ] - Search (Recherche)
Un composant function qui contient des champs pour permettre à l'utilisateur de rechercher un blog
![alt text](./client/public/Search.PNG)


 ### Exigences de Base

* Utilisez vos données factices src/data/exampleBlogData.js pour afficher votre AllPosts, continuez à utiliser les props pour afficher un composant PostDetails pour chaque objet d'article des données factices.
 - Importez les données fournies.

 - Parcourez la collection d'articles avec map().

 - Affichez un composant PostDetails pour chaque article.

 - Transmettez les données de chaque article avec les props.

 - Ajoutez une propriété key unique à chaque élément généré.

* Faites en sorte que votre application affiche OnePost lorsque l'utilisateur clique sur le titre du blog
 
 - Utilisez React Router pour configurer la route permettant d'afficher un article.

 - Utilisez un identifiant pour retrouver l'article sélectionné.

 - Transmettez les données correspondantes au composant OnePost.

 - Affichez le titre, l'auteur et le contenu complet de l'article.

* Vous disposez d'un code de démarrage pour React Router. Complétez la configuration des routes de votre application.

Les routes à mettre en place sont :

- /posts : afficher tous les articles.

- /posts/:id : afficher le détail d'un article.

- /createPost : afficher le formulaire de création d'un article.


* Le formulaire doit contenir un champ pour le titre et un champ pour le contenu.

 - Utilisez useState pour gérer les valeurs des champs.

 - Utilisez value et onChange pour contrôler les champs du formulaire.

 - Le titre doit contenir au moins 3 caractères.

 - Le contenu doit contenir au moins 20 caractères.

 - Gérez la soumission du formulaire avec onSubmit.

 - Empêchez le rechargement de la page lors de la soumission.

 - Créez un nouvel objet représentant l'article.

 - Ajoutez le nouvel article à la liste en mettant à jour l'état React.

 - Videz les champs du formulaire après une publication réussie.


### Avancé

* Implémentez une fonctionnalité de recherche en temps réel dans votre application de blog.
    
  - Utilisez useState pour récupérer le texte saisi dans le champ de recherche.

  - Mettez à jour la recherche à chaque modification du champ.

  - Filtrez les articles en fonction de leur titre avec filter().

  -  Ignorez les différences entre majuscules et minuscules.

  - Affichez uniquement les articles correspondant à la recherche.

  - Affichez tous les articles lorsque le champ de recherche est vide.


