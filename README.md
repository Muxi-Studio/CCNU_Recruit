问题1：
场景转化：甲场景切乙场景，在甲场景的create函数最后启动 this.scene.launch(
    'xxxScene'
)
这个xxx需要在constuctor里注册，如：

constructor(){
        super({
            key:"RecruitScene"
        });
    }

在letterScene中可以看到例子