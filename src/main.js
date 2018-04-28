import 'phaser';

import LetterScene from './letterScene';
import GuideScene from './GuideScene';
import scaleConfig from './common';
import TeacherScene from './teacherScene';
import LoveScene from './loveScene';
import HistoryScene from './historyScene';
import RecruitScene from './recruitScene'
import ChildrenScene from './childrenScene'
import QRcodeScene from './QRcodeScene';
import FutureScene from './futureScene'

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: scaleConfig.gamewidth,
    height: scaleConfig.gameheight,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    scene: [
         LetterScene,
        GuideScene,
        TeacherScene,
        LoveScene,
        HistoryScene,
        RecruitScene, 
        ChildrenScene,
        FutureScene,
        QRcodeScene,
    ],
    physics:{
        default:'matter',
        matter: {
            enableSleeping: true
        }
    },
};

let game = new Phaser.Game(config);
