var colorCounting = 6;

var colors = generateRandomColor(colorCounting);
var pickedColor =  choosingColor();
var squares = document.querySelectorAll(".square");
var verify = document.getElementById("verify");
var colorDisplay = document.querySelector("#colorDisplay");
var head = document.querySelector("#head");
var resset = document.getElementById("ressetButton");
var options = document.querySelectorAll(".hovering");
var selections = document.getElementsByClassName("selected");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");
var selectors = document.querySelectorAll(".selector");



         colorDisplay.textContent = pickedColor;

       
                      

    function easybutton() {

                 easyButton.addEventListener("click", function(){ 

                 colorCounting = 3;

                 colors = generateRandomColor(colorCounting);  

                 pickedColor = choosingColor();

                 colorDisplay.textContent = pickedColor;

                 verify.textContent = "    ";

                 head.style.backgroundColor = "#232323";

                 easyButton.classList.add("selected");

                 hardButton.classList.remove("selected");
                  
                 for(var i = colors.length; i < squares.length; i++){

                 squares[i].classList.remove("square");

             }
                for(var i = 0; i < squares.length; i ++){
                  squares[i].style.backgroundColor = colors[i];
             }
         })
     }
 

 

             
      function hardbutton() {

                hardButton.addEventListener("click", function(){
                
                colorCounting = 6;

             	colors = generateRandomColor(colorCounting);

             	pickedColor = choosingColor();

                colorDisplay.textContent = pickedColor;

                hardButton.classList.add("selected");

                easyButton.classList.remove("selected");

                verify.textContent = "    ";

                head.style.backgroundColor = "#232323";

             	for(var i = 0; i < squares.length; i++){

             	squares[i].classList.add("square")

             	squares[i].style.backgroundColor = colors[i];

           	}       	
         })
      }
     
                





 function ressetbutton() {


       resset.addEventListener("click", function(){

       resset.textContent = "New Colors";	

       verify.textContent = "    ";

       colors = generateRandomColor(colorCounting);

       pickedColor = choosingColor();

       colorDisplay.textContent = pickedColor;

       head.style.backgroundColor = "#232323";

       for(var i = 0; i < squares.length; i++) {

          squares[i].style.backgroundColor = colors[i];
             
          }
     })
  }


 


    function startUp() {

 
           for(var i = 0; i < squares.length; i++) {

           squares[i].style.backgroundColor = colors[i];

           squares[i].addEventListener("click", function(){

           var clickedColor = this.style.backgroundColor;

           if(clickedColor === pickedColor) {

   	       verify.textContent = "Correct";
 
   	       colorSetToPicked(pickedColor);

   	       head.style.backgroundColor = pickedColor;

           resset.textContent = "Play Again?";

        }  else {

     	     this.style.backgroundColor = "#232323";

     	     verify.textContent = "Try Again!";
           }
       })
     }
 }

 
  





  function colorSetToPicked(argument) {

       for(var i = 0; i < squares.length; i ++){

   	     squares[i].style.backgroundColor = argument;
   	    
   	    }

      }



 function choosingColor() {

       for(var i = 0; i < colors.length; i ++){

	   var randomInArray = Math.floor(Math.random() * colors.length);
   }

         return  colors[randomInArray];
 }





function generateRandomColor(num) {

	arr = [];

	for(var i = 0; i < num; i ++) {

		 arr.push(randomColor());
	}

      return arr;
}



 function randomColor(){

     var r = Math.floor(Math.random()*256);         
     var g = Math.floor(Math.random()*256);          
     var b = Math.floor(Math.random()*256);  

     return "rgb(" + r + ", " + g + ", " + b + ")";
          
           
}




                      startUp()


                      ressetbutton()
                      
                     
                     easybutton()


                     hardbutton()







