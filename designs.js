// Select color input
let color = document.getElementById("colorPicker");

// Select size input
let height = document.getElementById("input_height");
let width = document.getElementById("input_width");
let sizePicker = document.getElementById("sizePicker");

//Design canvas
let canvas = document.getElementById("pixel_canvas");

// When size is submitted by the user, call makeGrid()

function makeGrid() {
      for (let i=0; i < height.value; i++){
          let tr = document.createElement("tr");
          canvas.appendChild(tr);
          for (let j=0; j < width.value; j++){
              let td = document.createElement("td");
              tr.appendChild(td);
              td.addEventListener('click', function() {
                td.style.backgroundColor = colorPicker.value
        });
      }
    }
  }

  function clearGrid(){
      while (canvas.firstChild){
           canvas.removeChild(canvas.firstChild);
      }
  }

//Event Listeners for changing color and size
const colorPicker = document.getElementById('colorPicker');
color = colorPicker.value;

sizePicker.onsubmit = function(event){
  event.preventDefault();
  clearGrid();
  makeGrid();
};
