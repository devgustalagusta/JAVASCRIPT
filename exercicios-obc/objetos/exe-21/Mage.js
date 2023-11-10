const Character = require("./Character")

class Mage extends Character {
    constructor(name, hp, attack, shild, magicPts){
        super(name, hp, attack, shild, magicPts)
        this.magicPts = magicPts
    }

    attack(targetCharacter){
        targetCharacter.hp -= (this.attack + this.magicPts) - targetCharacter.shild
    }

    heal(targetCharacter){
        targetCharacter.hp += this.magicPts * 2
    }
}

module.exports = Mage