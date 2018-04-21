import 'phaser';
// import BootScene from './BootScene';
// import MarioBrosScene from './MarioBrosScene';
// import TitleScene from './TitleScene';
import letterScene from './letterScene';
import guideScene from './guideScene';
import locationScene from './locationScene';
import academyScene from './academyScene';
import historyScene from './historyScene';
import Recruit from './recruitScene';
import scaleConfig from './common';

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: scaleConfig.gamewidth,
    height: scaleConfig.gameheight,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    scene: [
        letterScene,
        guideScene,
        locationScene,
        academyScene,
        historyScene
    ],
    physics:{
        default:'matter',
        matter: {
            enableSleeping: true
        }
    }
};

let game = new Phaser.Game(config);