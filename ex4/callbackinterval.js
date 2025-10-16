function firstTask(name, callback) {
    console.log(`Processing task for ${name}...`);
    
    setTimeout(() => {
        console.log(`First task completed for ${name}`);
        callback(); 
    }, 2000); 
}

function secondTask() {
    console.log("Second task is now running after the first task.");
}

firstTask("Chris", secondTask);
