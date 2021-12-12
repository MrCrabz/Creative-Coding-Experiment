// let helloWorld = (param) => {
//   console.log(param);
// }


let canvasObjOne = document.getElementById('sandbox-Obj-1');
let contextOne = canvasObjOne.getContext('2d');

let canvasObjTwo = document.getElementById('sandbox-Obj-2');
let contextTwo = canvasObjTwo.getContext('2d');

let canvasObjThree = document.getElementById('sandbox-Obj-3');
let contextThree = canvasObjThree.getContext('2d');

let canvasObjFour = document.getElementById('sandbox-Obj-4');
let contextFour = canvasObjFour.getContext('2d');

let canvasObjFive = document.getElementById('sandbox-Obj-5');
let contextFive = canvasObjFive.getContext('2d');

let canvasObjSix = document.getElementById('sandbox-Obj-6');
let contextSix = canvasObjSix.getContext('2d');

let canvasObjSeven = document.getElementById('sandbox-Obj-7');
let contextSeven = canvasObjSeven.getContext('2d');

let canvasObjEight = document.getElementById('sandbox-Obj-8');
let contextEight = canvasObjEight.getContext('2d');

let canvasObjNine = document.getElementById('sandbox-Obj-9');
let contextNine = canvasObjNine.getContext('2d');



// Drawing Art Obj.1
  // Parent Filled Square
  contextOne.beginPath();
  contextOne.fillStyle = 'rgb(0,0,0)';
  contextOne.strokeStyle = 'black';
  contextOne.lineWidth = 4;
  contextOne.fillRect(0, 0, 420, 420);
  contextOne.rect(0, 0, 420, 420);
  contextOne.stroke();
  // Child Outlined Circle
  contextOne.beginPath();
  contextOne.strokeStyle = 'white';
  contextOne.lineWidth = 4;
  contextOne.arc(210, 210, 100, 0, Math.PI * 2);
  contextOne.stroke();
// End of Art Obj.1


// Drawing Art Obj.2
  // Parent Outlined Square
  contextTwo.beginPath();
  contextTwo.strokeStyle = 'black';
  contextTwo.lineWidth = 4;
  contextTwo.rect(2, 2, 416, 416);
  contextTwo.stroke();
  // Child Filled Square
  contextTwo.beginPath();
  contextTwo.fillStyle = 'rgb(0,0,0)';
  contextTwo.fillRect(105, 105, 210, 210);
// End of Art Obj.1

// Drawing Art Obj.3
  // Parent Outlined Circle
  contextThree.beginPath();
  contextThree.strokeStyle = 'black';
  contextThree.lineWidth = 4;
  contextThree.arc(210, 210, 208, 0, Math.PI * 2);
  contextThree.stroke();
  //  Child Filled Square
  contextThree.beginPath();
  contextThree.arc(210, 210, 100, 0, Math.PI * 2, false);
  contextThree.fillStyle = '#000000';
  contextThree.fill();
// End of Art Obj.1

// Drawing Art Obj.4
  // Parent Outlined Circle
  for (var i = 0; i < 52; i++) {
    contextFour.beginPath();
    contextFour.strokeStyle = 'black';
    contextFour.lineWidth = 2;
    contextFour.arc(210, 210, 208-(i*4), 0, Math.PI * 2);
    contextFour.stroke();
  }
// End of Art Obj.4

// Drawing Art Obj.5
  // Parent Outlined Circle
  for (var i = 0; i < 52; i++) {
    // contextFive.beginPath();
    // contextFive.strokeStyle = 'black';
    // contextFive.lineWidth = 2;
    // contextFive.arc(210, 210, 208-(i*4), 0, Math.PI * 2);
    // contextFive.stroke();
    contextFive.beginPath();
    contextFive.strokeStyle = 'black';
    contextFive.lineWidth = 2;
    contextFive.rect(2+(i*4), 2+(i*4), 416-(i*8), 416-(i*8));
    contextFive.stroke();
  }
// End of Art Obj.5


// Drawing Art Obj.6
  // Parent Outlined Circle
  for (var i = 0; i < 52; i++) {
    contextSix.beginPath();
    contextSix.strokeStyle = 'black';
    contextSix.lineWidth = 2;
    contextSix.rect(2+(i*4), 2+(i*4), 416-(i*8), 416-(i*8));
    contextSix.stroke();

    contextSix.beginPath();
    contextSix.strokeStyle = 'black';
    contextSix.lineWidth = 2;
    contextSix.arc(210, 210, 208-(i*4), 0, Math.PI * 2);
    contextSix.stroke();
  }
// End of Art Obj.6

// Drawing Art Obj.7
  // Parent Outlined Circle
  let rowCounter = 1;
  for (var i = 0; i < 41; i++) {
    for (var j = 0; j < 41; j++) {
      let squareSize = 11;
      let xCoordinates = squareSize*i+1;
      let yCoordinates = squareSize*j+1;

      contextSeven.beginPath();
      contextSeven.strokeStyle = 'black';
      contextSeven.lineWidth = 2;
      contextSeven.rect(xCoordinates, yCoordinates, squareSize, squareSize);
      contextSeven.stroke();
    }
  }
// End of Art Obj.7

// Drawing Art Obj.8
  // Parent Outlined Circle
  rowCounter = 1;
  for (var i = 0; i < 38; i++) {
    for (var j = 0; j < 38; j++) {
      let squareSize = 11;
      let xCoordinates = squareSize*i+(squareSize/2)+1;
      let yCoordinates = squareSize*j+(squareSize/2)+1;

      contextEight.beginPath();
      contextEight.strokeStyle = 'black';
      contextEight.lineWidth = 2;
      contextEight.arc(xCoordinates, yCoordinates, squareSize/2, 0, Math.PI * 2);
      contextEight.stroke();
    }
  }
// End of Art Obj.8

// Drawing Art Obj.9
  // Parent Outlined Circle
  rowCounter = 1;
  for (var i = 0; i < 38; i++) {
    for (var j = 0; j < 38; j++) {
      let squareSize = 11;
      let xCoordinates = squareSize*i+(squareSize/2)+1;
      let yCoordinates = squareSize*j+(squareSize/2)+1;

      contextNine.beginPath();
      contextNine.strokeStyle = 'black';
      contextNine.lineWidth = 2;
      contextNine.arc(xCoordinates, yCoordinates, squareSize/2, 0, Math.PI * 2);
      contextNine.stroke();

      contextNine.beginPath();
      contextNine.strokeStyle = 'black';
      contextNine.lineWidth = 2;
      contextNine.arc(xCoordinates, yCoordinates, squareSize, 0, Math.PI * 2);
      contextNine.stroke();
    }
  }
// End of Art Obj.9



// Drawing Art Experimental Obj
  // Parent Outlined Circle
  // for (var i = 0; i < 210; i++) {
  //   contextFour.beginPath();
  //   contextFour.strokeStyle = 'black';
  //   contextFour.lineWidth = 4;
  //   contextFour.arc(i*2, i*2, 420-(i*4), 0, Math.PI * 2);
  //   contextFour.stroke();
  // }
// End of Art Obj.1
