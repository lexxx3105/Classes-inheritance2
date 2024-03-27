import Bowerman from './bowerman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

console.log('app worked');

const bowerman = new Bowerman('player1');
const swordsman = new Swordsman('player2');
const magician = new Magician('player3');
const daemon = new Daemon('player4');
const undead = new Undead('player5');
const zombie = new Zombie('player6');

console.log(bowerman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);