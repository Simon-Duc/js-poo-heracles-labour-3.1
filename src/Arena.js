/*> Une meilleure solution est de créer une nouvelle classe `Arena` qui contiendrait tous les `Fighter` ainsi que des méthodes pour les manipuler (les faire se combattre, les déplacer dans l'arène, etc.). De plus, cette arène peut servir de support pour la mise en place d'une carte sur laquelle placer les `Fighter` et ajouter ainsi du positionnement au gameplay de notre jeu.

- Créé une class `Arena` contenant les propriétés `monsters` (un tableau d'objets `Monster`) et `hero` (un objet `Hero`). Par simplification, on partira du principe que nous avons forcément un unique héro dans une arène et un ou plusieurs monstres.
Créé également un `constructor()` qui prendra en paramètre un héros et un tableau de monstres. Ajoute également une propriété `size` (integer avec la valeur 10 par défaut) qui indiquera la taille de l'arène.
N'oublie pas ensuite de l'ajouter en bas de fichier *index.html* avec les autres fichiers de POO*/

class Arena {
  constructor(Hero, [Monster1, Monster2, Monster3]) {
    this.hero = Hero;
    this.monsters = [Monster1, Monster2, Monster3];
    this.size = 10;
  }
}



