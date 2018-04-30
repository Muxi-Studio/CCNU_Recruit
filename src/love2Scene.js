import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

// var coffee, leaves, dinner, packageImage, northGate, guideWord1, guideWord2, guideWord3, guideWord4, background;
var alphaW1,alphaW2,alphaW3,alphaW4,alphaH10,alphaH3,alphaM;
alphaW1=alphaW2=alphaW3=alphaW4=alphaH10=alphaH3=alphaM=0;
var slideFlag = false;

var coffee,background,leaves;
var love2Word1,love2Word2,love2Word3,love2Word4;
var love2MailTag,love2House10,love2House3;

class love2Scene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Love2Scene',
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

    love2Word1 = this.add.sprite(scaleConfig.moveX-scaleConfig.gamescaleX*20, 400 * scaleConfig.gamescaleY, 'love2Word1').setAlpha(0);
    love2Word1.scaleX = scaleConfig.gamescaleX;
    love2Word1.scaleY = scaleConfig.gamescaleY;

    love2Word2 = this.add.sprite(scaleConfig.moveX + scaleConfig.gamescaleX*10, 550 * scaleConfig.gamescaleY, 'love2Word2').setAlpha(0);
    love2Word2.scaleX = scaleConfig.gamescaleX;
    love2Word2.scaleY = scaleConfig.gamescaleY;

    love2Word3 = this.add.sprite(scaleConfig.moveX, 718* scaleConfig.gamescaleY, 'love2Word3').setAlpha(0);
    love2Word3.scaleX = scaleConfig.gamescaleX;
    love2Word3.scaleY = scaleConfig.gamescaleY;




    

    love2House10 = this.add.sprite(scaleConfig.gamescaleX*126,0,'love2House10').setAlpha(0);
    love2House10.scaleX = scaleConfig.gamescaleX;
    love2House10.scaleY = scaleConfig.gamescaleY;

    love2House3 = this.add.sprite(scaleConfig.gamescaleX*316,0,'love2House3').setAlpha(0);
    love2House3.scaleX = scaleConfig.gamescaleX;
    love2House3.scaleY = scaleConfig.gamescaleY;

    love2MailTag = this.add.sprite(scaleConfig.gamescaleX*107,scaleConfig.gamescaleY*1103,'love2MailTag').setAlpha(0);
    love2MailTag.scaleX = scaleConfig.gamescaleX;
    love2MailTag.scaleY = scaleConfig.gamescaleY;
    let drag = false;

    this.input.on('pointermove', function() {
      drag = true;
    }, this)

    this.input.on('pointerup', function() {
      if (drag && slideFlag) {
       // this.scene.start('love2Scene');
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
        if(alphaW1 <= 1){
          alphaW1 += 0.008;
          love2Word1.setAlpha(alphaW1);
        
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
          love2Word2.setAlpha(alphaW2);
        
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
          love2Word3.setAlpha(alphaW3);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
        delay: 7000,
        callback: function ()
        {
          if(alphaM <= 1){
            alphaM += 0.008;
            love2MailTag.setAlpha(alphaM);
          }
        },
        callbackScope: this
      });

   

    this.time.addEvent({
        delay: 11000,
        callback: function ()
        {
          if (  love2House3.y <= 1069 * scaleConfig.gamescaleY) 
            love2House3.y += 4;


            if(alphaH3 <= 1){
                alphaH3 += 0.008;
                love2House3.setAlpha(alphaH3);
              }
        },
        callbackScope: this
      });
      this.time.addEvent({
        delay: 9000,
        callback: function ()
        {
          
          if(alphaH10 <= 1){
            alphaH10 += 0.008;
            love2House10.setAlpha(alphaH10);
          }
          if (love2House10.y <= 1069 * scaleConfig.gamescaleY) 
          love2House10.y += 4;
          else {
              slideFlag = true;
          }
        },
        callbackScope: this
      });
  

    this.time.addEvent({
      delay: 15000,
      callback: function ()
      {
         this.scene.start('HistoryScene');
      },
      callbackScope: this
    });

   }
}

export default love2Scene;
