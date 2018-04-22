
import scaleConfig  from './common'
let welfareWord ;
let alpha = 0;
class welfareScene extends Phaser.Scene{
    constructor(){
        super({
            key:"welfareScenen",
           
        });
       
    }
    preload() {
        this.load.image('all-background','../assests/background.png');
        this.load.image('all-coffee','../assests/coffee.png');
        this.load.image('all-leaves','../assests/leaves.png');
        this.load.image('welfare-gold','../assests/welfareGold.png');
        this.load.image('welfare-word','../assests/welfareWord.png');
    }
    create() {
        //设置位置和图片缩放比例
       
        let background = this.add.image(scaleConfig.moveX,scaleConfig.moveY,'all-background');
        background.scaleX = scaleConfig.gamescaleX;
        background.scaleY = scaleConfig.gamescaleY;
        // top:790 left:380
        let welfareGold = this.matter.add.image(scaleConfig.gamescaleX*360,scaleConfig.gamescaleY*500,'welfare-gold',null,{friction:0.005, restitution:1});
        welfareGold.scaleX = scaleConfig.gamescaleX;
        welfareGold.scaleY = scaleConfig.gamescaleY;
        this.matter.world.setBounds(0,-scaleConfig.gameheight+scaleConfig.gamescaleY*890,scaleConfig.gamewidth,scaleConfig.gameheight,scaleConfig.gamescaleX*1000, false,false, false, true);
        welfareWord = this.add.image(scaleConfig.gamescaleX*380,scaleConfig.gamescaleY*550,'welfare-word').setAlpha(0);
        welfareWord.scaleX = scaleConfig.gamescaleX;
        welfareWord.scaleY = scaleConfig.gamescaleY;
    }
    update(){
        
        this.time.addEvent({
            delay: 1000,
            callback: function ()
            {
                if(alpha<=1){
                    alpha += 0.008;
                    welfareWord.setAlpha(alpha);
                }
            },
            callbackScope: this,
            
        });
        // this.time.addEvent({
        //     delay: 2000,
        //     callback: function ()
        //     {
        //         if(alpha<=1){
        //             alpha += 0.008;
        //             welfareWord2.setAlpha(alpha);
        //         }
        //     },
        //     callbackScope: this,
            
        // });
    }
}
export default welfareScene;