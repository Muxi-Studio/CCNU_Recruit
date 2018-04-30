import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';


var alphaW1,alphaW2,alphaW3,alphaW4,alphaE,alphaL,alphaG;
alphaW1=alphaW2=alphaW3=alphaW4=alphaE=alphaL=alphaG=0;
var slideFlag = false,rotaFlag = 0;
var coffee,background,leaves;
var guide2Word1,guide2Word2,guide2Word3,guide2Word4;
var guide2Eat,guide2Lib,guide2Gar;
class Guide2Scene extends Phaser.Scene {
  constructor(load) {
   
    super({
      key: 'Guide2Scene',
      
      
    });
  }
  preload() {
   
  }
  
  create() {
   
    background = this.add.image(scaleConfig.moveX, scaleConfig.moveY, 'background');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;

    coffee = this.add.image(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
    coffee.scaleX = scaleConfig.gamescaleX;
    coffee.scaleY = scaleConfig.gamescaleY;

    leaves = this.add.image(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
    leaves.scaleX = scaleConfig.gamescaleX;
    leaves.scaleY = scaleConfig.gamescaleY;

    guide2Word1 = this.add.sprite(scaleConfig.moveX , 348 * scaleConfig.gamescaleY, 'guide2Word1').setAlpha(0);
    guide2Word1.scaleX = scaleConfig.gamescaleX;
    guide2Word1.scaleY = scaleConfig.gamescaleY;

    guide2Word2 = this.add.sprite(scaleConfig.moveX , 451 * scaleConfig.gamescaleY, 'guide2Word2').setAlpha(0);
    guide2Word2.scaleX = scaleConfig.gamescaleX;
    guide2Word2.scaleY = scaleConfig.gamescaleY;

    guide2Word3 = this.add.sprite(scaleConfig.moveX, 638 * scaleConfig.gamescaleY, 'guide2Word3').setAlpha(0);
    guide2Word3.scaleX = scaleConfig.gamescaleX;
    guide2Word3.scaleY = scaleConfig.gamescaleY;

    guide2Eat = this.add.sprite(scaleConfig.moveX ,780 * scaleConfig.gamescaleY,'guide2Eat').setAlpha(0);
    guide2Eat.scaleX = scaleConfig.gamescaleX;
    guide2Eat.scaleY = scaleConfig.gamescaleY;


    guide2Word4 = this.add.sprite(scaleConfig.moveX , 908 * scaleConfig.gamescaleY, 'guide2Word4').setAlpha(0);
    guide2Word4.scaleX = scaleConfig.gamescaleX;
    guide2Word4.scaleY = scaleConfig.gamescaleY;

    guide2Lib = this.add.sprite(284*scaleConfig.gamescaleX, 0, 'guide2Lib').setOrigin(0);
    guide2Lib.setAlpha(0);
    guide2Lib.scaleX = scaleConfig.gamescaleX;
    guide2Lib.scaleY = scaleConfig.gamescaleY;

    guide2Gar = this.add.sprite(0, 0, 'guide2Gar').setOrigin(0);
    guide2Gar.setAlpha(0);
    guide2Gar.scaleX = scaleConfig.gamescaleX;
    guide2Gar.scaleY = scaleConfig.gamescaleY;

    let drag = false;

    this.input.on('pointermove', function() {
      drag = true;
    }, this)

    this.input.on('pointerup', function() {
      if (drag && slideFlag) {
        
        this.scene.start('TeacherScene');
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
        if(alphaW1 <= 1){
          alphaW1 += 0.008;
          guide2Word1.setAlpha(alphaW1);
        
        }
      },
      callbackScope: this
    });


    this.time.addEvent({
      delay: 3000,
      callback: function ()
      {
        if(alphaW2 <= 1){
          alphaW2 += 0.008;
          guide2Word2.setAlpha(alphaW2);
        
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 5000,
      callback: function ()
      {
        if(alphaW3 <= 1){
          alphaW3 += 0.008;
          guide2Word3.setAlpha(alphaW3);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
        delay: 7000,
        callback: function ()
        {
          if(alphaE <= 1){
            alphaE += 0.008;
            guide2Eat.setAlpha(alphaE);
           
          }
        
        },
        callbackScope: this
      });

    this.time.addEvent({
      delay: 9000,
      callback: function ()
      {
        if(alphaW4 <= 1){
          alphaW4 += 0.008;
          guide2Word4.setAlpha(alphaW4);
         
        }
      
      },
      callbackScope: this
    });
    this.time.addEvent({
        delay: 11000,
        callback: function ()
        {
          if(alphaL<= 1){
            alphaL += 0.008;
            guide2Lib.setAlpha(alphaL);
            if (guide2Lib.y <= 1042 * scaleConfig.gamescaleY) 
                  guide2Lib.y += 4;
          }
          
        },
        callbackScope: this
      });
      this.time.addEvent({
        delay: 13000,
        callback: function ()
        {
          if(alphaG<= 1){
            alphaG += 0.008;
            guide2Gar.setAlpha(alphaG);
            if (guide2Gar.y <= 930 * scaleConfig.gamescaleY) 
              guide2Gar.y += 4;
          }
          
        },
        callbackScope: this
      });

    this.time.addEvent({
      delay: 16000,
      callback: function ()
      {
        this.scene.start('TeacherScene');
      },
      callbackScope: this
    });

   }
}

export default Guide2Scene;
