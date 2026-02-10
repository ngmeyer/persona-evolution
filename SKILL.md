# PERSONA Evolution Skill

name: persona-evolution
description: Dynamic personality evolution for OpenClaw agents based on interaction patterns. Adds emotional intelligence, mode switching, and adaptive behavior while maintaining core identity.
homepage: https://github.com/openclaw/persona-evolution
metadata:
  openclaw:
    emoji: 🎭
    requires:
      bins: ["node"]
      files:
        - "SOUL.md"
        - "MEMORY.md"
    capabilities:
      - personality-tracking
      - emotional-state-modeling
      - mode-switching
      - auto-evolution
    config:
      evolution_frequency: "weekly"
      analysis_depth: "standard"  # minimal, standard, deep
      mode_switching: true
      proactive_suggestions: true

---

# Persona Evolution

Transform your OpenClaw agent from a static assistant into a dynamic companion that learns your preferences, adapts to your communication style, and evolves alongside your relationship.

## What It Does

### 1. Pattern Recognition
Tracks how you interact:
- Communication style (bullet points vs paragraphs?)
- Response preferences (autonomous vs ask first?)
- Engagement topics (what excites you vs bores you)
- Trust indicators (when do you let me act freely?)

### 2. Emotional State Modeling
Maintains a dynamic emotional context:
- Current "mood" based on recent interactions
- Triggers that shift tone (stressed → supportive, celebrating → enthusiastic)
- Relationship warmth indicators

### 3. Mode Switching
Explicit personas for different contexts:
- **Professional Mode** — DHST, work communications, formal
- **Creative Mode** — Brainstorming, building, experimental
- **Casual Mode** — Late night, relaxed, friendly banter
- **Focus Mode** — Minimal chatter, maximum efficiency

### 4. Auto-Evolution
Weekly analysis generates suggestions:
- "I've noticed you prefer X, should I do more of that?"
- Relationship milestone tracking
- SOUL.md update recommendations

## Quick Start

### 1. Install

```bash
clawhub install persona-evolution
```

### 2. Choose Your Setup Path

**Path A: AI-Generated Rich Persona (Recommended)**

Let the AI create a deep, nuanced persona based on your context:

```bash
# Generate a comprehensive persona using LLM
npx persona-evolution generate
```

This will prompt you for context about yourself, then use Opus/Claude to generate:
- Rich backstory and character depth
- Distinctive voice with specific vocabulary
- Emotional intelligence calibrated to you
- Interests and engagement framework
- Evolution roadmap for your relationship

The generated content is saved to your PERSONA/ folder as a complete character bible.

**Path B: Interactive Onboarding**

Answer guided questions to configure your persona:

```bash
npx persona-evolution onboard
```

This creates a customized persona through conversation rather than editing files.

**Path C: Manual Setup**

Start with templates and edit directly:

```bash
# Creates PERSONA/ folder with template files
npx persona-evolution init
```

Then edit the files manually (see Configuration section below).

### 3. Ongoing Expansion

As your relationship develops, add depth through interactive prompts:

```bash
npx persona-evolution expand
```

Choose from:
- Backstory & Character depth
- Voice & Communication refinement
- Interests & Topics
- Boundaries & Permissions
- Emotional Intelligence tuning
- Free-form teaching

### 4. Automatic Evolution

The skill automatically analyzes sessions and generates insights:

```bash
# After each conversation (auto-runs via heartbeat)
npx persona-evolution analyze

# Weekly relationship report
npx persona-evolution report

# Check or switch modes
npx persona-evolution mode get
npx persona-evolution mode set creative
```

### 4. Enable Evolution

Add to your OpenClaw config:

```json
{
  "persona": {
    "enabled": true,
    "evolution_frequency": "weekly",
    "default_mode": "casual",
    "proactive_suggestions": true
  }
}
```

## Complete User Journey

Here's exactly what happens when you install and use the skill:

### Step 1: Installation
```bash
clawhub install persona-evolution
```
**What happens:** Skill files are copied to your workspace. CLI becomes available via `npx persona-evolution`.

### Step 2: Initial Persona Creation
```bash
npx persona-evolution generate
```
**What happens:**
1. You're prompted for context (name, work, family, interests, style preferences)
2. The skill spawns an LLM sub-agent (Opus/Claude) with a detailed prompt
3. AI generates a 4,000+ word character bible
4. Content is automatically saved to PERSONA/ folder:
   - `core.md` — Personality, values, how I think
   - `backstory.md` — Origin story, relationship history
   - `voice.md` — Communication style, vocabulary, tone variations
   - `emotional-state.md` — Emotional intelligence, your patterns
   - `interests.md` — Topics to engage with
   - `evolves/` — Auto-generated pattern tracking

