import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

var arrow, letter, start;
var flag = 1;

class LetterScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'LetterScene'
    });
  }
  preload() {
    this.load.image('letterBackground','../assets/letterBackground.png');
    this.load.image('letterCover', '../assets/letterCover.png');
    this.load.image('letter', '../assets/letter.png');
    this.load.image('arrow', '../assets/arrow.png');
    this.load.image('camera', '../assets/camera.png');
    this.load.image('start', '../assets/startRead.png');
    this.load.image('letterCoverUp', '../assets/letterCoverUp.png');
  }
  create() {
    var background = this.add.sprite(scaleConfig.moveX, scaleConfig.moveY, 'letterBackground');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;
    
    arrow = this.add.sprite(scaleConfig.moveX, 1142 * scaleConfig.gamescaleY, 'arrow').setAlpha(0);
    arrow.scaleX = scaleConfig.gamescaleX;
    arrow.scaleY = scaleConfig.gamescaleY;

    let letterCoverUp = this.add.sprite(scaleConfig.moveX, 530 * scaleConfig.gamescaleY, 'letterCoverUp');
    letterCoverUp.scaleX = scaleConfig.gamescaleX;
    letterCoverUp.scaleY = scaleConfig.gamescaleY;

    letter = this.add.sprite(scaleConfig.moveX, 1000 * scaleConfig.gamescaleY, 'letter');
    letter.scaleX = scaleConfig.gamescaleX;
    letter.scaleY = scaleConfig.gamescaleY;

    var letterCover = this.add.sprite(scaleConfig.moveX, 800 * scaleConfig.gamescaleY, 'letterCover');
    letterCover.scaleX = scaleConfig.gamescaleX;
    letterCover.scaleY = scaleConfig.gamescaleY;

    let camera = this.add.sprite(40, 1000 * scaleConfig.gamescaleY, 'camera');
    camera.scaleX = scaleConfig.gamescaleX;
    camera.scaleY = scaleConfig.gamescaleY;

    start = this.add.sprite(scaleConfig.moveX, 1062 * scaleConfig.gamescaleY, 'start').setAlpha(0);
    start.scaleX = scaleConfig.gamescaleX;
    start.scaleY = scaleConfig.gamescaleY;

    this.input.once('pointerdown', function () {
      background.destroy();
      arrow.destroy();
      letter.destroy();
      letterCover.destroy();
      letterCoverUp.destroy();
      camera.destroy();
      start.destroy();
      this.scene.launch('GuideScene');
    }, this);
  }
  update() {
    if (letter.y >= 800 * scaleConfig.gamescaleY) {
      letter.y -= 1;
    } else {
      arrow.setAlpha(1);
      start.setAlpha(1);
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
}
export default LetterScene;