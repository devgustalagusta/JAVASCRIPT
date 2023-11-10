class Character {
    constructor(name, hp, attack, shild){
        this.name = name
        this.hp = hp
        this.attack = attack
        this.shild = shild
    }

    attack(targetCharacter){
        targetCharacter.hp -= targetCharacter.attack - targetCharacter.shild
    }
}

module.exports = Character