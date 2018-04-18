import 'phaser';
import BootScene from './BootScene';
import MarioBrosScene from './MarioBrosScene';
import TitleScene from './TitleScene';
import LetterScence from './LetterScence';
import GuideScence from './GuideScence';
import IntroScence1 from './IntroScence1';
import IntroScence2 from './IntroScence2';
import IntroScence3 from './IntroScence3';

let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: 400,
    height: 240,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [
        // BootScene,
        // TitleScene,
        // MarioBrosScene,
        LetterScence,
        GuideScence,
        IntroScence1,
        IntroScence2,
        IntroScence3
    ]
};

let game = new Phaser.Game(config);