const Character = require("./Character");

class Warrior extends Character{
    constructor(name, lifePts, attackPts, defensePts, shildPts){
        super(name, lifePts, attackPts, defensePts)
        this.shildPts = shildPts
        this.stance = 'attacking'
    }
    attack(targetCharacter) {
        if(this.stance === 'attacking') {
            super.attack(targetCharacter)
        }
    }

    switchStance(){
        if(this.stance === 'attacking') {
            this.stance = 'defending'
            this.defensePts += this.shildPts
        } else {
            this.stance = 'attacking'
            this.defensePts -= this.shildPts
        }
    }
}

module.exports = Warrior