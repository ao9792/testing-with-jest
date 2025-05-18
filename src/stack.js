const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    throw new Error("Cannot pop from empty stack"); 
};

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}

