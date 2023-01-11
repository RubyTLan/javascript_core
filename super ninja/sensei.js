const Ninja = require("./ninja");

class Sensei extends Ninja{
    constructor(name, health=0,speed, strength,wisdom){
        super(name, health,speed, strength);
        this.wisdom=10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("A wise message.")
    }
    // showStats(){
    //     console.log(`${this.name},${this.health},${this.speed},${this.strength},${this.wisdom}`);
    //     return this;
    // }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();
