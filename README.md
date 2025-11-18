# Plurivers

Plurivers est un dictionnaire du post‑développement à composer, mettre en page et publier ; du mobile au A4, de l’écran au papier.

https://radicalweb.design/projets/plurivers/

## Changelog

### Page d’accueil / index
Insertion de la citation initiale. Insertion d’une feuille de style compplémentaire dédiée à la page d’accueil.

### Version imprimable
Une feuille de style dédiée à l’impression (`css/print.css`) est associée à chaque page.

### Préface, postface, crédits
L’ensemble des liens vers les articles d’intro, de postface et de crédits est fonctionnel.

### Typographie 
Changement de caractère typo pour la démo : passage à une fonte variable.

### Images
Ajout du dossier des images originales pour référence. Les légendes sont accessibles dans le fichier `images/captions.md`.

### Mode sombre / clair
Gestion du mode sombre / clair : ajout d’une balise `<meta name="color-scheme" content="light dark">`, d’un script “bloquant” ( dans le `<head>`), d’un appel de script avant `</body>` et de variables de couleurs dans `style.css`.

Les couleurs (texte et arrière plan) sont modifiées, et la graisse de la fonte variable est également ajustée.

### Navigation au sein des articles
Ajout d’une navigation article précédent / article aléatoire / article suivant en pied de page d’article : 
```html
<nav class="articles-prev-next">
  <a class="prev" href="#"><span>←</span> Précédent</a>
  <a class="random" href="#">Article au hasard</a>
  <a class="next" href="#">Suivant <span>→</span></a>
</nav>
```
### Tags
Insertion d’une feuille de style compplémentaire dédiée à la page de tags.

Développement de la fonctionnalité de filtrage par tag (voir `assets/js/tags.js`). Les articles de la liste sont cachés par défaut ; au click sur un mot clé, le `hash` de l’URL est changé, les articles contenant une `class` correspondante au `hash` sont affichés, et le mot-clé correspondant est marqué comme `active`.

Le texte par défaut (“Aucun mot clé sélectionné”) est caché en CSS si un tag est sélectionné.

### Mal-développement 
Cet article comprend un tableau. Un exemple de mise en forme est ajouté dans `style.css`.