
import scaleConfig  from './common'
import { WSATYPE_NOT_FOUND } from 'constants';
var schoolGate,waterMark,futureWord1,futureWord2;
var background,coffee,leaves;
var alphaM , alpha1 ,alpha2 , alpha3;
alphaM = alpha1 = alpha2 = alpha3 = 0;
class futureScene extends Phaser.Scene{
    constructor(){
        super({
            key:"futureScene"
        });
    }

    preload() {
        this.load.image('background','http://p688ihx0v.bkt.clouddn.com/background.png');
        this.load.image('coffee','http://p688ihx0v.bkt.clouddn.com/coffee.png');
        this.load.image('water-mark','http://p688ihx0v.bkt.clouddn.com/waterMark.png');
        this.load.image('school-gate','http://p688ihx0v.bkt.clouddn.com/schoolGate.png');
        this.load.image('future-word1','http://p688ihx0v.bkt.clouddn.com/future-word1.png');
        this.load.image('future-word2','http://p688ihx0v.bkt.clouddn.com/future-word2.png');
        this.load.image('future-word3','http://p688ihx0v.bkt.clouddn.com/future-word3.png');

    }
    create() {
        //设置位置和图片缩放比例
        background = this.add.sprite(scaleConfig.moveX, scaleConfig.moveY, 'background');
        background.scaleX = scaleConfig.gamescaleX;
        background.scaleY = scaleConfig.gamescaleY;
    
        coffee = this.add.sprite(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
        coffee.scaleX = scaleConfig.gamescaleX;
        coffee.scaleY = scaleConfig.gamescaleY;
    
        leaves = this.add.sprite(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
        leaves.scaleX = scaleConfig.gamescaleX;
        leaves.scaleY = scaleConfig.gamescaleY;
        
        futureWord1 = this.add.sprite(scaleConfig.gamescaleX*384,scaleConfig.gamescaleY*308,'future-word1').setAlpha(0);
        futureWord1.scaleX = scaleConfig.gamescaleX;
        futureWord1.scaleY = scaleConfig.gamescaleY;
    
        futureWord2 = this.add.sprite(scaleConfig.gamescaleX*384,scaleConfig.gamescaleY*468,'future-word2').setAlpha(0);
        futureWord2.scaleX = scaleConfig.gamescaleX;
        futureWord2.scaleY = scaleConfig.gamescaleY;
    
        waterMark = this.add.sprite(scaleConfig.gamescaleX*176,scaleConfig.gamescaleY*957,'water-mark').setAlpha(0);
        waterMark.scaleX = scaleConfig.gamescaleX;
        waterMark.scaleY = scaleConfig.gamescaleY;
    
        schoolGate = this.add.sprite(scaleConfig.gamescaleX*384,scaleConfig.gamescaleY*816,'school-gate').setAlpha(0);
        schoolGate.scaleX = scaleConfig.gamescaleX;
        schoolGate.scaleY = scaleConfig.gamescaleY;

    }
    update(){
        this.time.addEvent({
            delay: 1000,
            callback: function ()
            {
                if(alpha1<=1){
                    alpha1 += 0.008;
                   futureWord1.setAlpha(alpha1);
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
                    futureWord2.setAlpha(alpha2);
                }
            },
            callbackScope: this,    
        });
        this.time.addEvent({
            delay: 3000,
            callback: function ()
            {
                if(alphaC <=1){
                    alphaC += 0.008;
                    schoolGate.setAlpha(alphaC);
                }
            },
            callbackScope: this,    
        });
        this.time.addEvent({
            delay: 4000,
            callback: function ()
            {
                if(alpha3<=1){
                    alpha3 += 0.008;
                    waterMark.setAlpha(alpha3);
                }
            },
            callbackScope: this,    
        }); 
    }
    
}
export default futureScene;