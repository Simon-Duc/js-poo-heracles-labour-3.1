class Hero extends Fighter{
  constructor(name, strength, dexterity, image, x, y) {
    super(name, strength, dexterity, image, x ,y);
    this.weapon = null;
    this.shield = null;
  }

    /**
   * Calculate the value of the defense
   * @returns
   */
     getDamage() {
      return this.weapon ?
        this.strength + this.weapon.damage :
        this.strength;
    }
  
  
    /**
     * Calculate the value of the attack
     * @returns
     */
    getDefense() {
      return this.shield ?
        this.dexterity + this.shield.protection :
        this.dexterity;
    }
}
