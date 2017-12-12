

//array 

var colors = creator(6);
var picked = randomise();
var guessColor = document.getElementById("rightColor"); // Picked text 
guessColor.textContent = picked;
var message = document.getElementById("message");
var h1 = document.querySelector("h1"); // select h1
var squares = document.querySelectorAll(".square"); //This select ALL div that has the class square... squares is  an array like


//get my button
var button = document.querySelector("button");
button.addEventListener("click",function(){

	//new colors
	colors = creator(6);

	//new goals
	picked = randomise();

	//update screen
	guessColor.textContent = picked;

	//reset back
	h1.style.backgroundColor= "#334C5B";

	button.textContent = "New Colors";


	for(var i = 0; i < squares.length; i++) {

		squares[i].style.backgroundColor = colors[i];
    }


});





for(var i = 0; i < squares.length; i++) {

	squares[i].style.backgroundColor = colors[i];


	//click Liseners 
	squares[i].addEventListener("click", function(){

		//get color 
		var getComp = this.style.backgroundColor;
		//comparing
		if (getComp == picked) {

			h1.style.backgroundColor = picked;
			button.textContent = "Play Again?";

			message.textContent ="correct";
			change();




		} else{
			this.style.backgroundColor = "#334C5B";
			message.textContent = "Try again";

		}

	} );



	function change(){

		for(var i = 0; i < squares.length; i++) {

			squares[i].style.backgroundColor = picked;
		}

	}


	function randomise(){
		var randomColor = Math.floor(Math.random() * colors.length );
		return colors[randomColor];
	}

	function creator(x){

		//create an array
		var arr = [];

		for (var i = 0; i < x; i++ ){

					//red 
				var r = Math.floor(Math.random() * 256 );

				//green
				var g = Math.floor(Math.random() * 256 );

				//blue
				var b = Math.floor(Math.random() * 256 );

				var rgb = "rgb("+r+", "+g+", "+b+")";

				arr.push(rgb);
					

		}

		return arr;


	}

}