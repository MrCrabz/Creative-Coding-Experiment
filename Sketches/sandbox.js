const canvasSketch = require('canvas-sketch');

const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [ 1080, 1080 ]
};


// Drawing & Sizes functions
const radToDeg = (rad) => {
  return rad * Math.PI / 180;
}

const dimentionGeneratorSpikes = (value) => {
  return random.range(-value * 1.2, -value /1.2);
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
//////////////////////////////////////////////////////////////


// Colors Functions
const rgbGenerator = () => {
  let hues = Math.floor(Math.random() * 360);
  let saturation = Math.floor(Math.random() * 100);
  let lightness = Math.floor(Math.random() * 80);
  let baseColor = `hsl(${hues},${saturation}%,${lightness}%)`;

  return baseColor;
}

const spectrumGenerator = (seedHue, seedSaturation, seedLightness, spectrumSize) => {

  let spectrumOfMatchingColors = [];
  let spectrumLightnessChanges = 100 / spectrumSize;

  let secondaryHue, thirdHue;

  if (seedHue+120 < 360) {
    secondaryHue = seedHue+120;
    thirdHue = seedHue+30;
  } else {
    secondaryHue = seedHue-120;
    thirdHue = seedHue-30;
  }

  for (var i = 0; i < spectrumSize; i++) {

    if (i % 2 == 0) {
      currentHue = secondaryHue;
    } else if (true) {
      currentHue = thirdHue;
    } else {
      currentHue = seedHue;
    }

    console.log(currentHue);
    console.log(secondaryHue);
    console.log(seedHue);

    let spectrumLightness = Math.floor(i*spectrumLightnessChanges);

    spectrumOfMatchingColors.push(`hsl(${currentHue},${seedSaturation}%,${spectrumLightness}%)`);
  }

  return spectrumOfMatchingColors;
}
//////////////////////////////////////////////////////////////


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    document.addEventListener('keyup', function(e){
      if(e.keyCode == 32)
        window.location.reload();
    })

    let hues = Math.floor(Math.random() * 360);
    let saturation = Math.floor(Math.random() * 100);
    let lightness = Math.floor(Math.random() * 80);

    const cx = width/2;
    const cy = height/2;
    const w = width/100;
    const h = height/10;

    let x, y, seeded;
    const radius = width/3;
    let numberOfTicks = random.range(500,1000);


    let colorSpectrum = spectrumGenerator(hues, saturation, lightness, numberOfTicks);
    console.log(colorSpectrum);

    for (var i = 0; i < numberOfTicks; i++) {

      seeded = random.createRandom(i);

      let slice = radToDeg(360 / numberOfTicks)
      let angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate( x , y );
      context.rotate(angle);
      // context.scale(1,seeded.range(.5, 1))
      //
      // // Spikes
      // context.beginPath();
      // context.fillStyle = colorSpectrum[i];
      // context.globalAlpha = seeded.range(.5, .9);
      // context.fillRect(dimentionGeneratorSpikes(w), dimentionGeneratorSpikes(h), dimentionGeneratorSpikes(w), dimentionGeneratorSpikes(h));
      // context.restore();

      // Arc
      // context.save();
      context.translate( cx , cy );
      context.rotate(-angle);
      context.globalAlpha = seeded.range(.8, .9);
      context.beginPath();
      context.arc(0, 0, dimentionGeneratorArcs(radius, "radius"), dimentionGeneratorArcs(slice, "startAngle"), dimentionGeneratorArcs(slice, "endAngle"));
      context.strokeStyle = colorSpectrum[i];
      context.lineWidth = seeded.range(w, 4*w);
      context.stroke();
      context.restore();
    }

  };
};

canvasSketch(sketch, settings);
