import 'phaser';
import scaleConfig from './common'
import WelfareScene from './welfareScene';
import LetterScene from './LetterScene';
import GuideScene from './GuideScene';
import IntroScene1 from './IntroScene1';
import IntroScene2 from './IntroScene2';
import IntroScene3 from './IntroScene3';
import Recruit from './recruitScene';
import scaleConfig from './common';

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: scaleConfig.gamewidth,
    height: scaleConfig.gameheight,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    scene: [
        WelfareScene,
        // LetterScene,
        Recruit,
        // GuideScene,
        // IntroScene1,
        // IntroScene2,
        // IntroScene3
    ],
    physics:{
        default:'matter',
        matter: {
            enableSleeping: true
        }
    }
    
};

let game = new Phaser.Game(config);