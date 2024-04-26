class Player {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health || 100; // if no value provided default to 100
        this.strength = strength || 5; // if no value provided default to 5
    }
    greet() {
        console.log(`Hi! I am ${this.name} \n`);
        return this;
    }
    attack() {
        console.log(`${this.name} uses attack on ${enemy.name}`);
        let damage = this.strength * Math.floor(Math.random() * 10) + 1;
        console.log(`attack hits for ${damage}`);
        enemy.health -= damage;
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
            strength: this.strength,
            defence: this.defence
        })
    }
}

class Knight extends Player {
    constructor(name, health, strength, defence) {
        super(name, health, strength)
        this.defence = defence || 10;
    }
    defend() {
        console.log(`${this.name} uses defend`);
        let blocked = enemy.strength - this.defence / 2 // blocked is enemy strength minus half defence stat

        if (blocked < 0) {
            blocked = 0;
        }

        console.log(`attack blocked: ${blocked} damage received`)
        player.health -= blocked;
        return this;
    }
}

class Enemy {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health || 100;
        this.strength = strength || 5;
    }
    encounter() {
        console.log(`${player.name} encounters ${this.name}: ${this.health}hp \n`)
    }
    attack() {
        console.log(`${this.name} uses attack on ${player.name}`);
        let damage = this.strength * Math.floor(Math.random() * 10) + 1;
        console.log(`attack hits for ${damage}`);
        player.defend();
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
            strength: this.strength
        })
    }
}

function combat() {
        // console.log(`${enemy.name}: ${enemy.health}hp \n`);
        player.attack(enemy);
        console.log(`${enemy.name}: ${enemy.health}hp \n`);

        // player.defend(enemy);
        // console.log(`${player.name}: ${player.health}hp \n`);
        
        // console.log(`${player.name}: ${player.health}hp \n`);
        enemy.attack(player);
        console.log(`${player.name}: ${player.health}hp \n`);
}

// name, health, strength, defence
const player = new Knight("Joe", 500, 10, 10); // damage is calculated using strength * random number 1 to 10

// name, health, strength
const enemy = new Enemy("Demon", 250, 30); // damage is calculated using strength * random number 1 to 10

player.stats();
enemy.stats();

enemy.encounter();
player.greet();

let turn = 1;
while (player.health > 0 && enemy.health > 0) {
    console.log(`turn ${turn++}`);
    combat();
}

if (enemy.health <= 0) {
    player.stats();
    enemy.stats();
    return console.log(`${enemy.name} has been slain`);
}

else if (player.health <= 0) {
    player.stats();
    enemy.stats();
    return console.log(`${player.name} has been slain`);
}
