import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';

var arrow, letter, start;
var loadingText ;
var flag = 1;
var loadingBack,loadingPlane,loadingWay;
var chax = 0;
var x=scaleConfig.gamescaleX*314,y=scaleConfig.gamescaleY*468;
var group;


class LetterScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'LetterScene',
      files:[
        {type:"image",key:"loading-background",url:"http://p688ihx0v.bkt.clouddn.com/loading-background.png"},
        // {type:"image",key:"loading-plane",url:"../assets/loading-plane.png"},
        // {type:"image",key:"loading-way",url:"../assets/loading-way.png"}
      ]
    });
   
  }
  
  
  preload() {
    this.load.audio('bgMusic', 'http://p688ihx0v.bkt.clouddn.com/bgMusic.mp3');
    loadingBack = this.add.sprite(scaleConfig.moveX,scaleConfig.moveY,'loading-background');
    loadingBack.scaleX = scaleConfig.gamescaleX;
    loadingBack.scaleY = scaleConfig.gamescaleY; 
    loadingPlane = this.add.sprite(scaleConfig.gamescaleX*314,scaleConfig.gamescaleY*468,'loading-plane');
    loadingPlane.scaleX = scaleConfig.gamescaleX;
    loadingPlane.scaleY = scaleConfig.gamescaleY;
    loadingWay = this.add.sprite(scaleConfig.gamescaleX*154,scaleConfig.gamescaleY*468,'loading-way');
    loadingWay.scaleX = scaleConfig.gamescaleX;
    loadingWay.scaleY = scaleConfig.gamescaleY;

    function loadingWordChange(){
        if(loadingText.text == '努力加载中'){
          loadingText.setText('努力加载中.');
        } 
        else if(loadingText.text == '努力加载中.'){
          loadingText.setText('努力加载中..');
        }
        else if(loadingText.text == '努力加载中.'){
          loadingText.setText('努力加载中..');
        }else if(loadingText.text == '努力加载中..'){
          loadingText.setText('努力加载中...');
        }else{
          loadingText.setText('努力加载中.');
        }
      }
    
  

    this.load.image('letterBackground','http://p688ihx0v.bkt.clouddn.com/letterBackground.png');
    this.load.image('letterCover', 'http://p688ihx0v.bkt.clouddn.com/letterCover.png');
    this.load.image('letter', 'http://p688ihx0v.bkt.clouddn.com/letter.png');
    this.load.image('arrow', 'http://p688ihx0v.bkt.clouddn.com/arrow.png');
    this.load.image('camera', 'http://p688ihx0v.bkt.clouddn.com/camera.png');
    this.load.image('start', 'http://p688ihx0v.bkt.clouddn.com/startRead.png');
   
    loadingText = this.add.text(scaleConfig.moveX-scaleConfig.gamescaleX*90, scaleConfig.moveY-scaleConfig.gamescaleY*65, '努力加载中', {
      fontSize: '20px',
      fill: 'rgb(173,151,138)'
    });
    var progressText = this.add.text(scaleConfig.moveX-15, scaleConfig.moveY, '0%', {
      fontSize: '20px',
      fill: 'rgb(83,67,58)'
    });
   // progressText.tint = 'rgb(173,151,138)';
  let oldx = x;
  this.load.on('progress', function(value)
  {
     if(value!==1){
       loadingWordChange();
     } 
      progressText.setText(Math.round(value * 100) + '%');
  });
  
  }
  create() {
    var bgMusic = this.sound.add('bgMusic');
    bgMusic.play();
     
    // var loadingBackground = this.add.sprite(scaleConfig.moveX, scaleConfig.moveY, 'loading-background');
    // loadingBackground.scaleX = scaleConfig.gamescaleX;
    // loadingBackground.scaleY = scaleConfig.gamescaleY;

    var background = this.add.sprite(scaleConfig.moveX, scaleConfig.moveY, 'letterBackground');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;
    
    arrow = this.add.sprite(scaleConfig.moveX, 1142 * scaleConfig.gamescaleY, 'arrow').setAlpha(0);
    arrow.scaleX = scaleConfig.gamescaleX;
    arrow.scaleY = scaleConfig.gamescaleY;

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

    // var drag = false;

    // this.input.on('pointermove', function() {
    //   drag = true;
    // }, this)

    // this.input.on('pointerup', function() {
    //   if (drag) {
    //     background.destroy();
    //     arrow.destroy();
    //     letter.destroy();
    //     letterCover.destroy();
    //     camera.destroy();
    //     start.destroy();
    //     this.scene.launch('GuideScene');
    //   }
    // }, this)
    this.input.addMoveCallback(function() {
      alert("haha")
    }, this)
    // this.input.once('pointerdown', function () {
    //         background.destroy();
    //         arrow.destroy();
    //         letter.destroy();
    //         letterCover.destroy();
    //         camera.destroy();
    //         start.destroy();
    //         this.scene.launch('GuideScene');
    //       }, this);
    
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