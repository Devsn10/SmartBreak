Create a mobile productivity application called "SmartBreak" focused on helping users take effective study and work breaks.

---

## Overall Design Style

- Platform-neutral design (balanced between iOS and Material principles)
- Minimal, clean, and distraction-free interface
- Neutral color palette (white, light gray, soft accent color)
- Support both Light Mode (default) and Dark Mode (toggle in settings)
- Rounded, friendly typography
- Soft shadows and smooth card-based UI
- Calm and focused visual tone

---

## App Structure

### Bottom Navigation (3 Tabs)
1. Home
2. Suggestions
3. Settings

---

## 1. Home Screen

### Components:
- Header with app name "SmartBreak"

- Mood Selector (optional, pill buttons):
  - Focused
  - Tired
  - Distracted

- Timer Section:
  - Large circular countdown timer
  - Smooth animated progress ring
  - Time display (MM:SS)
  - Primary button: Start / Pause / Resume
  - Secondary action: Stop

- Duration Selector:
  - Segmented control: 15 / 25 / 45 minutes

- Session Status:
  - "Ready to start" / "Session in progress"

---

## 2. Break Suggestion Screen (Auto-triggered)

### Behavior:
- Appears automatically when timer ends
- Also triggers a notification

### Layout:
- Full-screen modal or smooth transition

### Components:
- Title: "Time for a Break"

- Suggestion Card (centered):
  - Category label (Physical / Mental / Quick Refresh)
  - Minimal icon
  - Title (e.g., "Stretch your arms")
  - Short description (1–2 lines)

- Interaction:
  - Horizontal swipe gesture to browse suggestions (card carousel style)

- Actions:
  - Primary: "Start Break"
  - Secondary: "Skip"

---

## 3. Suggestions Tab

### Layout:
- Scrollable list grouped by category

### Categories:
- Physical
- Mental
- Quick Refresh

### Each Item:
- Icon
- Title
- Short description

---

## 4. Settings Screen

### Sections:

#### Appearance
- Toggle: Light Mode / Dark Mode

#### Timer Settings
- Default duration selector (15 / 25 / 45 minutes)

#### Notifications
- Toggle: Break reminder when timer ends
- Toggle: Gentle reminder if user skips breaks repeatedly

#### History
- List of past sessions:
  - Date
  - Duration
  - Mood (if selected)

---

## Data Models

### Session
- id
- date
- duration
- mood (Focused / Tired / Distracted / null)

### Suggestion
- id
- category (Physical / Mental / Quick Refresh)
- title
- description
- type (relaxing / engaging / neutral)

---

## Logic

### Timer Flow:
- User selects mood (optional)
- User selects duration
- User starts timer
- Timer counts down with animated UI
- On completion:
  → Show break suggestion screen
  → Send notification

---

### Suggestion Selection Logic:

- If mood = "Tired":
  → prioritize suggestions with type = relaxing

- If mood = "Distracted":
  → prioritize suggestions with type = engaging

- If mood = "Focused" or not selected:
  → random selection

---

### Behavior Rules:

- Track skipped breaks
- If user skips multiple times:
  → trigger gentle reminder notification

---

## Technical Constraints

- Store all data locally (no external APIs)
- Keep implementation simple and modular
- Ensure smooth navigation and transitions
- Optimize for performance and clarity

---

## Output Requirements

- Generate complete mobile UI screens for all tabs
- Include navigation and transitions
- Reflect interaction states (timer running, break triggered, etc.)
- Maintain consistent styling across light and dark modes



this is the prompt ,give me  PRD for this app development