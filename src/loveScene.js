import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

var art, road, tree, loveWord1, loveWord2, loveWord3,background,coffee,leaves;
var alpha1 = 0;
var alpha2 = 0;
var alpha3 = 0;

class LoveScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'LoveScene'
    });
  }
  preload() {

  }
  create() {

    var background = this.add.image(scaleConfig.moveX, scaleConfig.moveY, 'background');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;

    coffee = this.add.image(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
    coffee.scaleX = scaleConfig.gamescaleX;
    coffee.scaleY = scaleConfig.gamescaleY;

    leaves = this.add.image(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
    leaves.scaleX = scaleConfig.gamescaleX;
    leaves.scaleY = scaleConfig.gamescaleY;




    loveWord1 = this.add.sprite(scaleConfig.moveX, 389 * scaleConfig.gamescaleY, 'loveWord1').setAlpha(0);
    loveWord1.scaleX = scaleConfig.gamescaleX;
    loveWord1.scaleY = scaleConfig.gamescaleY;

    road = this.add.sprite(0, 0, 'road').setOrigin(0);
    road.setAlpha(0);
    road.scaleX = scaleConfig.gamescaleX;
    road.scaleY = scaleConfig.gamescaleY;

    loveWord2 = this.add.sprite(scaleConfig.moveX, 715 * scaleConfig.gamescaleY, 'loveWord2').setAlpha(0);
    loveWord2.scaleX = scaleConfig.gamescaleX;
    loveWord2.scaleY = scaleConfig.gamescaleY;

    art = this.add.sprite(545 * scaleConfig.gamescaleX, 0, 'art').setOrigin(0);
    art.setAlpha(0);
    art.scaleX = scaleConfig.gamescaleX;
    art.scaleY = scaleConfig.gamescaleY;

    loveWord3 = this.add.sprite(scaleConfig.moveX, 1010 * scaleConfig.gamescaleY, 'loveWord3').setAlpha(0);
    loveWord3.scaleX = scaleConfig.gamescaleX;
    loveWord3.scaleY = scaleConfig.gamescaleY;

    tree = this.add.sprite(0, 0, 'tree').setOrigin(0);
    tree.setAlpha(0);
    tree.scaleX = scaleConfig.gamescaleX;
    tree.scaleY = scaleConfig.gamescaleY;

    let drag = false;

    this.input.on('pointermove', function() {
      drag = true;
    }, this)

    // this.input.on('pointerup', function() {
    //   if (drag) {
    //     loveWord1.destroy();
    //     road.destroy();
    //     loveWord2.destroy();
    //     art.destroy();
    //     loveWord3.destroy();
    //     tree.destroy();
    //     this.scene.launch('HistoryScene');
    //   }
    // }, this)
    // this.input.once('pointerdown', function () {
    //   loveWord1.destroy();
    //   road.destroy();
    //   loveWord2.destroy();
    //   art.destroy();
    //   loveWord3.destroy();
    //   tree.destroy();
    //   this.scene.launch('HistoryScene');
    // }, this);
    this.input.on('pointerup', function() {
      if (drag) {
        
        this.scene.start('HistoryScene');
      }
    }, this)
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
          loveWord1.setAlpha(alpha1);
          road.setAlpha(alpha1);
          if (road.y <= 266 * scaleConfig.gamescaleY) road.y += 2;
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
          loveWord2.setAlpha(alpha2);
          art.setAlpha(alpha2);
          if (art.y <= 650 * scaleConfig.gamescaleY) art.y += 3;
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
          loveWord3.setAlpha(alpha3);
          tree.setAlpha(alpha3);
          if (tree.y <= 980 * scaleConfig.gamescaleY) tree.y += 4;
        }
      },
      callbackScope: this
    });
  }
}

export default LoveScene;
