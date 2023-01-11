class Ninja {
    constructor(name, health,speed, strength){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(`${this.name}`);
        return this;
    }
    showStats(){
        console.log(`${this.name},${this.health},${this.speed},${this.strength}`);
        return this;
    }
    drinkSake(){
        this.health+=10;
        return this;
    }
}
module.exports=Ninja;
