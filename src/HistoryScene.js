import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

var coffee, leaves, historyWord1, historyWord2, historyPhoto1, historyPhoto2, historyPhoto3, historyPhoto4,historyPhoto5,historyPhoto6;
var alpha1 = 0;
var alpha2 = 0;
var alpha3 = 0;
var alpha4 = 0;
var alpha5 = 0;
var alpha6 = 0;
var alpha7 = 0;
var alpha8 = 0;

class HistoryScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'HistoryScene'
    });
  }
  preload() {
    // this.load.image('background','http://p688ihx0v.bkt.clouddn.com/background.png');
    // this.load.image('coffee', 'http://p688ihx0v.bkt.clouddn.com/coffee.png');
    // this.load.image('leaves', 'http://p688ihx0v.bkt.clouddn.com/leaves.png');
    this.load.image('historyWord1', 'http://p688ihx0v.bkt.clouddn.com/historyWord1.png');
    this.load.image('historyWord2', 'http://p688ihx0v.bkt.clouddn.com/historyWord2.png');
    this.load.image('historyPhoto1', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto1.png');
    this.load.image('historyPhoto2', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto2.png');
    this.load.image('historyPhoto3', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto3.png');
    this.load.image('historyPhoto4', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto4.png');
    this.load.image('historyPhoto5', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto5.png');
    this.load.image('historyPhoto6', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto6.png');
  }

  create() {
    // let background = this.add.image(scaleConfig.moveX, scaleConfig.moveY, 'background');
    // background.scaleX = scaleConfig.gamescaleX;
    // background.scaleY = scaleConfig.gamescaleY;

    // coffee = this.add.image(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
    // coffee.scaleX = scaleConfig.gamescaleX;
    // coffee.scaleY = scaleConfig.gamescaleY;

    // leaves = this.add.image(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
    // leaves.scaleX = scaleConfig.gamescaleX;
    // leaves.scaleY = scaleConfig.gamescaleY;

    historyWord1 = this.add.sprite(scaleConfig.moveX, 315 * scaleConfig.gamescaleY, 'historyWord1').setAlpha(0);
    historyWord1.scaleX = scaleConfig.gamescaleX;
    historyWord1.scaleY = scaleConfig.gamescaleY;

    historyWord2 = this.add.sprite(scaleConfig.moveX, 490 * scaleConfig.gamescaleY, 'historyWord2').setAlpha(0);
    historyWord2.scaleX = scaleConfig.gamescaleX;
    historyWord2.scaleY = scaleConfig.gamescaleY;

    historyPhoto1 = this.add.sprite(338 * scaleConfig.gamescaleX, 845 * scaleConfig.gamescaleY, 'historyPhoto1').setAlpha(0);
    historyPhoto1.scaleX = scaleConfig.gamescaleX;
    historyPhoto1.scaleY = scaleConfig.gamescaleY;

    historyPhoto2 = this.add.sprite(375 * scaleConfig.gamescaleX, 845 * scaleConfig.gamescaleY, 'historyPhoto2').setAlpha(0);
    historyPhoto2.scaleX = scaleConfig.gamescaleX;
    historyPhoto2.scaleY = scaleConfig.gamescaleY;

    historyPhoto3 = this.add.sprite(scaleConfig.moveX, 845 * scaleConfig.gamescaleY, 'historyPhoto3').setAlpha(0);
    historyPhoto3.scaleX = scaleConfig.gamescaleX;
    historyPhoto3.scaleY = scaleConfig.gamescaleY;

    historyPhoto4 = this.add.sprite(scaleConfig.moveX, 902 * scaleConfig.gamescaleY, 'historyPhoto4').setAlpha(0);
    historyPhoto4.scaleX = scaleConfig.gamescaleX;
    historyPhoto4.scaleY = scaleConfig.gamescaleY;

    historyPhoto5 = this.add.sprite(390 * scaleConfig.gamescaleX, 872 * scaleConfig.gamescaleY, 'historyPhoto5').setAlpha(0);
    historyPhoto5.scaleX = scaleConfig.gamescaleX;
    historyPhoto5.scaleY = scaleConfig.gamescaleY;

    historyPhoto6 = this.add.sprite(338 * scaleConfig.gamescaleX, 896 * scaleConfig.gamescaleY, 'historyPhoto6').setAlpha(0);
    historyPhoto6.scaleX = scaleConfig.gamescaleX;
    historyPhoto6.scaleY = scaleConfig.gamescaleY;

    var drag = false;

    this.input.on('pointermove', function() {
      drag = true;
    }, this)

    this.input.on('pointerup', function() {
      if (drag) {
        historyWord1.destroy();
        historyWord2.destroy();
        historyPhoto1.destroy();
        historyPhoto2.destroy();
        historyPhoto3.destroy();
        historyPhoto4.destroy();
        historyPhoto5.destroy();
        historyPhoto6.destroy();
        this.scene.launch('childrenScene');
      }
    }, this);
  }

  update() {
    // coffee.rotation += 0.01;
    // if (leaves.rotation < 0.4) leaves.rotation += 0.005;
    

    this.time.addEvent({
      delay: 1000,
      callback: function ()
      {
        if(alpha1 <= 1){
          alpha1 += 0.008;
          historyWord1.setAlpha(alpha1);
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
          historyWord2.setAlpha(alpha2);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 3500,
      callback: function ()
      {
        if(alpha3 <= 1){
          alpha3 += 0.015;
          historyPhoto1.setAlpha(alpha3);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 5500,
      callback: function ()
      {
        if(alpha4 <= 1){
          alpha4 += 0.015;
          historyPhoto2.setAlpha(alpha4);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 7500,
      callback: function ()
      {
        if(alpha5 <= 1){
          alpha5 += 0.015;
          historyPhoto3.setAlpha(alpha5);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 9500,
      callback: function ()
      {
        if(alpha6 <= 1){
          alpha6 += 0.015;
          historyPhoto4.setAlpha(alpha6);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 11500,
      callback: function ()
      {
        if(alpha7 <= 1){
          alpha7 += 0.015;
          historyPhoto5.setAlpha(alpha7);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 13500,
      callback: function ()
      {
        if(alpha8 <= 1){
          alpha8 += 0.015;
          historyPhoto6.setAlpha(alpha8);
        }
      },
      callbackScope: this
    });
  }
}

export default HistoryScene;
