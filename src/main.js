import 'phaser';

import LetterScene from './letterScene';
import scaleConfig from './common';
import TeacherScene from './teacherScene';
import HistoryScene from './historyScene';
import RecruitScene from './recruitScene'
import ChildrenScene from './childrenScene'
import QRcodeScene from './QRcodeScene';
import FutureScene from './futureScene'

import Guide1Scene from './newGuide1Scene';
import Guide2Scene from './newGuide2Scene';
import Love1Scene from './love1Scene';
import Love2Scene from './love2Scene';


let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: scaleConfig.gamewidth,
    height: scaleConfig.gameheight,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    scene: [
        LetterScene,
        Guide1Scene,
        Guide2Scene,
        TeacherScene,
        Love1Scene,
        Love2Scene,
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
