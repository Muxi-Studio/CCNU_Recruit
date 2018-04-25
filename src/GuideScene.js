import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';
import LetterScene from './LetterScene';

var coffee, leaves, dinner, packageImage, northGate, guideWord1, guideWord2, guideWord3, guideWord4;
var alpha1 = 0;
var alpha2 = 0;
var alpha3 = 0;
var alpha4 = 0;

class GuideScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'GuideScene'
      
    });
  }
  preload() {
    this.load.audio('bgMusic', '../assets/bgMusic.mp3');
    this.load.image('background','../assets/background.png');
    this.load.image('coffee', '../assets/coffee.png');
    this.load.image('leaves', '../assets/leaves.png');
    this.load.image('dinner', '../assets/eat.png');
    this.load.image('packageImage', '../assets/packageImage.png');
    this.load.image('northGate', '../assets/northGate.png');
    this.load.image('guideWord1', '../assets/guideword1.png');
    this.load.image('guideWord2', '../assets/guideword2.png');
    this.load.image('guideWord3', '../assets/guideword3.png');
    this.load.image('guideWord4', '../assets/guideword4.png');
  }
  
  create() {
    var bgMusic = this.sound.add('bgMusic');
    bgMusic.play();

    let background = this.add.image(scaleConfig.moveX, scaleConfig.moveY, 'background');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;

    coffee = this.add.image(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
    coffee.scaleX = scaleConfig.gamescaleX;
    coffee.scaleY = scaleConfig.gamescaleY;

    leaves = this.add.image(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
    leaves.scaleX = scaleConfig.gamescaleX;
    leaves.scaleY = scaleConfig.gamescaleY;

    // 169 * scaleConfig.gamescaleX
    dinner = this.add.sprite(0, 533 * scaleConfig.gamescaleY, 'dinner').setOrigin(0);
    dinner.setAlpha(0);
    dinner.scaleX = scaleConfig.gamescaleX;
    dinner.scaleY = scaleConfig.gamescaleY;

    // 600 * scaleConfig.gamescaleX,
    packageImage = this.add.sprite(639 * scaleConfig.gamescaleX, 820 * scaleConfig.gamescaleY, 'packageImage').setOrigin(0);
    packageImage.setAlpha(0);
    packageImage.scaleX = scaleConfig.gamescaleX;
    packageImage.scaleY = scaleConfig.gamescaleY;

    northGate = this.add.sprite(0, 966 * scaleConfig.gamescaleY, 'northGate').setOrigin(0);
    northGate.setAlpha(0);
    northGate.scaleX = scaleConfig.gamescaleX;
    northGate.scaleY = scaleConfig.gamescaleY;

    guideWord1 = this.add.sprite(scaleConfig.moveX, 386 * scaleConfig.gamescaleY, 'guideWord1').setAlpha(0);
    guideWord1.scaleX = scaleConfig.gamescaleX;
    guideWord1.scaleY = scaleConfig.gamescaleY;

    guideWord2 = this.add.sprite(scaleConfig.moveX, 686 * scaleConfig.gamescaleY, 'guideWord2').setAlpha(0);
    guideWord2.scaleX = scaleConfig.gamescaleX;
    guideWord2.scaleY = scaleConfig.gamescaleY;

    guideWord3 = this.add.sprite(scaleConfig.moveX, 962 * scaleConfig.gamescaleY, 'guideWord3').setAlpha(0);
    guideWord3.scaleX = scaleConfig.gamescaleX;
    guideWord3.scaleY = scaleConfig.gamescaleY;

    guideWord4 = this.add.sprite(scaleConfig.moveX, 1160 * scaleConfig.gamescaleY, 'guideWord4').setAlpha(0);
    guideWord4.scaleX = scaleConfig.gamescaleX;
    guideWord4.scaleY = scaleConfig.gamescaleY;

    this.input.once('pointerdown', function () {
      dinner.destroy();
      packageImage.destroy();
      northGate.destroy();
      guideWord1.destroy();
      guideWord2.destroy();
      guideWord3.destroy();
      guideWord4.destroy();
      this.scene.launch('TeacherScene');
    }, this);
  }
  update() {
    coffee.rotation += 0.01;
    if (leaves.rotation < 0.4) leaves.rotation += 0.005;

    this.time.addEvent({
      delay: 1000,
      callback: function ()
      {
        if(alpha1 <= 1){
          alpha1 += 0.008;
          guideWord1.setAlpha(alpha1);
          dinner.setAlpha(alpha1);
          if (dinner.x <= 85 * scaleConfig.gamescaleX){
            dinner.x += 2 * scaleConfig.gamescaleX
          }
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 2500,
      callback: function ()
      {
        if(alpha2 <= 1){
          alpha2 += 0.008;
          guideWord2.setAlpha(alpha2);
          packageImage.setAlpha(alpha2);
          if (packageImage.x >= 514 * scaleConfig.gamescaleX){
            packageImage.x -= 2 * scaleConfig.gamescaleX
          }
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 4000,
      callback: function ()
      {
        if(alpha3 <= 1){
          alpha3 += 0.008;
          guideWord3.setAlpha(alpha3);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 5000,
      callback: function ()
      {
        if(alpha4 <= 1){
          alpha4 += 0.008;
          guideWord4.setAlpha(alpha4);
          northGate.setAlpha(alpha4);
        }
      },
      callbackScope: this
    });
  }
}

export default GuideScene;
