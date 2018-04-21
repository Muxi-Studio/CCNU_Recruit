
import scaleConfig  from './common'
class welfareScene extends Phaser.Scene{
    constructor(){
        super({
            key:"recruitScene"
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
        
    }
}
export default Recruit;