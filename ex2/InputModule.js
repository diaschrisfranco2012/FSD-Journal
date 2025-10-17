const readline = require('readline');
const _ = require('lodash');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getStudentDetail(callback) {
    r1.question("Enter Student Name: ", function(name) {
        r1.question("Enter marks separated by commas (e.g., 78,88,92): ", function(marksInput) {
            r1.close();

            const marksArray = marksInput.split(',').map(m => parseInt(m.trim()));
            const totalMarks = _.sum(marksArray);
            const percentage = (totalMarks / (marksArray.length * 100)) * 100;
            callback({ name: name, marks: marksArray, total: totalMarks,percentage:percentage.toFixed(2)});
        });
    });
}


module.exports = {getStudentDetail};
