import 'phaser';
import WelfareScene from './welfareScene';
import LetterScene from './letterScene';
import GuideScene from './guideScene';
import scaleConfig from './common';
import TeacherScene from './teacherScene';
import LoveScene from './loveScene';
import HistoryScene from './historyScene';
import Recruit from './recruitScene';
import childrenScene from './childrenScene'
import QRcodeScene from './QRcodeScene';

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
        childrenScene,
        WelfareScene,
        QRcodeScene,
    ],
    physics:{
        default:'matter',
        matter: {
            enableSleeping: true
        }
    },
    // files:[
    //     {type:"image",key:"loading-background",url:"../assests/loading-background.png"}
    // ]
    
};

let game = new Phaser.Game(config);