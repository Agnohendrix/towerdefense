function createEnemy(x, y, template) {
    var e = new Enemy(x, y);
    // Fill in all keys
    template = typeof template === 'undefined' ? {} : template;
    var keys = Object.keys(template);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        e[key] = template[key];
    }
    e.onCreate();
    return e;
}


var enemy = {};

enemy.weak = {
    // Display
    color: [127, 64, 10],
    // Misc
    name: 'weak'
};

enemy.strong = {
    // Display
    color: [1, 152, 117],
    radius: 0.6,
    // Misc
    name: 'strong',
    // Stats
    cash: 2,
    damage: 2,
    health: 75
};

enemy.fast = {
    // Display
    color: [61, 251, 255],
    // Misc
    name: 'fast',
    // Stats
    cash: 4,
    damage: 5,
    health: 75,
    speed: 2
};

/*
enemy.basic = {
    // Display
    color: [154, 18, 179],
    // Misc
    name: 'basic'
};

enemy.fast = {
    // Display
    color: [61, 251, 255],
    // Misc
    name: 'fast',
    // Stats
    cash: 8,
    damage: 5,
    health: 3,
    speed: 2
};

enemy.tank = {
    // Display
    color: [150, 40, 27],
    // Misc
    name: 'tank',
    // Stats
    armor: 0.2,
    cash: 20,
    damage: 15,
    health: 10
};
*/