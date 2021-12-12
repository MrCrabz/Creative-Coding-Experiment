const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    for (var i = 0; i < width/4; i++) {


      context.beginPath();
      context.strokeStyle = 'black';
      context.lineWidth = 2;
      context.arc(width/2, width/2, width-(i*4), 0, Math.PI * 2);
      context.stroke();
    }

  };
};

canvasSketch(sketch, settings);
