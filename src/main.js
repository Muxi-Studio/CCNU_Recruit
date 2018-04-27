import 'phaser';
import WelfareScene from './welfareScene';
import LetterScene from './letterScene';
import GuideScene from './GuideScene';
import scaleConfig from './common';
import TeacherScene from './teacherScene';
import LoveScene from './loveScene';
import HistoryScene from './historyScene';
//import GuideScene from './GuideScene';
import recruitScene from './recruitScene';
import ChildrenScene from './childrenScene'
import QRcodeScene from './QRcodeScene';
import futureScene from './futureScene'

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
        ChildrenScene,
        // WelfareScene,
        // QRcodeScene,
    ],
    physics:{
        default:'matter',
        matter: {
            enableSleeping: true
        }
    },
    // files:[
    //     {type:"image",key:"loading-background",url:"../assets/loading-background.png"}
    // ]
    
};

let game = new Phaser.Game(config);
