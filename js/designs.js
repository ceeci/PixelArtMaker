/* Table of Content - Pixel Art Maker JavaScript
==================================================
  1.Input Selectors (Constant Variables)
  2.Make Grid Function 
  3.Event Listeners

Input Selectors 
=====================*/
// Select size input by Height
const height = $("#inputHeight");
// Select size input by Width
const width = $("#inputWidth");
//Select Form Size Picker
const color = $("#colorPicker");
// Select Canvas input constant variable
const artCanvas = $("#pixelCanvas");


/*Make Grid Function 
=====================*/
function makeGrid() {
  //makeGrid function creates create pixel grid canvas with the help of for-loop using jQuery Selectors
    let heightValue = height.val();
    let widthValue = width.val();

    for (let h = 0; h < heightValue; h++) {
      artCanvas.append("<tr></tr>");
    }

    for (let w = 0; w < widthValue; w++) {
      $('tr').append("<td></td>"); // this will 
    }    
}

//Clear default parent styles elements if present
function clearPixelArt() {
    artCanvas.empty();
}

/*Event Listeners
=====================*/
//Event Listeners for Click Activities
$("table").on("click", "td", function(){
  //This toggles between coloring and undoing
    ($( this ).attr('style')) ? $(this).css("backgroundColor", "") : $(this).css("backgroundColor", color.val());
});

//Binding makeGrid function with clearing any default styles if present.
$("#submitButton").on("click", function(event) {
//This clears or resets previous grid settings and presents with fresh canvas to start a new grid.
    clearPixelArt();
    event.preventDefault();
    // When size is submitted by the user, call makeGrid() function creates pixel grid canvas. 
    makeGrid();
});

$("#removeGrid").on("click", function() {
  //Removes Grid table elements
    clearPixelArt();
});

$("#cleanGrid").click(function(event){
  //Clears off pixel art on the canvas using removeAttr
    $("td").removeAttr("style");
    event.preventDefault();
});

// $("table").on("click", "td", function() {
//     $(this).css("border-color", color.val());
// });
