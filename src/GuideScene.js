// 引导页 离家的时候。。

import Animated from 'phaser-animated-tiles';

class GuideScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'GuideScene'
    });
  }
  preload() {
    this.load.image('')
  }
}

export default GuideScene;