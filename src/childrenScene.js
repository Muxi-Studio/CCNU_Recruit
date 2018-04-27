import scaleConfig  from './common';
var alpha1 = 0;
var alpha2 = 0;
var background,schoolHouse,coffee,leaves,childWord1, childWord2;
class childrenScene extends Phaser.Scene {
    constructor(){
        super({
            key:'ChildrenScene'
        })
    }
    preload() {
     

    }
    create(){
    background = this.add.sprite(scaleConfig.moveX, scaleConfig.moveY, 'background');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;

    coffee = this.add.sprite(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
    coffee.scaleX = scaleConfig.gamescaleX;
    coffee.scaleY = scaleConfig.gamescaleY;

    leaves = this.add.sprite(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
    leaves.scaleX = scaleConfig.gamescaleX;
    leaves.scaleY = scaleConfig.gamescaleY;
    
    schoolHouse  = this.matter.add.sprite(scaleConfig.gamescaleX*376,scaleConfig.gamescaleY*300,'school-house',null,{friction:0.005, restitution:2});
    // schoolHouse = this.add.sprite(scaleConfig.gamescaleX*376,scaleConfig.gamescaleY*390,'school-house');
    schoolHouse.scaleX = scaleConfig.gamescaleX;
    schoolHouse.scaleY = scaleConfig.gamescaleY;
    this.matter.world.setBounds(0,-scaleConfig.gamescaleY*775,scaleConfig.gamewidth,scaleConfig.gameheight,scaleConfig.gamescaleX*1000, false,false, false, true);

    childWord1 = this.add.sprite(scaleConfig.gamescaleX*382,scaleConfig.gamescaleY*570,'children-word1').setAlpha(0);
    childWord1.scaleX = scaleConfig.gamescaleX;
    childWord1.scaleY = scaleConfig.gamescaleY;
    
    childWord2 = this.add.sprite(scaleConfig.gamescaleX*382,scaleConfig.gamescaleY*900,'children-word2').setAlpha(0);
    childWord2.scaleX = scaleConfig.gamescaleX;
    childWord2.scaleY = scaleConfig.gamescaleY; 

    var drag = false;

    this.input.on('pointermove', function() {
      drag = true;
    }, this)

    this.input.on('pointerup', function() {
      if (drag) {
        this.scene.start('FutureScene');
      }
    }, this);
  
    }
    update(){
        
        this.time.addEvent({
            delay: 1000,
            callback: function ()
            {
                if(alpha1<=1){
                    alpha1 += 0.008;
                    childWord1.setAlpha(alpha1);
                }
            },
            callbackScope: this,
            
        });
        this.time.addEvent({
            delay: 3000,
            callback: function ()
            {
                if(alpha2<=1){
                    alpha2 += 0.008;
                    childWord2.setAlpha(alpha2);
                }
            },
            callbackScope: this,
            
        });
    }
}
export default childrenScene;