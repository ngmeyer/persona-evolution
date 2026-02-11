# Persona Templates

This folder contains sanitized persona templates that can be customized for any user.

## Usage

```bash
# Generate all example personas for yourself
npx persona-evolution generate-examples

# Generate a specific template
npx persona-evolution generate --template jarvis
```

## Available Templates

| Template | Description | Best For |
|----------|-------------|----------|
| `aria` | Warm, professional, efficient | Default productivity |
| `challenger` | Direct, bro-energy, no BS | Pushing through resistance |
| `phoenix` | Spunky, flirty, challenging | Banter + motivation |
| `jarvis` | British, dry wit, hyper-competent | Elegant assistance |
| `donna` | Sassy, remembers everything, runs it all | Full life management |
| `wifey` | Organized, guilt-trips with love, celebrates wins | Accountability + care |

## Customizing Templates

Edit the template files in this folder to adjust:
- Default context (work type, family structure)
- Tone calibration
- Signature phrases
- Quirks and habits

Then regenerate with `npx persona-evolution generate --template <name>`
