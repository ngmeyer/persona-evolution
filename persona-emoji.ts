#!/usr/bin/env node
/**
 * Persona Mode Switcher with Emoji Prefixes
 * 
 * Switch between personas and automatically add emoji prefixes to responses
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const WORKSPACE = process.cwd();
const PERSONA_DIR = join(WORKSPACE, 'PERSONA');

// Emoji mappings for personas
const PERSONA_EMOJIS = {
  'aria': '🎭',
  'warm': '🎭',
  'professional': '💼',
  'challenger': '🏄',
  'phoenix': '🌶️',
  'spunky': '🌶️',
  'jarvis': '🤖',
  'british': '🤖',
  'donna': '💅',
  'wifey': '💍',
  'pmwife': '💍',
  'projectmanager': '💍',
  'wife': '💍',
  'organized': '💍',
  'creative': '🎨',
  'casual': '😎',
  'focus': '🎯',
  'dwight': '🫜',
  'assistant': '🫜',
  'beet': '🫜'
};

export function getPersonaEmoji(personaName) {
  const normalized = personaName.toLowerCase().replace(/[^a-z]/g, '');
  return PERSONA_EMOJIS[normalized] || '🎭';
}

export function prefixWithEmoji(text, personaName) {
  const emoji = getPersonaEmoji(personaName);
  // If text already starts with emoji, don't double-prefix
  if (text.match(/^[\p{Emoji}\u200d\u20e3\ufe0f]/u)) {
    return text;
  }
  return `${emoji} ${text}`;
}

export function formatAsPersona(text, personaName) {
  const emoji = getPersonaEmoji(personaName);
  const lines = text.split('\n');
  
  // Add emoji to first non-empty line
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim()) {
      if (!lines[i].match(/^[\p{Emoji}\u200d\u20e3\ufe0f]/u)) {
        lines[i] = `${emoji} ${lines[i]}`;
      }
      break;
    }
  }
  
  return lines.join('\n');
}

// CLI usage
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (!command || command === 'help' || command === '--help') {
    console.log(`
🎭 Persona Emoji Prefixer

Usage:
  persona-emoji <persona> <message>    # Prefix message with persona emoji
  persona-emoji get <persona>          # Get emoji for persona
  persona-emoji list                   # List all personas and emojis

Examples:
  persona-emoji jarvis "Good morning, sir"
  # Output: 🤖 Good morning, sir

  persona-emoji get donna
  # Output: 💅

Personas:
  🎭 Aria (Warm Professional)
  🔥 Challenger (Direct/Bro)
  🌶️ Phoenix (Spunky/Flirty)
  🤖 JARVIS (British/Dry)
  💅 Donna (Sassy/Competent)
  📋 PM/Wife (Organized/Firm)
  🎨 Creative
  😎 Casual
  🎯 Focus
  💼 Professional
`);
    process.exit(0);
  }
  
  if (command === 'list') {
    console.log('\n🎭 Available Personas:\n');
    Object.entries(PERSONA_EMOJIS).forEach(([name, emoji]) => {
      console.log(`  ${emoji} ${name}`);
    });
    console.log('');
    process.exit(0);
  }
  
  if (command === 'get') {
    const persona = args[1];
    if (!persona) {
      console.error('Usage: persona-emoji get <persona>');
      process.exit(1);
    }
    console.log(getPersonaEmoji(persona));
    process.exit(0);
  }
  
  // Default: prefix message
  const persona = command;
  const message = args.slice(1).join(' ');
  
  if (!message) {
    console.error('Usage: persona-emoji <persona> <message>');
    process.exit(1);
  }
  
  console.log(prefixWithEmoji(message, persona));
}

import { fileURLToPath } from 'url';
