Roadie Admin - Training Environment
Release 2, Epic 1: Shift Engine and Case Library

Open index.html in a modern browser. No installation, server, or internet connection is required.

This release adds:
- A five-contact training shift sourced from common QA interaction examples
- Dynamic available, active, completed, and queued contact states
- Case 1 of 5 progression throughout the dashboard and Active Case panel
- A reusable JavaScript case library
- Dynamic customer, channel, priority, message, category, root cause, XP, and readiness values
- Continue Shift behavior that unlocks the next assigned contact
- An end-of-shift summary after all five contacts are completed

Scope note:
- The original duplicate-account case retains its full Admin investigation workflow.
- Cases 2-5 use the new shift engine and generic response/details/notes completion flow.
- Case-specific Admin records, actions, and scoring for those cases are planned for later Release 2 epics.

All names, IDs, records, and actions are fictional. Nothing connects to Roadie production systems.

Release 2 Epic 1.2 update:
- Makes Related Profiles interactive on driver profiles.
- Displays related accounts sharing the same phone number.
- Allows learners to open and review each related profile from the relationship view.

Release 2 Epic 1.5 update:
- Tightens the case checklist so "Review all related profiles" is completed only after all three related driver profiles have been opened.
- Keeps checklist progress synchronized after profile navigation and account actions.


Release 2 Epic 1.8 update:
- Corrects the case-panel viewport height and sticky offset.
- Makes the full Case details form reachable with an always-available panel scrollbar.

Release 2 Epic 1.9 updates:
- Focuses Global Search on relevant driver profiles only.
- Removes the unrelated sender and Gig results from the duplicate-account case.
- Adds Primary and Open Profile columns to the results table.
- Displays a Ready to Submit state when every checklist item is complete.
- Keeps Submit Case disabled until all required work is complete.
- Routes completed learners to the case-results and coaching screen.

Release 2 Epic 1.10 update:
- Hides the Ready to Submit callout completely until every checklist item is complete.
- Uses Roadie teal styling when the completed-state callout appears.
