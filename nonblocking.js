/**
 * Created by jamie on 2016-09-07.
 */
//link o the filesystem library
var fs = require('fs');

//load food asyncronously
var food = fs.readFile('food.txt', 'utf8', function(err, food){
    if (err) {
        console.log(err);
    }
    console.log(food);
    console.log('DRINKS:');
});

console.log('FOOD:');

//load drinks asyncronously
var drinks = fs.readFile('drinks.txt', 'utf8', function(err, drinks){
    console.log(drinks);
});