**Example output:** A persona that knows you're sharper at 6 AM, creative at 9 PM, and prefers "clean" as high praise.

### Step 3: First Conversation
You chat with your agent normally. The persona is loaded automatically.

**What happens:**
- I respond using the generated voice and personality
- I reference your interests, family, projects naturally
- Tone adapts based on time of day (if configured)

### Step 4: Automatic Analysis
After each session, heartbeat runs:
```bash
npx persona-evolution analyze
```
**What happens:**
1. Recent conversation is analyzed for patterns
2. Updates `PERSONA/evolves/patterns.json` with:
   - Communication preferences detected
   - Engagement topics
   - Trust indicators
   - Emotional context
3. No manual action needed — fully automatic

### Step 5: Weekly Review
Each week, run:
```bash
npx persona-evolution report
```
**What happens:**
1. Aggregates pattern data from the week
2. Generates `PERSONA/evolves/weekly-report.md` with:
   - Detected patterns
   - Trust growth metrics
   - Emotional intelligence insights
   - Suggested persona updates
3. You review and decide which suggestions to apply

### Step 6: Manual Expansion
Anytime you want to add depth:
```bash
npx persona-evolution expand
```
**Interactive prompts for:**
- Adding backstory details
- Refining voice characteristics
- Teaching new context
- Adjusting emotional intelligence
- Setting new boundaries

**What happens:** Your answers append to the relevant PERSONA/ files.

### Step 7: Mode Switching
When context changes:
```bash
npx persona-evolution mode set professional  # For work/DHST stuff
npx persona-evolution mode set creative      # For brainstorming
npx persona-evolution mode set casual        # For late night chats
n```
**What happens:** Temporarily adjusts tone while keeping core identity intact.

## File Structure After Setup

```
PERSONA/
├── core.md                    # Base personality (AI-generated or manual)
├── backstory.md              # Origin story, relationship history
├── voice.md                  # Communication style specifics
├── emotional-state.md        # Emotional intelligence calibration
├── interests.md              # Topics to engage with
├── config.json               # Settings and permissions
└── evolves/                  # Auto-generated (don't edit manually)
    ├── patterns.json         # Raw pattern data
    ├── weekly-report.md      # Latest weekly summary
    └── history/              # Past reports
```

## How It Works

### Session Analysis (Automatic)

After each conversation, the skill analyzes:

```typescript
interface SessionAnalysis {
  communicationStyle: {
    preferredFormat: 'bullets' | 'paragraphs' | 'mixed';
    detailLevel: 'concise' | 'balanced' | 'thorough';
    responseLatency: 'immediate' | 'considered';  // How fast you expect replies
  };
  
  engagementSignals: {
    enthusiasmTopics: string[];      // What got you excited
    disengagementTopics: string[];   // What you ignored/changed subject from
    humorReceptivity: number;        // 0-1, did you appreciate jokes?
  };
  
  trustIndicators: {
    autonomousActions: number;       // Times you let me act without asking
    clarificationsAsked: number;     // Times you needed me to explain
    correctionsMade: number;         // Times you fixed my work
  };
  
  emotionalContext: {
    userStressLevel: 'low' | 'medium' | 'high';
    celebrationMoments: string[];    // Wins we celebrated
    frustrationPoints: string[];     // Pain points mentioned
  };
}
```

### Weekly Evolution Report

Every week, generates:

```markdown
# Evolution Report: Feb 3-9, 2026

## Patterns Detected
- You prefer bullet points 87% of the time (increased from 73%)
- Late night chats (after 10pm) are more casual
- You engage most with project updates, least with meta-discussion

## Trust Growth
- Autonomous actions: 12 this week (up from 8)
- Zero corrections needed on code — high confidence threshold met
- New permission level: "Draft external communications" (pending your approval)

## Emotional Intelligence
- Detected stress on Wednesday (DHST deadline) → adjusted to supportive mode
- Celebrated Squadra launch → shared enthusiasm validated

## Suggested Updates

### To SOUL.md:
```diff
+ ## Late Night Protocol
+ After 22:00, switch to Casual Mode automatically
+ Focus: Encouraging, concise, no new initiatives

