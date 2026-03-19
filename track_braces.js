const fs = require('fs');
const html = fs.readFileSync('RDR.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/)[1];

let depth = 0;
const lines = scriptMatch.split('\n');
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === '{') depth++;
        if (lines[i][j] === '}') depth--;
    }
    if (depth < 0) console.log("NEGATIVE DEPTH line " + (i+1));
}
if (depth !== 0) {
    console.log("Mismatched braces. Final depth: " + depth);
} else {
    console.log("Braces match!");
}
