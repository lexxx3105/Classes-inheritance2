import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

describe.each([
  ['Bowerman', Bowerman, 25, 25],
  ['Swordsman', Swordsman, 40, 10],
  ['Magician', Magician, 10, 40],
  ['Undead', Undead, 25, 25],
  ['Zombie', Zombie, 40, 10],
  ['Daemon', Daemon, 10, 40],
])(
  'следует создать класс',
  (className, Class, attack, deffence) => {
    test('выдает ошибку при передаче пустого значения', () => {
      const error = () => new Class();
      expect(error).toThrow('Ошибка: Параметр name не задан!');
    });

    test('выдает ошибку при передаче значения меньше 2', () => {
      const error = () => new Class('1');
      expect(error).toThrow(
        'Ошибка: Параметр name должен содержать от 2 до 10 символов!',
      );
    });

    test('выдает ошибку при передаче значения, превышающего 10', () => {
      const error = () => new Class('12345678910');
      expect(error).toThrow(
        'Ошибка: Параметр name должен содержать от 2 до 10 символов!',
      );
    });

    test('обладать правильными свойствами', () => {
      const player = new Class('player');

      expect(player).toEqual({
        name: 'player',
        type: className,
        health: 100,
        level: 1,
        attack,
        deffence,
      });
    });

    test('levelUp метод существует и работает корректно', () => {
      const player = new Class('player');
      player.levelUp();
      delete player.name;
      delete player.type;

      expect(player).toEqual({
        health: 100,
        level: 2,
        attack: attack * 1.2,
        deffence: deffence * 1.2,
      });
    });

    test('levelUp метод выдает ошибку, когда работоспособность меньше 1', () => {
      const player = new Class('player');
      player.health = 0;
      const error = () => player.levelUp();

      expect(error).toThrow(
        'Ошибка: Нельзя повысить левел умершего!',
      );
    });

    test('damage метод существует и работает корректно', () => {
      const player = new Class('player');
      player.damage(50);

      expect(player.health).toBe(50 * (1 - player.defence / 100));
    });

    test('damage метод не работает, если здоровье меньше 0', () => {
      const player = new Class('player');
      player.health = -50;
      const { health } = player;
      player.damage(50);

      expect(player.health).toBe(health);
    });
  },
);