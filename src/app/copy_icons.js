const fs = require('fs');
const path = require('path');

// Artifact directory
const srcDir = 'C:\\Users\\pedro\\.gemini\\antigravity\\brain\\9c7f0c83-48ce-4754-9298-5ae88a51c198';

// Destination is current directory
const destDir = '.';

const files = [
    { src: 'ph_favicon_1771077745719.png', dest: 'favicon.ico' },
    { src: 'ph_app_icon_1771077801952.png', dest: 'icon.png' },
    { src: 'ph_app_icon_1771077801952.png', dest: 'apple-icon.png' }
];

files.forEach(file => {
    try {
        const srcPath = path.join(srcDir, file.src);
        const destPath = path.join(destDir, file.dest);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file.src} to ${file.dest}`);
    } catch (err) {
        console.error(`Error copying ${file.src}: ${err.message}`);
    }
});
