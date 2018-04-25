import 'phaser';
import WelfareScene from './welfareScene';
import LetterScene from './LetterScene';
import GuideScene from './guideScene';
import scaleConfig from './common';
import TeacherScene from './teacherScene';
import LoveScene from './loveScene';
import HistoryScene from './historyScene';
//import GuideScene from './GuideScene';
import Recruit from './recruitScene';
import scaleConfig from './common';
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
        HistoryScenem,
        QRcodeScene
       // childrenScene,
       // WelfareScene,
        // LetterScene,
        // Recruit,
        // GuideScene,
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