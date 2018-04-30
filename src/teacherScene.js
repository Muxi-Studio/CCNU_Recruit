import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';


var coffee, leaves, teacherWord1,teacherWord2, teacherWord3,teacherWord4;
var alpha1 = 0;
var alpha2 = 0;
var alpha3 = 0;
var alpha4 = 0;
var alphaH = 0;
var slideFlag = false;
var hat;



class TeacherScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'TeacherScene',
      
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


    
    hat = this.add.sprite(scaleConfig.moveX+25*scaleConfig.gamescaleX, 1054 * scaleConfig.gamescaleY, 'hat').setAlpha(0);
    hat.scaleX = scaleConfig.gamescaleX;
    hat.scaleY = scaleConfig.gamescaleY;

    teacherWord1 = this.add.sprite(scaleConfig.moveX+25*scaleConfig.gamescaleX, 349 * scaleConfig.gamescaleY, 'teacherWord1').setAlpha(0);
    teacherWord1.scaleX = scaleConfig.gamescaleX;
    teacherWord1.scaleY = scaleConfig.gamescaleY;

    teacherWord2 = this.add.sprite(scaleConfig.moveX+30*scaleConfig.gamescaleX, 423 * scaleConfig.gamescaleY, 'teacherWord2').setAlpha(0);
    teacherWord2.scaleX = scaleConfig.gamescaleX;
    teacherWord2.scaleY = scaleConfig.gamescaleY;

    teacherWord3 = this.add.sprite(scaleConfig.moveX+25*scaleConfig.gamescaleX,   624 * scaleConfig.gamescaleY, 'teacherWord3').setAlpha(0);
    teacherWord3.scaleX = scaleConfig.gamescaleX;
    teacherWord3.scaleY = scaleConfig.gamescaleY;

    teacherWord4 = this.add.sprite(scaleConfig.moveX+25*scaleConfig.gamescaleX, 812 * scaleConfig.gamescaleY, 'teacherWord4').setAlpha(0);
    teacherWord4.scaleX = scaleConfig.gamescaleX;
    teacherWord4.scaleY = scaleConfig.gamescaleY;

    let drag = false;
    this.input.on('pointermove', function() {
      drag = true;
    }, this)

    this.input.on('pointerup', function() {
      if (drag && slideFlag) {
       
        this.scene.start('Love1Scene');
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
    this.time.addEvent({
      delay: 7000,
      callback: function ()
      {
        if(alpha4 <= 1){
          alpha4 += 0.008;
          teacherWord4.setAlpha(alpha4);
        }
      
      },
      callbackScope: this
    });


    this.time.addEvent({
      delay: 10000,
      callback: function ()
      {
        if(alpha4 <= 1){
          alpha4 += 0.008;
          teacherWord4.setAlpha(alpha4);
        }
        
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 12000,
      callback: function ()
      {
        if(alphaH <= 1){
          alphaH += 0.008;
          hat.setAlpha(alphaH);
        }
        if(alphaH>=1){
          slideFlag = true;
        }
      },
      callbackScope: this
    });


    this.time.addEvent({
      delay: 15000,
      callback: function ()
      {
        this.scene.start('Love1Scene');
      },
      callbackScope: this
    });
  }
}

export default TeacherScene;
