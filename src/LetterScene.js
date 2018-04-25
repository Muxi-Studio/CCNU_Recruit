import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

var arrow, letter, start;
var flag = 1;

class LetterScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'LetterScene'
    });
  }
  preload() {

    this.load.image('loading-background','http://p688ihx0v.bkt.clouddn.com/loading-background.png');
    let loadingBack = this.add.image(scaleConfig.moveX,scaleConfig.moveY,'loading-background');
    loadingBack.scaleX = scaleConfig.gamescaleX;
    loadingBack.scaleY = scaleConfig.gamescaleY;
  
    // var progressText = this.add.text(scaleConfig.moveX, scaleConfig.moveY, '0%', {
    //   fontSize: '60px',
    //   fill: '#ffffff'
    // });
    // console.log(loadingBack)
    // progressText.anchor.setTo(0.5, 0.5); // 设置锚点，用于居中
    // // 监听加载完一个文件的事件
    // this.load.onFileComplete.add(function(progress) {
    // progressText.text = progress + '%';
    // },this);
    //progressText.anchor.setTo(0.5, 0.5); // 设置锚点，用于居中
    // 监听加载完一个文件的事件
    // this.load.on('fileprogress', function (file, value) {
    //   console.log(progressText.text)
    //   progressText.text = value*100 + '%';
    // });
  //   this.load.on('complete', function () {
   
  //   console.log(this.scene)
  //      this.scene.start('create')
  // },this);
   

    this.load.image('letterBackground','http://p688ihx0v.bkt.clouddn.com/letterBackground.png');
    this.load.image('letterCover', 'http://p688ihx0v.bkt.clouddn.com/letterCover.png');
    this.load.image('letter', 'http://p688ihx0v.bkt.clouddn.com/letter.png');
    this.load.image('arrow', 'http://p688ihx0v.bkt.clouddn.com/arrow.png');
    this.load.image('camera', 'http://p688ihx0v.bkt.clouddn.com/camera.png');
    this.load.image('start', 'http://p688ihx0v.bkt.clouddn.com/startRead.png');
    this.load.image('letterCoverUp', 'http://p688ihx0v.bkt.clouddn.com/letterCoverUp.png');
  }
  create() {
    var background = this.add.sprite(scaleConfig.moveX, scaleConfig.moveY, 'letterBackground');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;
    
    arrow = this.add.sprite(scaleConfig.moveX, 1142 * scaleConfig.gamescaleY, 'arrow').setAlpha(0);
    arrow.scaleX = scaleConfig.gamescaleX;
    arrow.scaleY = scaleConfig.gamescaleY;

    let letterCoverUp = this.add.sprite(scaleConfig.moveX, 530 * scaleConfig.gamescaleY, 'letterCoverUp');
    letterCoverUp.scaleX = scaleConfig.gamescaleX;
    letterCoverUp.scaleY = scaleConfig.gamescaleY;

    letter = this.add.sprite(scaleConfig.moveX, 1000 * scaleConfig.gamescaleY, 'letter');
    letter.scaleX = scaleConfig.gamescaleX;
    letter.scaleY = scaleConfig.gamescaleY;

    var letterCover = this.add.sprite(scaleConfig.moveX, 800 * scaleConfig.gamescaleY, 'letterCover');
    letterCover.scaleX = scaleConfig.gamescaleX;
    letterCover.scaleY = scaleConfig.gamescaleY;

    let camera = this.add.sprite(40, 1000 * scaleConfig.gamescaleY, 'camera');
    camera.scaleX = scaleConfig.gamescaleX;
    camera.scaleY = scaleConfig.gamescaleY;

    start = this.add.sprite(scaleConfig.moveX, 1062 * scaleConfig.gamescaleY, 'start').setAlpha(0);
    start.scaleX = scaleConfig.gamescaleX;
    start.scaleY = scaleConfig.gamescaleY;

    this.input.once('pointerdown', function () {
      background.destroy();
      arrow.destroy();
      letter.destroy();
      letterCover.destroy();
      letterCoverUp.destroy();
      camera.destroy();
      start.destroy();
      this.scene.launch('GuideScene');
    }, this);
  }
  update() {
    if (letter.y >= 800 * scaleConfig.gamescaleY) {
      letter.y -= 1;
    } else {
      arrow.setAlpha(1);
      start.setAlpha(1);
      if (arrow.y < scaleConfig.gamescaleY * 1200 && flag == 1) {
        arrow.y += 0.5;
      }
      if (arrow.y >= scaleConfig.gamescaleY * 1200 || flag == 0){
        arrow.y -= 0.5;
        flag = 0;
        if (arrow.y == scaleConfig.gamescaleY * 1142) flag = 1;
      }
    }
  }
    
}
export default LetterScene;