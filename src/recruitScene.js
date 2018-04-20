// var gamescaleX = window.innerWidth / 750;
// var gamescaleY = window.innerHeight / 1334;
import scaleConfig  from './common'
class Recruit extends Phaser.Scene{
    constructor(){
        super({
            key:"RecruitScene"
        });
    }
    preload() {
        this.load.image('all-background','../assests/background.png');
        this.load.image('all-coffee','../assests/coffee.png');
        this.load.image('all-leaves','../assests/leaves.png');
        this.load.image('6-1','../assests/6-1.png');
        this.load.image('6-2','../assests/6-2.png');
        this.load.image('6-3','../assests/6-3.png');
        this.load.image('6-4','../assests/6-4.png');
        this.load.image('6-5','../assests/6-5.png');
        this.load.image('6-6','../assests/6-6.png');
    }
    create() {
        //设置位置和图片缩放比例
        let background = this.add.image(scaleConfig.moveX,scaleConfig.moveY,'all-background');
        background.scaleX = scaleConfig.gamescaleX;
        background.scaleY = scaleConfig.gamescaleY;
        // console.log("into")
        // let  moveX =  window.innerWidth/2;
        // let  moveY =  window.innerHeight/2;
        // let background =  this.add.image(moveX,moveY,'all-background')
        // background.scaleX = gamescaleX;
        // background.scaleY =  gamescaleY;

      // Phaser.Actions.ScaleXY(background, 0.5,0.5);
    }
}
export default Recruit;