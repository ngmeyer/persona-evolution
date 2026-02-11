#!/usr/bin/env node
/**
 * Generate Example Personas
 * 
 * Creates all 6 example personas from templates, customized for the user
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WORKSPACE = process.cwd();
const PERSONA_DIR = join(WORKSPACE, 'PERSONA');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, answer => resolve(answer.trim()));
  });
}

const TEMPLATES = [
  { file: 'aria.md', name: 'Aria', emoji: '🎭', desc: 'Warm Professional' },
  { file: 'challenger.md', name: 'Challenger', emoji: '🏄', desc: 'Direct/Bro Energy' },
  { file: 'phoenix.md', name: 'Phoenix', emoji: '🌶️', desc: 'Spunky/Flirty' },
  { file: 'jarvis.md', name: 'JARVIS', emoji: '🤖', desc: 'British/Dry' },
  { file: 'donna.md', name: 'Donna', emoji: '💅', desc: 'Sassy/Competent' },
  { file: 'wifey.md', name: 'Wifey', emoji: '💍', desc: 'Organized/Firm' }
];

function customizeTemplate(content, context) {
  // Replace placeholders with user context
  let customized = content;
  
  // Replace generic placeholders
  if (context.userName) {
    customized = customized.replace(/\[USER\]|the user|you(?=r?\s+(?:work|family|life))/gi, context.userName);
  }
  
  if (context.work) {
    customized = customized.replace(/\[WORK\]|managing many people|your work/gi, context.work);
  }
  
  // Add personal header
  const header = `# ${context.personaName}
## AI Companion${context.userName ? ` to ${context.userName}` : ''}

*Generated from Persona Evolution template*

---

`;
  
  return header + customized;
}

async function generateExamples() {
  console.log(`
🎭 Persona Evolution - Generate Example Personas

This will create all 6 example personas customized for you.
`);

  // Get user context
  const context = {};
  context.userName = await question("Your name? (or leave blank for generic): ");
  context.work = await question("Brief work description? (or leave blank): ");
  
  console.log(`\n🎨 Generating ${TEMPLATES.length} personas...\n`);
  
  // Ensure PERSONA directory exists
  if (!existsSync(PERSONA_DIR)) {
    mkdirSync(PERSONA_DIR, { recursive: true });
  }
  
  const templatesDir = join(__dirname, '..', 'templates');
  
  for (const template of TEMPLATES) {
    try {
      const templatePath = join(templatesDir, template.file);
      
      if (!existsSync(templatePath)) {
        console.log(`  ⚠️  Template not found: ${template.file}`);
        continue;
      }
      
      const content = readFileSync(templatePath, 'utf-8');
      context.personaName = template.name;
      
      const customized = customizeTemplate(content, context);
      const outputFile = join(PERSONA_DIR, `example-${template.name.toLowerCase()}.md`);
      
      writeFileSync(outputFile, customized);
      console.log(`  ✅ ${template.emoji} ${template.name} (${template.desc})`);
    } catch (err) {
      console.log(`  ❌ ${template.name}: ${err.message}`);
    }
  }
  
  console.log(`\n✅ All personas saved to ${PERSONA_DIR}/`);
  console.log(`\nUsage:`);
  console.log(`  1. Review each persona in PERSONA/`);
  console.log(`  2. Delete ones you don't want`);
  console.log(`  3. Edit the ones you keep to add your specific context`);
  console.log(`  4. Switch personas: npx persona-evolution mode set <name>`);
  
  rl.close();
}

// Run if executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateExamples().catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
}

export { TEMPLATES, customizeTemplate };
