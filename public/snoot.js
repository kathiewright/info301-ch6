/*  Chapter 6

*	Snoot Flowers - Alternate Version
*	Author:
*	Date:
*	Purpose: To add functions for the Snoot's flowers order form.

*	Filename:  snoot.js
*/

"use strict";  //interprets JavaScript commands as a strictly typed language


/* Code to set the dropdown selection boxes (states & date fields) to -1, effectively closing them  Ref:  pp 373-374  */
function removeSelectDefaults() {
   var emptyBoxes = document.getElementsByTagName("select");  //creates an array of all the selection box elements (step 5)
   for (var i = 0; i < emptyBoxes.length; i++) {  //loop through the selection box collection (step 6)
      emptyBoxes[i].selectedIndex = -1;  //whatever the current box is; set it to -1 (step 7)
   }
}

//createEventListeners is used to drive the various validation functions
function createEventListeners() {
	
}


/* call the event listeners as part of the page set up Ref:  pg. 380  step 11*/
function setUpPage() {
	removeSelectDefaults();
	createEventListeners();
}

/* run the setup tasks when the page finishes loading Ref:  pp 374, step 8  */
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}

