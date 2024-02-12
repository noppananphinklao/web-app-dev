// var generateName = require('sillyname');
import  generateName from "sillyname";
import generateSuperHerosName from "superheroes";

var superHerosName = generateSuperHerosName.random();

console.log(`I am ${superHerosName}.`)