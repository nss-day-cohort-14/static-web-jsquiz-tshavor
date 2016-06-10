
// GET HTML USER INPUT FOR HEIGHT AND TYPE OF CHARACTER
// DEFINE VARIABLES

// var inputHeight = document.getElementById ("inputHeight");
// var inputChar = document.getElementById ("inputChar");
// var submitButton = document.getElementById("submitButton");
// var enterButton = document.getElementById("enterButton");
// var spaces=""



// TREE FUNCTION HERE:


// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console. 
	var pineTree = {
		treeCharacter: "", 
		numHeight: ""
	};

  // console.log('HELLO');

// It accepts a single object as an argument. The object should have two key/value pairs.

	function growTree(height) {
	var treeWidth  = height.treeCharacter;
	var treeHeight = height.numHeight;
	var emptySpace = " ";
	var centered = Math.ceil(height.numHeight / 2);
	console.log(emptySpace.repeat(centered + parseInt(height.numHeight)/2 - 1),treeWidth);
	
	

	for (var i = 0; i <= height.numHeight - 2; i++) {
		treeWidth = treeWidth + height.treeCharacter + height.treeCharacter;// + height.numHeight;
		console.log(emptySpace.repeat((centered - i) + parseInt(height.numHeight) / 2 - 1) + treeWidth);

		}
}
  // inputHeight=inputHeight.value;
  
  // console.log("entered Height Value", inputHeight.value);

  // console.log("enteredCharacterValue", inputChar.value);

  // inputChar=inputChar.value;
  // var spaces = 1;


// EVENT LISTENERS HERE:

// 1.) must add an event listener to submit buton here:
// submitButton.addEventListener('click', tree);


// 2.) must add an event listener to the ENTER key:

// window.addEventListener("keydown", function (enter) {
//   if (event.enter) {

//     console.log ("ENTER key used!")
//     return; // Should do nothing if the key event was already consumed.
//   }

// code=13 is for ENTER KEY!

// function showChar(e)
// {
// alert("Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
//       + "charCode: " + e.charCode);
// }
// console.log(showChar, "showChar");


