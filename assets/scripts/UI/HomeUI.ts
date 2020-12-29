const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Animation)
    menuAnim:cc.Animation = null;
    @property(cc.ParticleSystem)
    menuParticle:cc.ParticleSystem=null;
    @property(cc.Node)
    btnGroup:cc.Node=null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        
        cc.systemEvent.targetOff(this.btnGroup);
        this.scheduleOnce(function(){
            this.menuAnim.play();
            this.menuParticle.enabled = false;
        }.bind(this),2)
    }

    showParticle():void{
        this.menuParticle.enabled = true;
    }

    enableButtons():void{
        // cc.systemEvent.on();
    }
    // update (dt) {}
}
