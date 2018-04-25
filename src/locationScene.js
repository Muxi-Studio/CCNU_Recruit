import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

var coffee, leaves, library, tenBuilding, word1, word2;
var alpha1 = 0;
var alpha2 = 0;


class LocationScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'LocationScene'
    });
  }
  preload() {
    this.load.image('background','../assests/background.png');
    this.load.image('coffee', '../assests/coffee.png');
    this.load.image('leaves', '../assests/leaves.png');
    this.load.image('library', '../assests/library.png');
    this.load.image('tenBuilding', '../assests/tenBuilding.png');
    this.load.image('word1', '../assests/location-1.png');
    this.load.image('word2', '../assests/locarion-2.png');
  }
  create() {
    console.log("location")
    let background = this.add.image(scaleConfig.moveX, scaleConfig.moveY, 'background');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;

    coffee = this.add.image(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
    coffee.scaleX = scaleConfig.gamescaleX;
    coffee.scaleY = scaleConfig.gamescaleY;

    leaves = this.add.image(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
    leaves.scaleX = scaleConfig.gamescaleX;
    leaves.scaleY = scaleConfig.gamescaleY;    


    library = this.add.image(387 * scaleConfig.gamescaleX, 0, 'library');
    library.scaleX = scaleConfig.gamescaleX;
    library.scaleY = scaleConfig.gamescaleY;

    tenBuilding = this.add.image(175 * scaleConfig.gamescaleX, 0, 'tenBuilding');
    tenBuilding.scaleX = scaleConfig.gamescaleX;
    tenBuilding.scaleY = scaleConfig.gamescaleY;

    word1 = this.add.image(scaleConfig.moveX, 324 * scaleConfig.gamescaleY, 'word1').setAlpha(0);
    word1.scaleX = scaleConfig.gamescaleX;
    word1.scaleY = scaleConfig.gamescaleY;

    word2 = this.add.image(scaleConfig.moveX, 587 * scaleConfig.gamescaleY, 'word2').setAlpha(0);
    word2.scaleX = scaleConfig.gamescaleX;
    word2.scaleY = scaleConfig.gamescaleY;

    this.input.on('pointerdown', function () {
      this.scene.start('AcademyScene');
    }, this);
  }

  update() {
    coffee.rotation += 0.01;
    if (leaves.rotation < 0.4) leaves.rotation += 0.005;
    if (library.y <= 1135 * scaleConfig.gamescaleY) library.y += 7;
    if (tenBuilding.y <= 1050 * scaleConfig.gamescaleY) tenBuilding.y += 5;

    this.time.addEvent({
      delay: 1000,
      callback: function ()
      {
        if(alpha1 <= 1){
          alpha1 += 0.008;
          word1.setAlpha(alpha1);
        }
      },
      callbackScope: this
    });
    this.time.addEvent({
      delay: 2000,
      callback: function ()
      {
        if(alpha2 <= 1){
          alpha2 += 0.008;
          word2.setAlpha(alpha2);
        }
      },
      callbackScope: this
    });
  }
}

export default LocationScene;
