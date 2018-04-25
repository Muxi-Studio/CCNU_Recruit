import 'phaser';
import WelfareScene from './welfareScene';
import LetterScene from './LetterScene';
import GuideScene from './guideScene';
import Recruit from './recruitScene';
import scaleConfig from './common';
import TeacherScene from './teacherScene';
import LoveScene from './loveScene';
import HistoryScene from './historyScene';

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: scaleConfig.gamewidth,
    height: scaleConfig.gameheight,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    scene: [
        //WelfareScene,
        LetterScene,
        //Recruit,
        GuideScene,
        TeacherScene,
        LoveScene,
        HistoryScene
    ],
    physics:{
        default:'matter',
        matter: {
            enableSleeping: true
        }
    }
    
};

let game = new Phaser.Game(config);