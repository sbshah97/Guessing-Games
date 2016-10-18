# Number Guessing Game in JS

[![Latest Stable Version](https://poser.pugx.org/salman-bhai/Guessing-Games/v/stable)](https://packagist.org/packages/salman-bhai/Guessing-Games)
[![License](https://poser.pugx.org/salman-bhai/Guessing-Games/license)](https://packagist.org/packages/salman-bhai/Guessing-Games) [![Total Downloads](https://poser.pugx.org/salman-bhai/Guessing-Games/downloads)](https://packagist.org/packages/salman-bhai/Guessing-Games)

##Introduction

This is a simple game of guessing numbers.

###Why?

Because you can learn a lot about javascript, especially if you are a beginner developer

###What can I do with this?

As well as have some fun you can study too.

##Requirements

* any web browser

##Instructions for use?

1. Select a number between * to *
2. Receive the result of divination

##How does it work?

The code snippet below makes all the magic.

It is located on line 4 of the js file **GuessingNumber.js**

```javascript
num_1 = Math.floor((Math.random()*100)+1);
```

To choose a different value for your guessing just do the following

```javascript
num_1 = Math.floor((Math.random()*my_number_here)+1);

var num = prompt("Please select a number between 1 to my_number_here");

if((num > my_number_here)||(num < 0))
```
**my_number_here** is a number you choose any

##Questions?

Open a [Issue](https://github.com/salman-bhai/Guessing-Games/issues) 

##License

MIT

##Contribute

Contribute to the community, feel free to contribute, make a fork!!