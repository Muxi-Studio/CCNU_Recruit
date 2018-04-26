import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

var coffee, leaves, teacherWord1,teacherWord2, teacherWord3;
var alpha1 = 0;
var alpha2 = 0;
var alpha3 = 0;


class TeacherScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'TeacherScene'
    });
  }
  preload() {
    this.load.image('hat', 'http://p688ihx0v.bkt.clouddn.com/hat.png');
    this.load.image('teacherWord1', 'http://p688ihx0v.bkt.clouddn.com/teacherWord1.png');
    this.load.image('teacherWord2', 'http://p688ihx0v.bkt.clouddn.com/teacherWord2.png');
    this.load.image('teacherWord3', 'http://p688ihx0v.bkt.clouddn.com/teacherWord3.png');
  }
  create() { 
    var hat = this.add.sprite(230 * scaleConfig.gamescaleX, 1063 * scaleConfig.gamescaleY, 'hat');
    hat.scaleX = scaleConfig.gamescaleX;
    hat.scaleY = scaleConfig.gamescaleY;

    teacherWord1 = this.add.sprite(scaleConfig.moveX, 349 * scaleConfig.gamescaleY, 'teacherWord1').setAlpha(0);
    teacherWord1.scaleX = scaleConfig.gamescaleX;
    teacherWord1.scaleY = scaleConfig.gamescaleY;

    teacherWord2 = this.add.sprite(scaleConfig.moveX, 685 * scaleConfig.gamescaleY, 'teacherWord2').setAlpha(0);
    teacherWord2.scaleX = scaleConfig.gamescaleX;
    teacherWord2.scaleY = scaleConfig.gamescaleY;

    teacherWord3 = this.add.sprite(scaleConfig.moveX, 1044 * scaleConfig.gamescaleY, 'teacherWord3').setAlpha(0);
    teacherWord3.scaleX = scaleConfig.gamescaleX;
    teacherWord3.scaleY = scaleConfig.gamescaleY;

    // let drag = false;
    // this.input.on('pointermove', function() {
    //   drag = true;
    // }, this)

    // this.input.on('pointerup', function() {
    //   if (drag) {
    //     hat.destroy();
    //     teacherWord1.destroy();
    //     teacherWord2.destroy();
    //     teacherWord3.destroy();
    //     this.scene.launch('LoveScene');
    //   }
    // }, this)
    this.input.on('pointerdown', function(){
      hat.destroy();
      teacherWord1.destroy();
      teacherWord2.destroy();
      teacherWord3.destroy();
      this.scene.launch('LoveScene');
    }, this)
  }

  update() {
    this.time.addEvent({
      delay: 1000,
      callback: function ()
      {
        if(alpha1 <= 1){
          alpha1 += 0.008;
          teacherWord1.setAlpha(alpha1);
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
          teacherWord2.setAlpha(alpha2);
        }
      },
      callbackScope: this
    });
    this.time.addEvent({
      delay: 5000,
      callback: function ()
      {
        if(alpha3 <= 1){
          alpha3 += 0.008;
          teacherWord3.setAlpha(alpha3);
        }
      },
      callbackScope: this
    });
  }
}

export default TeacherScene;
