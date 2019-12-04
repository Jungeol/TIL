const path = require('path');
const fs = require('fs');


function main () {
    const exportPath = path.resolve('_exports');
    if (!fs.existsSync(exportPath)) {
        fs.mkdirSync(exportPath);
    }
    fs.rm

    const pathList = fs.readdirSync(__dirname);

    const dirList = pathList.filter((name) => {
        const stats = fs.lstatSync(name);
        return stats.isDirectory() && name[0] !== '.' && name[0] !== '_';
    });

    for (const dirName of dirList) {
        const dir = fs.readdirSync(path.resolve(dirName));
        for (const fileName of dir.values()) {
            const filePath = path.resolve(dirName, fileName);
            const stats = fs.lstatSync(filePath);
            if (!stats.isFile()) {
                continue;
            }

            const newFileName = dirName + '-' + fileName.replace(/.\w+$/, '') + '.md';

            let content = '---\r\n';
            content += 'title: ' + newFileName.replace(/.\w+$/, '') + '\r\n';
            content += 'tag: ' + dirName + '\r\n';
            content += 'category: ' + dirName + '\r\n';
            content += 'date: ' + getDateString(stats.birthtime) + '\r\n';
            content += '---\r\n';
            content += fs.readFileSync(filePath, 'utf-8');
            
            fs.writeFileSync(path.resolve(exportPath, newFileName), content);
        }
    }
}

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function getDateString(date) {
    let Y = pad(date.getFullYear(), 4),
        M = pad(date.getMonth() + 1, 2),
        D = pad(date.getDay() + 1, 2),
        h = pad(date.getHours(), 2),
        m = pad(date.getMinutes(), 2),
        s = pad(date.getSeconds(), 2);
    
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
}

main();