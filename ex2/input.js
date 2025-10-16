const readline = require('readline');
const _ = require('lodash');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by commas: ", function(input) {
    // Separate by commas and convert to numbers
    const numbers = input.split(',').map(Number);

    console.log("Original Array:", numbers);

    const uniqueNumbers = _.uniq(numbers);
    console.log("Unique Values:", uniqueNumbers);

    const sortedNumbers = _.sortBy(uniqueNumbers);
    console.log("Sorted array:", sortedNumbers);

    const maxNumber = _.max(numbers);
    console.log("Maximum number:", maxNumber);

    const reversedArray = _.reverse(sortedNumbers); 
    console.log("Reversed array:", reversedArray);

    const chunks = _.chunk(numbers, 2);
    console.log("Chunked (groups of 2):", chunks);

    rl.close();
});