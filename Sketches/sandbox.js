const canvasSketch = require('canvas-sketch');

const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const radToDeg = (rad) => {
  return rad * Math.PI / 180;
}

const rgbGenerator = () => {
  // let lightness = Math.floor(random.range(0, 90);
  // let colorVariations = [];

  return (`hsl(${Math.floor(random.range(0, 360))},${Math.floor(random.range(50, 100))}%,${Math.floor(random.range(0, 90))}%)`);
}

// "hsl(306, 81%, 58%)"

const dimentionGeneratorSpikes = (value) => {
  return random.range(-value * 1.2, -value /1.2);
}

const colorMatcher = (colorSeed) => {

}

const dimentionGeneratorArcs = (value, context) => {
  switch (context) {
    case "radius":
      return random.range(value * 1.4, value /2);
      break;
    case "startAngle":
      return random.range(value*2, value*3.3);
      break;
    case "endAngle":
      return random.range(value*6, value*3);
      break;
    default:
      return random.range(value * 1.4, value /2);
  }
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    document.addEventListener('keyup', function(e){
      if(e.keyCode == 32)
        window.location.reload();
    })

    const cx = width/2;
    const cy = height/2;
    const w = width/100;
    const h = height/10;

    let x, y, seed;
    const radius = width/3;
    let numberOfTicks = random.range(1,500);

    let baseColorSeed = rgbGenerator(255);


    for (var i = 0; i < numberOfTicks; i++) {

      seed = random.createRandom(i);

      let slice = radToDeg(360 / numberOfTicks);
      let angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate( x , y );
      context.rotate(-angle);
      context.scale(1,seed.range(.5, 1));

      // Spikes
      context.beginPath();
      context.fillStyle = rgbGenerator(255);
      context.globalAlpha = seed.range(.5, .9);
      context.fillRect(dimentionGeneratorSpikes(w), dimentionGeneratorSpikes(h), dimentionGeneratorSpikes(w), dimentionGeneratorSpikes(h));
      context.restore();

      context.save();
      context.translate( cx , cy );
      context.rotate(-angle);
      context.globalAlpha = seed.range(.8, .9);
      // Arc
      context.beginPath();
      context.arc(0, 0, dimentionGeneratorArcs(radius, "radius"), dimentionGeneratorArcs(slice, "startAngle"), dimentionGeneratorArcs(slice, "endAngle"));
      context.strokeStyle = rgbGenerator(255);
      context.lineWidth = seed.range(w, 4*w);
      context.stroke();
      context.restore();
    }

  };
};

canvasSketch(sketch, settings);
