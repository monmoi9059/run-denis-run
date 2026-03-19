const fs = require('fs');
const html = fs.readFileSync('RDR.html', 'utf8');
const lines = html.split('\n');
let depth = 0;
let out = [];

for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === '{') depth++;
        if (lines[i][j] === '}') depth--;
    }
    if (lines[i].includes('function ')) {
        out.push(`${i+1}: ${lines[i].trim()} -> ${depth}`);
    }
}
console.log(out.join('\n'));
