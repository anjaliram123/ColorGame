

var colors = generateRandomcolors(6);

var squares = document.querySelectorAll('.square');

var pickedColor = randomPickedcolor()

var picked = document.getElementById('picked');

var messageDisplay = document.getElementById('message');

picked.textContent = pickedColor;

var newGame = document.getElementById('newGame');

var stripeColor = document.getElementById('stripe');

var playAgain = document.getElementById('playAgain');

var isEasy = false;


//Reset after game is done
newGame.addEventListener('click', function() {
if(isEasy) {
	colors = generateRandomcolors(3);
}
else {
colors = generateRandomcolors(6);
}
pickedColor = randomPickedcolor();
picked.textContent = pickedColor;
for(var i = 0; i < colors.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
}
messageDisplay.textContent = " ";
stripeColor.style.backgroundColor = "rgb(255,255,255)";
playAgain.textContent = "New Game";

})

//Easy button 
 var easy = document.getElementById('easy');
 var hard = document.getElementById('hard');

 easy.addEventListener('click', function () {
  isEasy = true;
  hard.classList.remove('selected');
  easy.classList.add('selected');
 colors = generateRandomcolors(3);
 pickedColor = randomPickedcolor();
 picked.textContent = pickedColor;
 for(var i=0;i<squares.length;i++) {
   if(colors[i]) {
   	squares[i].style.backgroundColor = colors[i];
   } else {
   	squares[i].style.display = "none";
   }
 }
});


//Hard Button 
 hard.addEventListener('click', function () {
  isEasy = false; 
  hard.classList.add('selected');
  easy.classList.remove('selected');
  colors = generateRandomcolors(6);
 pickedColor = randomPickedcolor();
 picked.textContent = pickedColor;
 for(var i=0;i<squares.length;i++) {
   	squares[i].style.backgroundColor = colors[i];
   	squares[i].style.display = "block";
   }
 });


//Display colors 
for(var i = 0; i < colors.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function(){
    	var clickedColor = this.style.backgroundColor;
    	if(clickedColor === pickedColor) {
           changeAllcolors(pickedColor);
           messageDisplay.textContent ="Correct!!!";
           stripeColor.style.backgroundColor = clickedColor;
           playAgain.textContent = "Play Again ?"
    	} else {
    		this.style.backgroundColor = "#232323";
    		messageDisplay.textContent ="Try Again";
    	}
    })


}



//If selected right color change all blocks color to right color
function changeAllcolors(color) {
for(var i = 0; i < squares.length; i++)
{
 squares[i].style.backgroundColor = color;
}

}


//Pick a random color
function randomPickedcolor() {
	var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}


//Generate all six/three random colors
function generateRandomcolors(num) {
var arr = [];
for(var i=0; i<num ;i++) {
  arr.push(getcolor());
}
return arr;
}


//get colors
function getcolor() {
  
  var color1 = Math.floor(Math.random()*256);
  var color2 = Math.floor(Math.random()*256);
  var color3 = Math.floor(Math.random()*256);

  var generated = "rgb(" + color1 + ", " + color2 + ", " + color3+ ")";
  return generated;
}