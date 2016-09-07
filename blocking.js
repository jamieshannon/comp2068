/**
 * Created by jamie on 2016-09-07.
 */
//link to nodes file system library
var fs = require('fs');

//open and read food list
var food = fs.readFileSync('food.txt', 'utf8');

//print food list
console.log('FOOD:');
console.log(food);

//ope and read drink list
var drinks = fs.readFileSync('drinks.txt', 'utf8');

//print drink list
console.log('DRINKS:');
console.log(drinks);