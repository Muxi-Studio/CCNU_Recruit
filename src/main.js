import 'phaser';
// import BootScene from './BootScene';
// import MarioBrosScene from './MarioBrosScene';
// import TitleScene from './TitleScene';
import LetterScene from './LetterScene';
import GuideScene from './GuideScene';
import IntroScene1 from './IntroScene1';
import IntroScene2 from './IntroScene2';
import IntroScene3 from './IntroScene3';
import Recruit from './recruitScene';

let config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 750,
    height: 1334,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    scene: [
        
        // BootScene,
        // TitleScene,
        // MarioBrosScene,
        LetterScene,
        Recruit,
        // GuideScene,
        // IntroScene1,
        // IntroScene2,
        // IntroScene3
    ]
};

let game = new Phaser.Game(config);