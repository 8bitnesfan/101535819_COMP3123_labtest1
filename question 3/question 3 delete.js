// question 3 Delete

const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

const deleteLogs = dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file);
            if (fs.lstatSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
                console.log(`Deleted file: ${file}`);
            }
        });

        fs.rmdirSync(dir);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
};

deleteLogs(logsDir);