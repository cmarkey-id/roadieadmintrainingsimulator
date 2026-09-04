# Roadie Admin Training Environment

An interactive, fictional Roadie Admin environment for hands-on customer-support practice. No actions connect to production systems or real customer records.

## Current experience

- Offers two paths: a self-directed Practice Library and an ordered Full Shift Simulation.
- Includes five scenarios covering Account Management and Gig Support.
- Supports topic and difficulty filters, case metadata, completion history, repeat practice, and case-specific coaching.
- Simulates search, profile review, Consumer Report review, Gig and payment investigation, proof of delivery, credits, macros, transfers, case details, notes, responses, and submission.
- Uses case-specific Root cause dropdowns, inline validation, stable Active Case tabs, and preserved panel scroll position.
- Saves cumulative XP, Readiness, Streak, Level, and Practice Library history in the learner's browser.
- Changes the learner level to **Skilled Specialist** at 1,000 XP.
- Uses plain **Search** directions with explicit phone-number guidance.
- Keeps the Training Coach available from the start, with general guidance before a contact and case-specific support afterward.
- Uses **Practice support** in Practice Library scenarios and **Shift support** in the Full Shift Simulation.
- Makes Waffles the Dog the interactive Training Coach launcher, with contextual next-step guidance, optional hints, a new-tip badge, and completion celebrations.

## Release history

### Beta testing update

- Added the visible Beta training banner.
- Added persistent learner progress and the 1,000-XP Skilled Specialist level.
- Replaced Global Search terminology with plain Search directions.
- Added Waffles to the Training Coach experience, with guidance that adapts after contact acceptance.

### Release 2, Epic 1.19

- Replaced the free-text Root cause field with case-specific dropdowns based on the approved Salesforce Root Cause & Use Examples sheet.
- Added inline validation feedback.
- Mounted all three Active Case tab panes once so tab changes do not rebuild the panel.
- Preserved panel scroll position, field values, focus, and the Epic 1.17 scrolling fix.

### Release 2, Epic 1.20

- Prevented checklist and Active Case panel movement when Case notes opens for the first time.
- Reserved stable tab-content height, disabled browser scroll anchoring inside the panel, and restored panel scroll position after tab changes.

### Release 2, Epic 1.21

- Added the self-directed Practice Library with all five scenarios available in any order.
- Added topic and difficulty filters, scenario metadata, completion status, and repeat-practice controls.
- Preserved the original ordered Full Shift Simulation as a separate path.

### Release 2, Epic 1.22

- Expanded Scenarios 2–5 into case-specific, sequenced investigation simulations.
- Added fictional profile, Consumer Report, Gig, payment-note, POD, delivery, credit, macro, and transfer actions.
- Added workflow-specific checklists, response validation, documentation requirements, scoring, and coaching.
- Uses the approved six-mile corrected-address path for Scenario 4, including POD, manual delivery, and a $6 credit.

### Release 2, Epic 1.23

- Updated the interface to align with the refreshed Roadie Admin visual language while preserving training functionality.
- Added the clickable Waffles launcher, contextual coaching, hints, notifications, and case-completion recommendations.
- Prevented “Gig Support” from splitting across lines in the Practice Library introduction.

## Local use

Open `dist/index.html` in a modern browser. Learner progress is stored only in that browser using local storage.
