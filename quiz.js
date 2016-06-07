// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console. It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.


// GET HTML USER INPUT FOR HEIGHT AND TYPE OF CHARACTER
// DEFINE VARIABLES

var inputHeight = document.getElementById ("inputHeight");
var inputChar = document.getElementById ("inputChar");
var submitButton = document.getElementById("submitButton");
var enterButton = document.getElementById("enterButton");
var spaces=""



// TREE FUNCTION HERE:






var tree = function() {
  
  inputHeight=inputHeight.value;
  // console.log("entered Height Value", enteredHeightValue);
  inputChar=inputChar.value;
  // console.log("enteredCharacterValue", enteredCharacterValue);
  var spaces = 1;
  // work on function here






};

// document.getElementById('display').innerHTML += '<p>' + pineOutput;

// EVENT LISTENERS HERE:


// //must add an event listener to submit buton here:
// submitButton.addEventListener("click", tree);

// // must add an event listener to the ENTER key:
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


