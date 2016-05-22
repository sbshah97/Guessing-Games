alert("Welcome to the Guessing Game number.");


num_1 = Math.floor((Math.random()*100)+1);
var sum = 1;

var count = 0;

while(sum) {

var num = prompt("Please select a number between 1 to 100");

if((num > 100)||(num < 0))
	alert("The number entered is out of range." + "\n" + "Please choose the numbers again")

else if(num > num_1) {
	alert("The number entered is greater than the correct number.");
	count++;
	}

else if(num < num_1) {
	alert("The number entered is lesser than the correct number.");
	count ++;
	} 

else 
	sum = 0;
	count++;
}

alert("The correct number was guessed in" + count + "guesses"); 