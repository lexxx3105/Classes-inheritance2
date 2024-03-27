export default class Character {
    constructor(name) {
      this.setName(name);
      this.type = this.constructor.name;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.deffence = 0;
    }
  
    setName(name) {
      if (!name) {
        throw new Error('Ошибка: Параметр name не задан!');
      }
  
      const trimedName = name.trim();
  
      if (trimedName.length === 1 || trimedName.length > 10) {
        throw new Error(
          'Ошибка: Параметр name должен содержать от 2 до 10 символов!',
        );
      }
  
      this.name = trimedName;
    }
  
    levelUp() {
      if (this.health < 1) {
        throw new Error('Ошибка: Нельзя повысить левел умершего!');
      }
  
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.deffence *= 1.2;
    }
  
    damage(points) {
      if (this.health < 0) {
        return;
      }
  
      this.health -= points * (1 - this.defence / 100);
    }
  }