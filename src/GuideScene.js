import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

var coffee;
var leaves;
var dinner;
var package;

class GuideScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'GuideScene'
    });
  }
  preload() {
    this.load.image('background','../assests/background.png');
    this.load.image('coffee', '../assests/coffee.png');
    this.load.image('leaves', '../assests/leaves.png');
    this.load.image('dinner', '../assests/eat.png');
    this.load.image('package', '../assests/package.png');
  }
  create() {
    let background = this.add.image(scaleConfig.moveX, scaleConfig.moveY, 'background');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;

    coffee = this.add.image(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
    coffee.scaleX = scaleConfig.gamescaleX;
    coffee.scaleY = scaleConfig.gamescaleY;

    leaves = this.add.image(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
    leaves.scaleX = scaleConfig.gamescaleX;
    leaves.scaleY = scaleConfig.gamescaleY;

    dinner = this.add.image(169 * scaleConfig.gamescaleX, 533 * scaleConfig.gamescaleY, 'dinner');
    dinner.scaleX = scaleConfig.gamescaleX;
    dinner.scaleY = scaleConfig.gamescaleY;

    package = this.add.image(600 * scaleConfig.gamescaleX, 820 * scaleConfig.gamescaleY, 'package');
    package.scaleX = scaleConfig.gamescaleX;
    package.scaleY = scaleConfig.gamescaleY;

    this.input.once('pointerdown', function () {
      this.scene.start('LocationScene');
    }, this);
  }
  update() {
    coffee.rotation += 0.01;
    if (leaves.rotation < 0.4) leaves.rotation += 0.005;
  }
}

export default GuideScene;
