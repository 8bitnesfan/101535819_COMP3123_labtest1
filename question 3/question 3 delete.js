// question 3 Delete

const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

const deleteLogs = dir => {
    if (!fs.existsSync(dir)) {
        console.log('Logs directory does not exist');
        return;
    }

    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.lstatSync(filePath).isFile()) {
            fs.unlinkSync(filePath);
            console.log(`delete files...${file}`);
        }
    });

    fs.rmdirSync(dir);
};

deleteLogs(logsDir);