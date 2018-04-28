import scaleConfig  from './common'
var QRbell,QRcode,QRword1,QRword2,QRword3,QRpower;
var background,coffee,leaves;
var alphaC , alpha1 ,alpha2 , alpha3,alpha4;
alphaC = alpha1 = alpha2 = alpha3 = alpha4 = 0;
var rotaFlag = 0;
var para,node;

class QRcodeScene extends Phaser.Scene{
    constructor(){
        super({
            key:"QRcodeScene",
           
        });
       
    }
    preload() {
      
       
    }
    create() {
        //设置位置和图片缩放比例
    background = this.add.sprite(scaleConfig.moveX, scaleConfig.moveY, 'background');
    background.scaleX = scaleConfig.gamescaleX;
    background.scaleY = scaleConfig.gamescaleY;

    coffee = this.add.sprite(694 * scaleConfig.gamescaleX, 1182 * scaleConfig.gamescaleY, 'coffee');
    coffee.scaleX = scaleConfig.gamescaleX;
    coffee.scaleY = scaleConfig.gamescaleY;

    leaves = this.add.sprite(0, 80 * scaleConfig.gamescaleY, 'leaves').setOrigin(0);
    leaves.scaleX = scaleConfig.gamescaleX;
    leaves.scaleY = scaleConfig.gamescaleY;

    QRbell = this.add.sprite(scaleConfig.gamescaleX*50,scaleConfig.gamescaleY*230,'QRbell').setOrigin(0);
    QRbell.scaleX = scaleConfig.gamescaleX;
    QRbell.scaleY = scaleConfig.gamescaleY;

    QRword1 = this.add.sprite(scaleConfig.gamescaleX*374,scaleConfig.gamescaleY*370,'QRword1').setAlpha(0);
    QRword1.scaleX = scaleConfig.gamescaleX;
    QRword1.scaleY = scaleConfig.gamescaleY;

    QRword2 = this.add.sprite(scaleConfig.gamescaleX*378,scaleConfig.gamescaleY*550,'QRword2').setAlpha(0);
    QRword2.scaleX = scaleConfig.gamescaleX;
    QRword2.scaleY = scaleConfig.gamescaleY;

    QRword3 = this.add.sprite(scaleConfig.gamescaleX*376,scaleConfig.gamescaleY*950,'QRword3').setAlpha(0);
    QRword3.scaleX = scaleConfig.gamescaleX;
    QRword3.scaleY = scaleConfig.gamescaleY;

    // QRcode = this.add.sprite(scaleConfig.gamescaleX*376,scaleConfig.gamescaleY*784,'QRcode').setAlpha(0);
    // QRcode.scaleX = scaleConfig.gamescaleX;
    // QRcode.scaleY = scaleConfig.gamescaleY;

    QRpower = this.add.sprite(scaleConfig.gamescaleX*376,scaleConfig.gamescaleY*980,'QRpower').setAlpha(0);
    QRpower.scaleX = scaleConfig.gamescaleX;
    QRpower.scaleY = scaleConfig.gamescaleY;

    para = document.createElement("img");
    para.src = 'http://p688ihx0v.bkt.clouddn.com/QRcode.png';
    node = document.getElementById("content");
    node.appendChild(para);
    para.style.opacity = 0;
    para.className = 'QR';
    }
    update(){
        coffee.rotation += 0.01;
      
        if(rotaFlag === 0 ){
            QRbell.rotation += 0.005;
            if (QRbell.rotation >= 0.3) {
                rotaFlag = 1;
            }
        }else if(rotaFlag === 1 ){
            QRbell.rotation -= 0.005;
            if (QRbell.rotation <= -0.5) {
                rotaFlag = 0;
            }
        }
        this.time.addEvent({
            delay: 1000,
            callback: function ()
            {
                if(alpha1<=1){
                    alpha1 += 0.008;
                   QRword1.setAlpha(alpha1);
                }
            },
            callbackScope: this,
            
        });
        this.time.addEvent({
            delay: 2000,
            callback: function ()
            {
                if(alpha2<=1){
                    alpha2 += 0.008;
                    QRword2.setAlpha(alpha2);
                }
            },
            callbackScope: this,    
        });
        this.time.addEvent({
            delay: 2500,
            callback: function ()
            {
                if(alphaC <=1){
                    alphaC += 0.008;
                    // QRcode.setAlpha(alphaC);
                    para.style.opacity = alphaC;
                }
            },
            callbackScope: this,    
        });
        this.time.addEvent({
            delay: 3000,
            callback: function ()
            {
                if(alpha3<=1){
                    alpha3 += 0.008;
                    QRword3.setAlpha(alpha3);
                }
            },
            callbackScope: this,    
        }); 
        this.time.addEvent({
            delay: 4000,
            callback: function ()
            {
                if(alpha4<=1){
                    alpha4 += 0.008;
                    QRpower.setAlpha(alpha4);
                }
            },
            callbackScope: this,    
        }); 
    }
}
export default QRcodeScene;