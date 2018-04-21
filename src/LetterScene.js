import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

var arrow;
var flag = 1;

class LetterScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'LetterScene'
    });
  }
  preload() {
    this.load.image('letter-background','../assests/letterBackground.png');
    this.load.image('letter-cover', '../assests/letterCover.png');
    this.load.image('letter', '../assests/letter.png');
    this.load.image('arrow', '../assests/arrow.png');
    this.load.image('camera', '../assests/camera.png');
    this.load.image('start', '../assests/startRead.png');
  }
  create() {
    let background = this.add.image(scaleConfig.moveX, scaleConfig.moveY, 'letter-background');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;
    
    arrow = this.add.image(scaleConfig.moveX, 1142 * scaleConfig.gamescaleY, 'arrow');
    arrow.scaleX = scaleConfig.gamescaleX;
    arrow.scaleY = scaleConfig.gamescaleY;

    let letterCover = this.add.image(scaleConfig.moveX, 800 * scaleConfig.gamescaleY, 'letter-cover');
    letterCover.scaleX = scaleConfig.gamescaleX;
    letterCover.scaleY = scaleConfig.gamescaleY;

    let camera = this.add.image(40, 1000 * scaleConfig.gamescaleY, 'camera');
    camera.scaleX = scaleConfig.gamescaleX;
    camera.scaleY = scaleConfig.gamescaleY;

    let start = this.add.image(scaleConfig.moveX, 1062 * scaleConfig.gamescaleY, 'start');
    start.scaleX = scaleConfig.gamescaleX;
    start.scaleY = scaleConfig.gamescaleY;

    this.input.once('pointerdown', function () {
      this.scene.start('GuideScene');
    }, this);
  }
  update() {
    if (arrow.y < scaleConfig.gamescaleY * 1200 && flag == 1) {
      arrow.y += 0.5;
    }
    if (arrow.y >= scaleConfig.gamescaleY * 1200 || flag == 0){
      arrow.y -= 0.5;
      flag = 0;
      if (arrow.y == scaleConfig.gamescaleY * 1142) flag = 1;
    }
  }
}
export default LetterScene;