const readline = require('readline');
const usersDB = [
    { username: "Chris", password: "12345" },
    { username: "Alice", password: "6969" },
    { username: "Bob", password: "abc123" }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

function validateUser(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Validating user...");
        setTimeout(() => {
            const user = usersDB.find(u => u.username === username && u.password === password);
            if (user) {
                resolve(user); 
            } else {
                reject("Invalid username or password!");
            }
        }, 1000);
    });
}

function approveUser(user) {
    return new Promise((resolve) => {
        console.log("Approving user...");
        setTimeout(() => {
            resolve(`${user.username} is approved!`);
        }, 1000);
    });
}

async function loginProcess() {
    try {
        const username = await getUserInput("Enter username: ");
        const password = await getUserInput("Enter password: ");
        rl.close();

        validateUser(username, password)
            .then(user => approveUser(user))
            .then(result => console.log(result))
            .catch(error => console.error("Error:", error));

    } catch (err) {
        console.error("Error during input:", err);
    }
}

loginProcess();
