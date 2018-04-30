import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

// var coffee, leaves, dinner, packageImage, northGate, guideWord1, guideWord2, guideWord3, guideWord4, background;
var alphaW1,alphaW2,alphaW3,alphaW4,alphaPS,alphaPM,alphaL;
alphaW1=alphaW2=alphaW3=alphaW4=alphaPS=alphaPM=alphaL=0;
var slideFlag = false,rotaFlag = 0;
var coffee,background,leaves;
var guide1Word1,guide1Word2,guide1Word3,guide1Word4;
var guide1Package,guide1MovePackage,guide1ShakeLeaf;
class Guide1Scene extends Phaser.Scene {
  constructor(load) {
   
    super({
      key: 'Guide1Scene',
      
      
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

    guide1Word1 = this.add.sprite(scaleConfig.moveX + 30*scaleConfig.gamescaleX, 390 * scaleConfig.gamescaleY, 'guide1Word1').setAlpha(0);
    guide1Word1.scaleX = scaleConfig.gamescaleX;
    guide1Word1.scaleY = scaleConfig.gamescaleY;

    guide1Word2 = this.add.sprite(scaleConfig.moveX + 30*scaleConfig.gamescaleX, 500 * scaleConfig.gamescaleY, 'guide1Word2').setAlpha(0);
    guide1Word2.scaleX = scaleConfig.gamescaleX;
    guide1Word2.scaleY = scaleConfig.gamescaleY;

    guide1Word3 = this.add.sprite(scaleConfig.moveX + 20*scaleConfig.gamescaleX, 594 * scaleConfig.gamescaleY, 'guide1Word3').setAlpha(0);
    guide1Word3.scaleX = scaleConfig.gamescaleX;
    guide1Word3.scaleY = scaleConfig.gamescaleY;

    guide1Word4 = this.add.sprite(scaleConfig.moveX- 20*scaleConfig.gamescaleX, 722 * scaleConfig.gamescaleY, 'guide1Word4').setAlpha(0);
    guide1Word4.scaleX = scaleConfig.gamescaleX;
    guide1Word4.scaleY = scaleConfig.gamescaleY;

    guide1Package = this.add.sprite(scaleConfig.moveX ,1010 * scaleConfig.gamescaleY,'guide1Package').setAlpha(0);
    guide1Package.scaleX = scaleConfig.gamescaleX;
    guide1Package.scaleY = scaleConfig.gamescaleY;

    guide1ShakeLeaf = this.add.sprite(224*scaleConfig.gamescaleX,950 * scaleConfig.gamescaleY,'guide1ShakeLeaf').setAlpha(0);
    guide1ShakeLeaf.scaleX = scaleConfig.gamescaleX;
    guide1ShakeLeaf.scaleY = scaleConfig.gamescaleY;

    guide1MovePackage = this.add.sprite(scaleConfig.moveX,900 * scaleConfig.gamescaleY,'guide1MovePackage').setAlpha(0);
    guide1MovePackage.scaleX = scaleConfig.gamescaleX;
    guide1MovePackage.scaleY = scaleConfig.gamescaleY;

    let drag = false;

    this.input.on('pointermove', function() {
      drag = true;
    }, this)

    this.input.on('pointerup', function() {
      if (drag && slideFlag) {
        this.scene.start('Guide2Scene');
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
          guide1Word1.setAlpha(alphaW1);
        
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 2000,
      callback: function ()
      {
        if(alphaW2 <= 1){
          alphaW2 += 0.008;
          guide1Word2.setAlpha(alphaW2);
        
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 3000,
      callback: function ()
      {
        if(alphaW3 <= 1){
          alphaW3 += 0.008;
          guide1Word3.setAlpha(alphaW3);
        }
      },
      callbackScope: this
    });

    this.time.addEvent({
      delay: 4000,
      callback: function ()
      {
        if(alphaW4 <= 1){
          alphaW4 += 0.008;
          guide1Word4.setAlpha(alphaW4);
         
        }
      
      },
      callbackScope: this
    });

    this.time.addEvent({
        delay: 5000,
        callback: function ()
        {
          if(alphaPS <= 1){
            alphaPS += 0.008;
            guide1Package.setAlpha(alphaPS);
            guide1ShakeLeaf.setAlpha(alphaPS);
          }

          if(alphaPS>=1&&rotaFlag==0){
              
            guide1ShakeLeaf.rotation +=0.005;
          
            if(guide1ShakeLeaf.rotation>=0.3){
               
                rotaFlag = 1;
            }
          }else if(alphaPS>=1&&rotaFlag==1){
  
            guide1ShakeLeaf.rotation -=0.005;
            if(guide1ShakeLeaf.rotation<=-0.3){
                rotaFlag = 0;
            }
          }
         
        },
        callbackScope: this
      });
      this.time.addEvent({
        delay: 5500,
        callback: function ()
        {
          if(alphaPM <= 1){
            alphaPM += 0.008;
            guide1MovePackage.setAlpha(alphaPM);
           
          }
        //   console.log(guide1MovePackage.x)
        //   console.log(scaleConfig.moveX+20*scaleConfig.gamescaleX)
          if ( alphaPM >=1 && guide1MovePackage.x <=scaleConfig.moveX+25*scaleConfig.gamescaleX){
                guide1MovePackage.x += 2 * scaleConfig.gamescaleX
                  }
         if(alphaPM>=1){
            slideFlag = true;
          }
        },
        callbackScope: this
      });
  

    this.time.addEvent({
      delay: 8500,
      callback: function ()
      {
         this.scene.start('Guide2Scene');
     //   this.scene.start('TeacherScene');
      },
      callbackScope: this
    });

   }
}

export default Guide1Scene;
