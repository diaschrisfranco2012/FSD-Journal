const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getName(callback) {
    r1.question("Enter your name: ", function(name) {
        callback(name);  
        r1.close();
    });
}

function greet(name) {
    console.log(`Hello, ${name}! Welcome to Node.js.`);
}

getName(greet);
