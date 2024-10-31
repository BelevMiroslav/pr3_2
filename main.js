const logs = document.getElementById("logs");

function logBattle(action) {
    const logEntry = document.createElement("div");
    logEntry.textContent = action;
    logs.prepend(logEntry); 
}

const character = {
    name: "Pikachu",
    level: 1,
    health: 100,
    maxHealth: 100,
    progressBar: document.getElementById("progressbar-character"),
    healthText: document.getElementById("health-character"),
    attack: function(target) {
        const damage = 10;
        target.takeDamage(damage);
        logBattle(`${this.name} використовує Thunder Jolt і завдає ${damage} пошкоджень ${target.name}! ${target.name} має ${target.health} HP залишилося.`);
    },
    specialAttack: function(target) {
        const damage = 20;
        target.takeDamage(damage);
        logBattle(`${this.name} використовує Special Attack і завдає ${damage} пошкоджень ${target.name}! ${target.name} має ${target.health} HP залишилося.`);
    },
    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
        this.updateHealth();
    },
    updateHealth: function() {
        const healthPercentage = (this.health / this.maxHealth) * 100;
        this.progressBar.style.width = `${healthPercentage}%`;
        this.healthText.textContent = `${this.health} / ${this.maxHealth}`;
    }
};

const enemy = {
    name: "Charmander",
    level: 1,
    health: 100,
    maxHealth: 100,
    progressBar: document.getElementById("progressbar-enemy"),
    healthText: document.getElementById("health-enemy"),
    attack: function(target) {
        const damage = 8;
        target.takeDamage(damage);
        logBattle(`${this.name} атакує та завдає ${damage} пошкоджень ${target.name}! ${target.name} має ${target.health} HP залишилося.`);
    },
    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
        this.updateHealth();
    },
    updateHealth: function() {
        const healthPercentage = (this.health / this.maxHealth) * 100;
        this.progressBar.style.width = `${healthPercentage}%`;
        this.healthText.textContent = `${this.health} / ${this.maxHealth}`;
    }
};

document.getElementById("btn-kick").addEventListener("click", () => {
    character.attack(enemy);
});

document.getElementById("btn-special").addEventListener("click", () => {
    character.specialAttack(enemy);
});
