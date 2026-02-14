const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\pedro\\.gemini\\antigravity\\brain\\9c7f0c83-48ce-4754-9298-5ae88a51c198';
const destDir = 'src/app';

const copyFile = (srcFile, destFile) => {
    try {
        fs.copyFileSync(path.join(srcDir, srcFile), path.join(destDir, destFile));
        console.log(`Copied ${srcFile} to ${destFile}`);
    } catch (err) {
        console.error(`Error copying ${srcFile}: ${err.message}`);
    }
};

copyFile('ph_favicon_1771077745719.png', 'favicon.ico');
copyFile('ph_app_icon_1771077801952.png', 'icon.png');
copyFile('ph_app_icon_1771077801952.png', 'apple-icon.png');
