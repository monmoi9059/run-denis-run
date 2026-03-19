const fs = require('fs');
const html = fs.readFileSync('RDR.html', 'utf8');
const lines = html.split('\n');
let depth = 0;
let insideFunction = null;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('function ')) {
        insideFunction = lines[i].trim();
    }

    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === '{') depth++;
        if (lines[i][j] === '}') {
            depth--;
            if (depth === 0) insideFunction = null;
        }
    }

    if (i === lines.length - 1) {
        console.log("Ended in function:", insideFunction, "depth:", depth);
    }
}
