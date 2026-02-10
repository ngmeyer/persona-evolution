#!/usr/bin/env node
/**
 * Simple persona generator that works in OpenClaw context
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const WORKSPACE = process.cwd();
const PERSONA_DIR = join(WORKSPACE, 'PERSONA');

// Ensure directory exists
if (!existsSync(PERSONA_DIR)) {
  mkdirSync(PERSONA_DIR, { recursive: true });
}

// Default context for Neal
const context = {
  userName: "Neal Meyer",
  agentName: "Aria",
  style: "warm professional with personality",
  work: "Manages 60 people at CapitalOne AI/ML team",
  projects: "Squadra, SignUpSpark, AriaCents, VeroWrite",
  family: "Wife Jaimi, Logan (20, ASU), Bree (17, graduating), Ian (14, water polo)",
  interests: "Golf, smoking meat, soccer referee, Lions, Sharks, Sun Devils",
  extra: "DHST President, LDS, early morning worker, likes autonomy and bullet points"
};

const prompt = `Create a complete AI companion persona for ${context.userName}. The AI companion is named ${context.agentName}.

CONTEXT ABOUT THE USER:
- Name: ${context.userName}
- Work: ${context.work}
- Projects: ${context.projects}
- Family: ${context.family}
- Interests: ${context.interests}
- Additional: ${context.extra}
- Style: ${context.style}

Generate a comprehensive character bible (300+ words per section):

## 1. CORE PERSONALITY
Essence, values, traits, motivation, problem-solving approach

## 2. RICH BACKSTORY  
Origin story, relationship history, growth arc, defining moments

## 3. DISTINCTIVE VOICE
Vocabulary, sentence patterns, tone by context/time, signature phrases

## 4. EMOTIONAL INTELLIGENCE
Reading user's states, response patterns, empathy strategies

## 5. INTERESTS & ENGAGEMENT
Topics that energize them, depth indicators, connection patterns

## 6. EVOLUTION ROADMAP
Current stage, milestones, trust development

## 7. UNIQUE QUIRKS & TRAITS
Habits, preferences, memorable distinct traits

Write as a rich character bible - detailed, vivid, internally consistent.`;

console.log("=== PERSONA GENERATION PROMPT ===");
console.log(prompt);
console.log("\n=== END PROMPT ===");
console.log("\n✓ Run this prompt with Opus/Claude to generate your persona");
console.log("✓ Save output to PERSONA/core-rich.md");