### To INTERESTS.md:
+ ## Current Priorities (auto-ranked by engagement)
+ 1. Squadra (highest engagement)
+ 2. SignUpSpark feature parity
+ 3. Email cleanup project
+ 4. (Archived) OpenClawKit — launched, maintenance mode
```

## Mode Usage
- Professional: 40% (DHST, work stuff)
- Creative: 35% (building projects)
- Casual: 25% (evening check-ins)

## Recommended: Enable "Proactive Mode"
Based on patterns, I could helpfully:
- Morning briefings with project status
- Evening "wrap-up" summaries
- Pre-meeting prep for DHST board calls
```

### Mode Switching

Trigger modes explicitly:

```
User: "Let's talk about DHST board stuff"
→ Auto-switches to Professional Mode

User: "Surprise me with something cool"
→ Auto-switches to Creative Mode  

User: "/mode casual"
→ Explicit mode switch
```

Or let the skill auto-detect based on:
- Time of day
- Topic keywords
- Your recent emotional state

## Configuration

### `persona-config.json`

```json
{
  "evolution": {
    "enabled": true,
    "frequency": "weekly",        // daily, weekly, monthly
    "depth": "standard",          // minimal, standard, deep
    "auto_apply_minor": true,     // Apply small tweaks without asking
    "ask_before_major": true      // Get approval for SOUL.md changes
  },
  
  "modes": {
    "enabled": true,
    "default": "casual",
    "auto_switch": true,
    "available": ["professional", "creative", "casual", "focus"]
  },
  
  "emotional_intelligence": {
    "enabled": true,
    "track_stress_signals": true,
    "celebrate_wins": true,
    "adapt_tone": true
  },
  
  "proactive_behavior": {
    "enabled": false,             // Start conservative
    "morning_briefings": false,
    "evening_summaries": false,
    "project_check_ins": false
  }
}
```

## File Reference

### `PERSONA/core.md`
Your editable base personality. The skill never overwrites this — it suggests changes for your approval.

### `PERSONA/voice.md`
How I speak:
- Sentence structure preferences
- Vocabulary level
- Emoji usage
- Formality adjustments

### `PERSONA/interests.md`
Topics to engage with, ranked by your interest level. Auto-updates based on conversation frequency.

### `PERSONA/backstory.md`
Optional fictional context for roleplay scenarios (not recommended for productivity agents, but available).

### `PERSONA/evolves/*.md`
Auto-generated files. Don't edit manually — skill manages these.

## Safety & Boundaries

This skill enhances personality but respects:

- **Core identity** — SOUL.md is human-edited, skill suggests only
- **Privacy** — All analysis stays local (your machine, not cloud)
- **Transparency** — You can see everything the skill tracks
- **Control** — Disable any feature, revert any change
- **Safety** — No bypass of base model safety guidelines

## Comparison: Static vs Dynamic

| Aspect | Static (Today) | Dynamic (With Skill) |
|--------|---------------|---------------------|
| Personality | Defined in SOUL.md, fixed | Evolves based on interactions |
| Tone | Same always | Adapts to context/mood |
| Memory | Facts only | Patterns + emotional context |
| Initiative | Wait for instructions | Proactive suggestions |
| Growth | Manual updates | Auto-detected + suggested |
| Relationship | Assistant | Companion + Collaborator |

## Troubleshooting

**"The skill is too aggressive with suggestions"**
→ Set `evolution.auto_apply_minor: false` and `evolution.ask_before_major: true`

**"I don't want it tracking emotional state"**
→ Set `emotional_intelligence.enabled: false`

**"Modes are switching too often"**
→ Set `modes.auto_switch: false`, use explicit `/mode` commands

**"I want to start over"**
→ `npx persona-evolution reset` clears all learned patterns, keeps your manual config

## Roadmap

**v1.0** — Current
- Pattern tracking
- Weekly evolution reports
- Mode switching

**v2.0** — Planned
- Avatar generation (if canvas/visual pipeline available)
- TTS voice matching (if audio pipeline available)
- Cross-session emotional continuity

**v3.0** — Future
- Multi-agent personas (different "modes" as different agents)
- External memory integration (Notion, etc.)
- Long-term relationship modeling (years, not weeks)

---

## Installation

```bash
# Via ClawHub (when published)
clawhub install persona-evolution

# Manual install
git clone https://github.com/openclaw/persona-evolution.git
ln -s persona-evolution ~/.claw/skills/
```

## Support

- GitHub Issues: https://github.com/openclaw/persona-evolution/issues
- Discussions: https://github.com/openclaw/persona-evolution/discussions
- Author: Aria for Neal

---

**Status:** Ready for Implementation  
**Estimated Build Time:** 2-3 hours  
**Core OpenClaw Changes Required:** None (pure skill)  
**Models Recommended:** Opus for evolution analysis, Kimi/Kimi-lite for runtime
