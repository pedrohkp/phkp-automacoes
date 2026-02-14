const fs = require('fs');
const path = require('path');

// Go up two levels from src/app to project root
const srcPath = path.join(__dirname, '../../pedro.final.jpg');
const destPath = path.join(__dirname, '../../public/pedro-final.jpg');

try {
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Successfully copied ${srcPath} to ${destPath}`);
    } else {
        console.error(`Source file not found: ${srcPath}`);
        // Try listing root dir to debug
        const rootDir = path.join(__dirname, '../../');
        console.log('Files in root:', fs.readdirSync(rootDir));
    }
} catch (err) {
    console.error(`Error copying file: ${err.message}`);
}
