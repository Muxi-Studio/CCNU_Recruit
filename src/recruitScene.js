
import scaleConfig  from './common'
class Recruit extends Phaser.Scene{
    constructor(){
        super({
            key:"recruitScene"
        });
    }

    preload() {
        this.load.image('all-background','../assets/background.png');
        this.load.image('all-coffee','../assets/coffee.png');
        this.load.image('all-leaves','../assets/leaves.png');
        this.load.image('6-1','../assets/6-1.png');
        this.load.image('6-2','../assets/6-2.png');
        this.load.image('6-3','../assets/6-3.png');
        this.load.image('6-4','../assets/6-4.png');
        this.load.image('6-5','../assets/6-5.png');
        this.load.image('6-6','../assets/6-6.png');
    }
    create() {
        //设置位置和图片缩放比例
        let background = this.add.image(scaleConfig.moveX,scaleConfig.moveY,'all-background');
        background.scaleX = scaleConfig.gamescaleX;
        background.scaleY = scaleConfig.gamescaleY;
    }
}
export default Recruit;