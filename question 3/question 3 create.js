const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

const createLogs = dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log('Logs directory created');
    }

    Array.from({ length: 10 }, (_, i) => {
        const fileName = `log${i + 1}.txt`;
        const filePath = path.join(dir, fileName);
        fs.writeFileSync(filePath, `This is log number ${i + 1}`);
        console.log(fileName);
    });
};

createLogs(logsDir);