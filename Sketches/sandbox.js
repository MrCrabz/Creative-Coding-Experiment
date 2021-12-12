const canvasSketch = require('canvas-sketch');

const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const radToDeg = (rad) => {
  return rad * Math.PI / 180;
}

const rgbGenerator = (index) => {
  return (`rgb(${Math.floor(Math.random() * index)},${Math.floor(Math.random() * index)},${Math.floor(Math.random() * index)})`);
  // return 'white';
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

const sketch = () => {
  return ({ context, width, height }) => {
    // context.fillStyle = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    context.fillStyle= 'white';
    context.fillRect(0, 0, width, height);

    let cx = width/2;
    let cy = height/2;

    let volume = random.range(20,100);
    let numberOfInstances = random.range(1000,5000);

    for (var i = 0; i < numberOfInstances; i++) {


      let AgentGenerated = new Agent(context, random.range(0,width), random.range(0,height), i, volume, width, height);

      AgentGenerated.draw(context, random.range(0,width), random.range(0,height), i, volume, width, height);

    }

  };
};

canvasSketch(sketch, settings);

class Eye {
    constructor(generatedContex, centerX, centerY, index, width, height){
      this.w = centerX/100;
      this.h = centerY/10;

      this.cx = centerX;
      this.cy = centerY;

      this.radius = centerX/36;
      this.numberOfTicks = random.range(1,500);

      this.seed = random.createRandom(index);

      this.slice = radToDeg(360 / this.numberOfTicks)
      this.angle = this.slice * index;

      this.x = centerX + this.radius * Math.sin(this.angle) * 2.5;
      this.y = centerY + this.radius * Math.cos(this.angle) * 2.5;
    }
}

class Agent {
  constructor(generatedContex, centerX, centerY, index, width, height){
    this.object = new Eye(generatedContex, centerX, centerY, index, width, height);
  }
  draw(generatedContex, volume){

    for (var i = 0; i < volume; i++) {

      generatedContex.save();
      generatedContex.translate( this.object.x , this.object.y );
      generatedContex.rotate(-this.object.angle);
      generatedContex.scale(.5,this.object.seed.range(.5, .7));

      // Spikes
      generatedContex.beginPath();
      generatedContex.fillStyle = rgbGenerator(255);
      generatedContex.globalAlpha = this.object.seed.range(.5, .7);
      generatedContex.fillRect(dimentionGeneratorSpikes(this.object.w/2), dimentionGeneratorSpikes(this.object.h/2), dimentionGeneratorSpikes(this.object.w/2), dimentionGeneratorSpikes(this.object.h/2));
      generatedContex.restore();

      // generatedContex.save();
      // generatedContex.translate( this.object.cx , this.object.cy );
      // generatedContex.rotate(-this.object.angle);
      // generatedContex.globalAlpha = this.object.seed.range(.5, .7);
      // // // // Arc
      // generatedContex.beginPath();
      // generatedContex.arc(0, 0, dimentionGeneratorArcs(this.object.radius, "radius"), dimentionGeneratorArcs(this.object.slice, "startAngle"), dimentionGeneratorArcs(this.object.slice, "endAngle"));
      // generatedContex.strokeStyle = rgbGenerator(255);
      // generatedContex.lineWidth = this.object.seed.range(this.object.w, this.object.w/2);
      // generatedContex.stroke();
      // generatedContex.restore();

    }

  }
}
