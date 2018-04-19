// 信纸从信封中抽出来
import Animated from 'phaser-animated-tiles';

class LetterScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'LetterScene'
    });
  }
  preload() {
    this.load.image('Letter-background','../assests/letterBackground.png');
    this.load.image('letter-cover', '../assests/letterCover.png');
    this.load.image('letter', '../assests/letter.png');
  }
  create() {
    console.log("hah")
    this.add.image(0, 0, 'Letter-bakcground').setOrigin(0, 0);
    //this.scene.start('Letter-bakcground');
  }
}
export default LetterScene;