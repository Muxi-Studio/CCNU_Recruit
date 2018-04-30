import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

// var coffee, leaves, dinner, packageImage, northGate, guideWord1, guideWord2, guideWord3, guideWord4, background;
var alphaW1,alphaW2,alphaW3,alphaW4,alphaG,alphaR;
alphaW1=alphaW2=alphaW3=alphaW4=alphaR=alphaG=0;
var slideFlag = false;

var coffee,background,leaves;
var love1Word1,love1Word2,love1Word3,love1Word4;
var love1Tree,love1Red;

class love1Scene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Love1Scene',
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

    love1Word1 = this.add.sprite(scaleConfig.moveX - scaleConfig.gamescaleX*10, 378 * scaleConfig.gamescaleY, 'love1Word1').setAlpha(0);
    love1Word1.scaleX = scaleConfig.gamescaleX;
    love1Word1.scaleY = scaleConfig.gamescaleY;

    love1Word2 = this.add.sprite(scaleConfig.moveX , 434 * scaleConfig.gamescaleY, 'love1Word2').setAlpha(0);
    love1Word2.scaleX = scaleConfig.gamescaleX;
    love1Word2.scaleY = scaleConfig.gamescaleY;

    love1Word3 = this.add.sprite(scaleConfig.moveX , 577 * scaleConfig.gamescaleY, 'love1Word3').setAlpha(0);
    love1Word3.scaleX = scaleConfig.gamescaleX;
    love1Word3.scaleY = scaleConfig.gamescaleY;


    love1Word4 = this.add.sprite(scaleConfig.moveX, 758 * scaleConfig.gamescaleY, 'love1Word4').setAlpha(0);
    love1Word4.scaleX = scaleConfig.gamescaleX;
    love1Word4.scaleY = scaleConfig.gamescaleY;

    love1Red = this.add.sprite(scaleConfig.gamescaleX*135,0,'tree').setAlpha(0);
    love1Red.scaleX = scaleConfig.gamescaleX;
    love1Red.scaleY = scaleConfig.gamescaleY;

    love1Tree = this.add.sprite(scaleConfig.gamescaleX*224,0,'road').setAlpha(0);
    love1Tree.scaleX = scaleConfig.gamescaleX;
    love1Tree.scaleY = scaleConfig.gamescaleY;

   
    let drag = false;

    this.input.on('pointermove', function() {
      drag = true;
    }, this)

    this.input.on('pointerup', function() {
      if (drag && slideFlag) {
        this.scene.start('Love2Scene');
       // this.scene.start('TeacherScene');
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
          love1Word1.setAlpha(alphaW1);
        
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
          love1Word2.setAlpha(alphaW2);
        
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
          love1Word3.setAlpha(alphaW3);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 7000,
      callback: function ()
      {
        if(alphaW4 <= 1){
          alphaW4 += 0.008;
          love1Word4.setAlpha(alphaW4);
         
        }
      
      },
      callbackScope: this
    });

    this.time.addEvent({
        delay: 9000,
        callback: function ()
        {
          if(alphaR <= 1){
            alphaR += 0.008;
            love1Red.setAlpha(alphaR);
          }
            if (love1Red.y <= 1069 * scaleConfig.gamescaleY ) 
                  love1Red.y += 4;
        },
        callbackScope: this
      });
      this.time.addEvent({
        delay: 11000,
        callback: function ()
        {
          if(alphaG <= 1){
            alphaG += 0.008;
            love1Tree.setAlpha(alphaG);
          }
        if (love1Tree.y <= 1069 * scaleConfig.gamescaleY) 
                 love1Tree.y += 4;
        else {
            slideFlag = true;
        }

        },
        callbackScope: this
      });
  

    this.time.addEvent({
      delay: 14000,
      callback: function ()
      {
         this.scene.start('Love2Scene');
      },
      callbackScope: this
    });

   }
}

export default love1Scene;
