# Roadie Admin Training Environment

## Release 2, Epic 1.19

This release replaces the free-text Root cause field with case-specific dropdowns based on the approved Salesforce Root Cause & Use Examples sheet. It also adds inline validation feedback and preserves the Active Case tab scroll-position fix introduced in Epic 1.17.

## Release 2 Epic 1.19
- Removes the Active Case tab flash by mounting all three tab panes once.
- Switches Customer response, Case details, and Case notes in place without rebuilding the case panel.
- Preserves panel scroll position, field values, and focus while navigating between tabs.
- Keeps the Epic 1.19 case-specific root-cause dropdowns and prior scrolling fixes.


Release 2 Epic 1.20 update:
- Prevents the checklist and Active Case panel from shifting when Case notes is opened for the first time.
- Reserves a stable tab-content height, disables browser scroll anchoring inside the panel, and restores the panel scroll position after tab changes.
