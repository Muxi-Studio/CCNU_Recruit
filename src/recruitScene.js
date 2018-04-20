
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
        console.log("into")
        this.add.image(0,0,'all-background')
    }
}
export default Recruit;