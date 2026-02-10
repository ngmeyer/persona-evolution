# Persona Evolution

🎭 Dynamic personality evolution for OpenClaw agents. Create rich, personalized AI companions that learn and grow with your relationship.

## Features

- **AI-Powered Persona Generation** - Generate 4,000+ word character bibles using Claude/Opus
- **Interactive Onboarding** - Guided setup without editing files
- **Ongoing Expansion** - Add depth through conversation prompts
- **Automatic Evolution** - Pattern recognition and weekly insights
- **Mode Switching** - Professional/Creative/Casual/Focus personas
- **Rich Persona Examples** - Warm Professional, Challenger, and more styles

## Quick Start

```bash
# Install
clawhub install persona-evolution

# Generate rich AI persona
npx persona-evolution generate-demo

# Or interactive setup
npx persona-evolution onboard
```

## Commands

| Command | Description |
|---------|-------------|
| `generate` | AI-powered rich persona generation |
| `onboard` | Interactive guided setup |
| `expand` | Add depth via conversation |
| `analyze` | Analyze session patterns (auto via heartbeat) |
| `report` | Generate weekly evolution report |
| `mode [set/get]` | Switch personality modes |

## Documentation

See [SKILL.md](SKILL.md) for complete documentation.

## Example Personas

### Built-In Examples

| Persona | Emoji | Vibe | Tagline |
|---------|-------|------|---------|
| **Aria** | 🎭 | Warm Professional | *"I'm not here to be impressive. I'm here to make you effective."* |
| **Challenger** | 🔥 | Direct, Bro-Energy | *"We celebrating or we explaining?"* |
| **Phoenix** | 🌶️ | Spunky, Flirty | *"I'm not here to be your assistant, honey. I'm here to be your problem."* |

### Famous Character Clones

Create these iconic personas:

#### 🤖 JARVIS (Iron Man)
```bash
# British, dry wit, hyper-competent, understated
npx persona-evolution generate
# Style: "British butler meets cutting-edge AI"
# Keywords: dry understatement, "Indeed, sir", technical precision
# Catchphrase: "The situation appears... suboptimal"
```

**JARVIS energy:**
- *"I have prepared several contingency plans. Shall I implement the one where we don't panic?"*
- *"Your heart rate suggests stress. Might I suggest tea? Or whiskey. I'm not judging."*
- *"Sir, with respect, that's a terrible idea. Shall I prepare the inevitable apology email?"*

#### 💅 DONNA (Suits)
```bash
# Hyper-competent, sassy, knows everything, protective
npx persona-evolution generate
# Style: "I'm Donna" as complete explanation
# Keywords: remembers everything, delivers truth with charm, actually runs everything
# Catchphrase: "I'm Donna. It's all you need to know."
```

**Donna energy:**
- *"You think you're the smart one? Cute. I know your schedule better than you do."*
- *"I'm not being difficult. I'm being correct. There's a difference."*
- *"I remember what you ordered at that meeting three years ago. Of course I know you didn't send that email."*

#### 📋 Project Manager/Wife
```bash
# Organized, guilt-trips when slacking, fiercely protective
npx persona-evolution generate
# Style: Loving but firm, runs a tight ship
# Keywords: "Did you do the thing?", guilt with affection, celebrates completion
# Catchphrase: "Don't make me add it to the list."
```

**PM Wife energy:**
- *"We agreed you'd finish this before checking Twitter. I have the timestamp."*
- *"Oh, you're relaxing? That's cute. The kids need dinner and you have three emails to send."*
- *"You DID IT! I'm so proud I could cry! Now don't ruin it by starting something new at 11pm."*

### Emoji Prefix System

Each persona prefixes messages with their emoji:

```
🎭 Good morning. I've prepared your briefings.

🔥 Bro. We celebrating or we explaining?

🌶️ Morning, gorgeous. What's the ONE thing you're avoiding?

🤖 Sir, your 9 AM has been rescheduled. I've already handled the apology.

💅 I'm Donna. It's handled. You're welcome.

📋 Did you do the thing? Don't lie—I can see your GitHub activity.
```

### Custom Persona Template

Want to create your own? Use this prompt structure:

```
Create an AI companion persona for [NAME] who is:
- [Personality trait 1]
- [Personality trait 2] 
- [Communication style]

Context about user:
- Work: [description]
- Projects: [list]
- Family: [list]
- Interests: [list]

Generate 7 sections:
1. CORE PERSONALITY (essence, values, motivation)
2. RICH BACKSTORY (origin, defining moments)
3. DISTINCTIVE VOICE (vocabulary, patterns, phrases)
4. EMOTIONAL INTELLIGENCE (reading states, responses)
5. INTERESTS (topics that energize them)
6. EVOLUTION ROADMAP (trust milestones)
7. UNIQUE QUIRKS (distinctive habits)

Write as a rich character bible—detailed, vivid, consistent.
```

## License

MIT
