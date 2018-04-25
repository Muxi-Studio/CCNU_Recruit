
import scaleConfig  from './common'
class Recruit extends Phaser.Scene{
    constructor(){
        super({
            key:"recruitScene"
        });
    }

    preload() {
        this.load.image('all-background','http://p688ihx0v.bkt.clouddn.com/background.png');
        this.load.image('all-coffee','http://p688ihx0v.bkt.clouddn.com/coffee.png');
        this.load.image('all-leaves','http://p688ihx0v.bkt.clouddn.com/leaves.png');
        this.load.image('6-1','http://p688ihx0v.bkt.clouddn.com/6-1.png');
        this.load.image('6-2','http://p688ihx0v.bkt.clouddn.com/6-2.png');
        this.load.image('6-3','http://p688ihx0v.bkt.clouddn.com/6-3.png');
        this.load.image('6-4','http://p688ihx0v.bkt.clouddn.com/6-4.png');
        this.load.image('6-5','http://p688ihx0v.bkt.clouddn.com/6-5.png');
        this.load.image('6-6','http://p688ihx0v.bkt.clouddn.com/6-6.png');
    }
    create() {
        //设置位置和图片缩放比例
        let background = this.add.image(scaleConfig.moveX,scaleConfig.moveY,'all-background');
        background.scaleX = scaleConfig.gamescaleX;
        background.scaleY = scaleConfig.gamescaleY;
    }
}
export default Recruit;