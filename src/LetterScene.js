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
        {type:"image",key:"loading-background",url:"http://ossusanode.muxixyz.com/loading-background-new.jpg"},
      ]
      
    });
   
  }
  
  
  preload() {

   para = document.createElement("img");
   para.src = 'http://ossusanode.muxixyz.com/loadingGif.gif';
   node = document.getElementById("content");
   node.appendChild(para);
   this.load.audio('bgMusic', 'http://ossusanode.muxixyz.com/bgMusic.mp3');
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
    
   
  
 
    this.load.image('letterBackground','http://ossusanode.muxixyz.com/letterBackground.png');
    this.load.image('letterCover', 'http://ossusanode.muxixyz.com/letterCover.png');
    this.load.image('letter', 'http://ossusanode.muxixyz.com/letter.png');
    this.load.image('arrow', 'http://ossusanode.muxixyz.com/arrow.png');
    this.load.image('camera', 'http://ossusanode.muxixyz.com/camera.png');
    this.load.image('start', 'http://ossusanode.muxixyz.com/startRead.png');
      //Guide
    this.load.audio('bgMusic', 'http://ossusanode.muxixyz.com/bgMusic.mp3');
    this.load.image('background','http://ossusanode.muxixyz.com/background.png');
    this.load.image('coffee', 'http://ossusanode.muxixyz.com/coffee.png');
    this.load.image('leaves', 'http://ossusanode.muxixyz.com/leaves.png');
   
    //Guide1
    this.load.image('guide1Word1','http://ossusanode.muxixyz.com/guide1Word1.png');
    this.load.image('guide1Word2','http://ossusanode.muxixyz.com/guide1Word2.png');
    this.load.image('guide1Word3','http://ossusanode.muxixyz.com/guide1Word3.png');
    this.load.image('guide1Word4','http://ossusanode.muxixyz.com/guide1Word4.png');
    this.load.image('guide1Package','http://ossusanode.muxixyz.com/guide1Package.png');
    this.load.image('guide1MovePackage','http://ossusanode.muxixyz.com/guide1MovePackage.png');
    this.load.image('guide1ShakeLeaf','http://ossusanode.muxixyz.com/guide1ShakeLeaf.png');

    //Guide2
    this.load.image('guide2Word1','http://ossusanode.muxixyz.com/guide2Word1.png');
    this.load.image('guide2Word2','http://ossusanode.muxixyz.com/guide2Word2.png');
    this.load.image('guide2Word3','http://ossusanode.muxixyz.com/guide2Word3.png');
    this.load.image('guide2Word4','http://ossusanode.muxixyz.com/guide2Word4.png');
    this.load.image('guide2Eat','http://ossusanode.muxixyz.com/guide2Eat.png');
    this.load.image('guide2Lib','http://ossusanode.muxixyz.com/guide2Lib.png');
    this.load.image('guide2Gar','http://ossusanode.muxixyz.com/guide2Garden.png');
 

     // Teacher
    this.load.image('hat', 'http://ossusanode.muxixyz.com/hat.png');
    this.load.image('teacherWord1', 'http://ossusanode.muxixyz.com/teacherWord1.png');
    this.load.image('teacherWord2', 'http://ossusanode.muxixyz.com/teacherWord2.png');
    this.load.image('teacherWord3', 'http://ossusanode.muxixyz.com/teacherWord3.png');
    this.load.image('teacherWord4', 'http://ossusanode.muxixyz.com/teacherWord4.png');  
      //love1
    this.load.image('road', 'http://ossusanode.muxixyz.com/road.png');
    this.load.image('tree', 'http://ossusanode.muxixyz.com/tree.png');     
    this.load.image('love1Word1', 'http://ossusanode.muxixyz.com/love1Word1.png');
    this.load.image('love1Word2', 'http://ossusanode.muxixyz.com/love1Word2.png');
    this.load.image('love1Word3', 'http://ossusanode.muxixyz.com/love1Word3.png');
    this.load.image('love1Word4', 'http://ossusanode.muxixyz.com/love1Word4.png');

      //love2
      this.load.image('love2House3', 'http://ossusanode.muxixyz.com/love2House10.png');
      this.load.image('love2House10', 'http://ossusanode.muxixyz.com/love2House3.png');
      this.load.image('love2MailTag', 'http://ossusanode.muxixyz.com/love2MailTag.png');
      this.load.image('love2Word1', 'http://ossusanode.muxixyz.com/love2Word1.png');
      this.load.image('love2Word2', 'http://ossusanode.muxixyz.com/love2Word2.png');
      this.load.image('love2Word3', 'http://ossusanode.muxixyz.com/love2Word3.png');


      //history
      this.load.image('historyWord1', 'http://ossusanode.muxixyz.com/historyWord1.png');
      this.load.image('historyWord2', 'http://ossusanode.muxixyz.com/historyWord2.png');
      this.load.image('historyPhoto1', 'http://ossusanode.muxixyz.com/historyPhoto1.png');
      this.load.image('historyPhoto2', 'http://ossusanode.muxixyz.com/historyPhoto2.png');
      this.load.image('historyPhoto3', 'http://ossusanode.muxixyz.com/historyPhoto3.png');
      this.load.image('historyPhoto4', 'http://ossusanode.muxixyz.com/historyPhoto4.png');
      this.load.image('historyPhoto5', 'http://ossusanode.muxixyz.com/historyPhoto5.png');
      this.load.image('historyPhoto6', 'http://ossusanode.muxixyz.com/historyPhoto6.png');

      //recruit
      this.load.image('recruit-light','http://ossusanode.muxixyz.com/recruit-light.png');
      this.load.image('recruit-word1','http://ossusanode.muxixyz.com/recruit-word1.png');
      this.load.image('recruit-word2','http://ossusanode.muxixyz.com/recruit-word2.png');
      this.load.image('recruit-word3','http://ossusanode.muxixyz.com/recruit-word3.png');
      this.load.image('recruit-word4','http://ossusanode.muxixyz.com/recruit-word4.png');

       //child
       this.load.image('school-house','http://ossusanode.muxixyz.com/welfareSchoolHouse.png');
       this.load.image('children-word1','http://ossusanode.muxixyz.com/children-word1.png');
       this.load.image('children-word2','http://ossusanode.muxixyz.com/children-word2.png');
      //future
      this.load.image('water-mark','http://ossusanode.muxixyz.com/waterMark.png');
      this.load.image('school-gate','http://ossusanode.muxixyz.com/schoolGate.png');
      this.load.image('future-word1','http://ossusanode.muxixyz.com/future-word1.png');
      this.load.image('future-word2','http://ossusanode.muxixyz.com/future-word2.png');

      //QRcode
     
      this.load.image('QRcode','http://ossusanode.muxixyz.com/QRcode.png');
      this.load.image('QRbell','http://ossusanode.muxixyz.com/QRbell.png');
      this.load.image('QRword1','http://ossusanode.muxixyz.com/QRcode-word1.png');
      this.load.image('QRword2','http://ossusanode.muxixyz.com/QRcode-word2.png');
      this.load.image('QRword3','http://ossusanode.muxixyz.com/QRcode-word3.png');
      this.load.image('QRpower','http://ossusanode.muxixyz.com/QRcode-power.png')
     
     
      
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