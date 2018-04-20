// 信纸从信封中抽出来
import Animated from 'phaser-animated-tiles';

class LetterScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'LetterScene'
    });
  }
  preload() {
    this.load.image('letter-background','../assests/letterBackground.png');
    this.load.image('letter-cover', '../assests/letterCover.png');
    this.load.image('letter', '../assests/letter.png');
  }
  create() {
    this.add.image(0, 0, 'letter-background').setOrigin(0, 0);
    //this.scene.start('Letter-bakcground');
    //场景转换
    this.scene.launch('RecruitScene')
  }
}
export default LetterScene;