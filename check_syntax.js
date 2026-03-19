const fs = require('fs');
const html = fs.readFileSync('RDR.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (scriptMatch) {
    const scriptContent = scriptMatch[1];
    try {
        // Try parsing the script content
        new Function(scriptContent);
        console.log("Syntax OK!");
    } catch (e) {
        console.error("Syntax Error:", e);
    }
} else {
    console.log("No script found");
}
