import Character from './basic';

export default class Undead extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.deffence = 25;
  }
}