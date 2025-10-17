const calcgrade = require('./grade');

function showResult(student) {
    const grade = calcgrade.calculateGrade(parseFloat(student.percentage));
    console.log(`\nStudent's Name: ${student.name}`);
    console.log(`Marks: ${student.marks.join(',')}`);
    console.log(`Total Marks: ${student.total}`);
    console.log(`Percentage: ${student.percentage}%`);
    console.log(`Grade: ${grade}`);
}

module.exports = { showResult };

