const cron = require('node-cron');

cron.schedule('*/10 * * * * *', () => {
    console.log('Cron job executed at', new Date().toLocaleTimeString());
});

console.log('Cron job scheduler started...');
