import fs from 'fs';

const code = fs.readFileSync('app_readable.js', 'utf8');

// Find all data arrays defined before/in components
// T, E, ce, de, pe, he, _e, ye, Se, D
const arrayNames = ['T', 'E', 'ce', 'de', 'pe', 'he', '_e', 'ye', 'Se', 'D'];

arrayNames.forEach(name => {
  const reg = new RegExp(`(?:const|var|let)\\s+${name}\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'g');
  const match = reg.exec(code);
  if (match) {
    console.log(`\n==================== ARRAY ${name} ====================`);
    console.log(match[0]);
  } else {
    // Try searching without semicolon
    const idx = code.indexOf(`${name}=[` );
    if (idx !== -1) {
      console.log(`\n==================== ARRAY ${name} (at ${idx}) ====================`);
      console.log(code.slice(idx, idx + 2000));
    }
  }
});
