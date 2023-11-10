const Character = require("./Character")

class Thief extends Character {
    attack(targetCharacter){
        targetCharacter.hp -= (targetCharacter.attack - targetCharacter.shild) * 2
    }
}

module.exports = Thief