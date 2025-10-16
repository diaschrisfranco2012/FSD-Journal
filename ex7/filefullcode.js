const fs = require('fs');
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a file name (with .txt extension): ", (filepath) => {

    if (fs.existsSync(filepath)) {
        console.log('File exists');

        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) throw err;
            console.log('File content:\n', data);
            r1.close();
        });
    } else {
        console.log('File does not exist \nCreating a new file...');

        r1.question('Enter some content to write in the file: ', (inputData) => {
            fs.writeFile(filepath, inputData, (err) => {
                if (err) throw err;
                console.log('File created and data written.');

                fs.appendFile(filepath, '\nWelcome to File System Practical.', (err) => {
                    if (err) throw err;
                    console.log('Additional data appended.');

                    fs.readFile(filepath, 'utf8', (err, data) => {
                        if (err) throw err;
                        console.log('Final File content:\n', data);
                        r1.close(); 
                    });
                });
            });
        });
    }
});
