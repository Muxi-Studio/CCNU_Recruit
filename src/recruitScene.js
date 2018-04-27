import scaleConfig  from './common';
var alpha1 = 0;
var alpha2 = 0;
var alpha3 = 0;
var alpha4 = 0;
var background,leaves,coffee,recruitLight,recruitWord1,recruitWord2,recruitWord3,recruitWord4;

;
class childrenScene extends Phaser.Scene {
    constructor(){
        super({
            key:'RecruitScene'
        })
    }
    preload() {
     

    }
    create(){
    background = this.add.sprite(scaleConfig.moveX, scaleConfig.moveY, 'background');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;

    coffee = this.add.image(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
    coffee.scaleX = scaleConfig.gamescaleX;
    coffee.scaleY = scaleConfig.gamescaleY;

    recruitLight = this.add.sprite(170 * scaleConfig.gamescaleX, 1130 * scaleConfig.gamescaleY, 'recruit-light');
    recruitLight.scaleX = scaleConfig.gamescaleX;
    recruitLight.scaleY = scaleConfig.gamescaleY;

    leaves = this.add.sprite(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
    leaves.scaleX = scaleConfig.gamescaleX;
    leaves.scaleY = scaleConfig.gamescaleY;
    
   

    recruitWord1 = this.add.sprite(scaleConfig.gamescaleX*378,scaleConfig.gamescaleY*504,'recruit-word1').setAlpha(0);
    recruitWord1.scaleX = scaleConfig.gamescaleX;
    recruitWord1.scaleY = scaleConfig.gamescaleY;
    
    recruitWord2 = this.add.sprite(scaleConfig.gamescaleX*378,scaleConfig.gamescaleY*624,'recruit-word2').setAlpha(0);
    recruitWord2.scaleX = scaleConfig.gamescaleX;
    recruitWord2.scaleY = scaleConfig.gamescaleY;

    recruitWord3 = this.add.sprite(scaleConfig.gamescaleX*378,scaleConfig.gamescaleY*722,'recruit-word3').setAlpha(0);
    recruitWord3.scaleX = scaleConfig.gamescaleX;
    recruitWord3.scaleY = scaleConfig.gamescaleY;

    recruitWord4 = this.add.sprite(scaleConfig.gamescaleX*378,scaleConfig.gamescaleY*874,'recruit-word4').setAlpha(0);
    recruitWord4.scaleX = scaleConfig.gamescaleX;
    recruitWord4.scaleY = scaleConfig.gamescaleY;
    var drag = false;

    this.input.on('pointermove', function() {
      drag = true;
    }, this)

    this.input.on('pointerup', function() {
        this.scene.start('ChildrenScene');
    }, this);
  
    }
    update(){
        coffee.rotation += 0.01;
        if (leaves.rotation < 0.4) leaves.rotation += 0.005;
        this.time.addEvent({
            delay: 1000,
            callback: function ()
            {
                if(alpha1<=1){
                    alpha1 += 0.008;
                    recruitWord1.setAlpha(alpha1);
                }
            },
            callbackScope: this,
            
        });
        this.time.addEvent({
            delay: 2000,
            callback: function ()
            {
                if(alpha2<=1){
                    alpha2 += 0.008;
                    recruitWord2.setAlpha(alpha2);
                }
            },
            callbackScope: this,
            
        });
        this.time.addEvent({
            delay: 3000,
            callback: function ()
            {
                if(alpha3<=1){
                    alpha3 += 0.008;
                    recruitWord3.setAlpha(alpha3);
                }
            },
            callbackScope: this,
            
        });
        this.time.addEvent({
            delay: 4000,
            callback: function ()
            {
                if(alpha4<=1){
                    alpha4 += 0.008;
                    recruitWord4.setAlpha(alpha4);
                }
            },
            callbackScope: this,
            
        });
    }
}
export default childrenScene;