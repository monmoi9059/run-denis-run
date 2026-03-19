const fs = require('fs');
const acorn = require('acorn');
const html = fs.readFileSync('RDR.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (scriptMatch) {
    const scriptContent = scriptMatch[1];
    try {
        acorn.parse(scriptContent, {ecmaVersion: 2020});
        console.log("Syntax OK!");
    } catch (e) {
        console.error("Syntax Error on line " + e.loc.line + " col " + e.loc.column);
        console.error(e.message);
        const lines = scriptContent.split('\n');
        for (let i = Math.max(0, e.loc.line - 3); i < Math.min(lines.length, e.loc.line + 3); i++) {
            console.log(`${i+1}: ${lines[i]}`);
        }
    }
}
