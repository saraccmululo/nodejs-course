import generateName from "sillyName"
import {randomSuperhero} from 'superheroes';

var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

const superHeroeName=randomSuperhero();
console.log(`I am ${superHeroeName}!`)