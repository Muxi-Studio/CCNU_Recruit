import Animated from 'phaser-animated-tiles';
import scaleConfig from './common';
import Phaser from 'phaser';

var arrow, letter, start;
var loadingText ;
var flag = 1;
var loadingBack,loadingPlane;
var chax = 0;
var x=scaleConfig.gamescaleX*314,y=scaleConfig.gamescaleY*468;
var group;
var node;
var para;


class LetterScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'LetterScene',
      
      files:[
        {type:"image",key:"loading-background",url:"http://p688ihx0v.bkt.clouddn.com/loading-background-new.jpg"},
     //   {type:"image",key:"loading-planegif",url:"http://p688ihx0v.bkt.clouddn.com/loadingGif.gif" }
   

      ]
      
    });
   
  }
  
  
  preload() {

   para = document.createElement("img");
   para.src = 'http://p688ihx0v.bkt.clouddn.com/loadingGif.gif';
   node = document.getElementById("content");
   node.appendChild(para);
   this.load.audio('bgMusic', 'http://p688ihx0v.bkt.clouddn.com/bgMusic.mp3');
    loadingBack = this.add.sprite(scaleConfig.moveX,scaleConfig.moveY,'loading-background');
    loadingBack.scaleX = scaleConfig.gamescaleX;
    loadingBack.scaleY = scaleConfig.gamescaleY; 


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
      //Guide
    this.load.audio('bgMusic', 'http://p688ihx0v.bkt.clouddn.com/bgMusic.mp3');
    this.load.image('background','http://p688ihx0v.bkt.clouddn.com/background.png');
    this.load.image('coffee', 'http://p688ihx0v.bkt.clouddn.com/coffee.png');
    this.load.image('leaves', 'http://p688ihx0v.bkt.clouddn.com/leaves.png');
   


    //Guide1
    this.load.image('guide1Word1','http://p688ihx0v.bkt.clouddn.com/guide1Word1.png');
    this.load.image('guide1Word2','http://p688ihx0v.bkt.clouddn.com/guide1Word2.png');
    this.load.image('guide1Word3','http://p688ihx0v.bkt.clouddn.com/guide1Word3.png');
    this.load.image('guide1Word4','http://p688ihx0v.bkt.clouddn.com/guide1Word4.png');
    this.load.image('guide1Package','http://p688ihx0v.bkt.clouddn.com/guide1Package.png');
    this.load.image('guide1MovePackage','http://p688ihx0v.bkt.clouddn.com/guide1MovePackage.png');
    this.load.image('guide1ShakeLeaf','http://p688ihx0v.bkt.clouddn.com/guide1ShakeLeaf.png');

    //Guide2
    this.load.image('guide2Word1','http://p688ihx0v.bkt.clouddn.com/guide2Word1.png');
    this.load.image('guide2Word2','http://p688ihx0v.bkt.clouddn.com/guide2Word2.png');
    this.load.image('guide2Word3','http://p688ihx0v.bkt.clouddn.com/guide2Word3.png');
    this.load.image('guide2Word4','http://p688ihx0v.bkt.clouddn.com/guide2Word4.png');
    this.load.image('guide2Eat','http://p688ihx0v.bkt.clouddn.com/guide2Eat.png');
    this.load.image('guide2Lib','http://p688ihx0v.bkt.clouddn.com/guide2Lib.png');
    this.load.image('guide2Gar','http://p688ihx0v.bkt.clouddn.com/guide2Garden.png');
 

     // Teacher
    this.load.image('hat', 'http://p688ihx0v.bkt.clouddn.com/hat.png');
    this.load.image('teacherWord1', 'http://p688ihx0v.bkt.clouddn.com/teacherWord1.png');
    this.load.image('teacherWord2', 'http://p688ihx0v.bkt.clouddn.com/teacherWord2.png');
    this.load.image('teacherWord3', 'http://p688ihx0v.bkt.clouddn.com/teacherWord3.png');
    this.load.image('teacherWord4', 'http://p688ihx0v.bkt.clouddn.com/teacherWord4.png');  
      //love1
      this.load.image('road', 'http://p688ihx0v.bkt.clouddn.com/road.png');
      this.load.image('tree', 'http://p688ihx0v.bkt.clouddn.com/tree.png');
      this.load.image('love1Word1', 'http://p688ihx0v.bkt.clouddn.com/love1Word1.png');
      this.load.image('love1Word2', 'http://p688ihx0v.bkt.clouddn.com/love1Word2.png');
      this.load.image('love1Word3', 'http://p688ihx0v.bkt.clouddn.com/love1Word3.png');
      this.load.image('love1Word4', 'http://p688ihx0v.bkt.clouddn.com/love1Word4.png');

      //love2
      this.load.image('love2House3', 'http://p688ihx0v.bkt.clouddn.com/love2House10.png');
      this.load.image('love2House10', 'http://p688ihx0v.bkt.clouddn.com/love2House3.png');
      this.load.image('love2MailTag', 'http://p688ihx0v.bkt.clouddn.com/love2MailTag.png');
      this.load.image('love2Word1', 'http://p688ihx0v.bkt.clouddn.com/love2Word1.png');
      this.load.image('love2Word2', 'http://p688ihx0v.bkt.clouddn.com/love2Word2.png');
      this.load.image('love2Word3', 'http://p688ihx0v.bkt.clouddn.com/love2Word3.png');


      //history
      this.load.image('historyWord1', 'http://p688ihx0v.bkt.clouddn.com/historyWord1.png');
      this.load.image('historyWord2', 'http://p688ihx0v.bkt.clouddn.com/historyWord2.png');
      this.load.image('historyPhoto1', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto1.png');
      this.load.image('historyPhoto2', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto2.png');
      this.load.image('historyPhoto3', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto3.png');
      this.load.image('historyPhoto4', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto4.png');
      this.load.image('historyPhoto5', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto5.png');
      this.load.image('historyPhoto6', 'http://p688ihx0v.bkt.clouddn.com/historyPhoto6.png');

      //recruit
      this.load.image('recruit-light','http://p688ihx0v.bkt.clouddn.com/recruit-light.png');
      this.load.image('recruit-word1','http://p688ihx0v.bkt.clouddn.com/recruit-word1.png');
      this.load.image('recruit-word2','http://p688ihx0v.bkt.clouddn.com/recruit-word2.png');
      this.load.image('recruit-word3','http://p688ihx0v.bkt.clouddn.com/recruit-word3.png');
      this.load.image('recruit-word4','http://p688ihx0v.bkt.clouddn.com/recruit-word4.png');

       //child
       this.load.image('school-house','http://p688ihx0v.bkt.clouddn.com/welfareSchoolHouse.png');
       this.load.image('children-word1','http://p688ihx0v.bkt.clouddn.com/children-word1.png');
       this.load.image('children-word2','http://p688ihx0v.bkt.clouddn.com/children-word2.png');
      //future
      this.load.image('water-mark','http://p688ihx0v.bkt.clouddn.com/waterMark.png');
      this.load.image('school-gate','http://p688ihx0v.bkt.clouddn.com/schoolGate.png');
      this.load.image('future-word1','http://p688ihx0v.bkt.clouddn.com/future-word1.png');
      this.load.image('future-word2','http://p688ihx0v.bkt.clouddn.com/future-word2.png');

      //QRcode
     
      this.load.image('QRcode','http://p688ihx0v.bkt.clouddn.com/QRcode.png');
      this.load.image('QRbell','http://p688ihx0v.bkt.clouddn.com/QRbell.png');
      this.load.image('QRword1','http://p688ihx0v.bkt.clouddn.com/QRcode-word1.png');
      this.load.image('QRword2','http://p688ihx0v.bkt.clouddn.com/QRcode-word2.png');
      this.load.image('QRword3','http://p688ihx0v.bkt.clouddn.com/QRcode-word3.png');
      this.load.image('QRpower','http://p688ihx0v.bkt.clouddn.com/QRcode-power.png')
     
     
      
    loadingText = this.add.text(scaleConfig.moveX-scaleConfig.gamescaleX*80, scaleConfig.moveY-scaleConfig.gamescaleY*65, '努力加载中', {
      fontSize: '20px',
      fill: 'rgb(173,151,138)'
    });
    var progressText = this.add.text(scaleConfig.moveX-38*scaleConfig.gamescaleX, scaleConfig.moveY, '0%', {
      fontSize: '20px',
      fill: 'rgb(83,67,58)'
    });
 
  
  
    this.load.on('progress', function(value){
      if(value!==1){
        loadingWordChange();
      }
     
       
      
      progressText.setText(Math.round(value * 100) + '%');
  });
  
  
  
  }
  create() {

    node.removeChild(para);


    var bgMusic = this.sound.add('bgMusic');
    bgMusic.play();

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

    var drag = false;

    this.input.on('pointermove', function() {
      drag = true;
    }, this)
    
    this.input.on('pointerup', function() {
      if (drag) {
      
        this.scene.start('Guide1Scene');

      }
    }, this)
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