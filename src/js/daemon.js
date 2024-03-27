import Character from './basic';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.deffence = 40;
  }
}