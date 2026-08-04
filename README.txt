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

Release 2 Epic 1.11 updates:
- Strengthens the Active Case panel hierarchy with a branded header, accent border, and clearer customer and checklist sections.
- Adds subtle animations for accepted contacts, checklist completion, metric increases, and XP rewards.
- Adds an XP progress bar toward the next specialist level beneath the header metrics.
- Adds a live shift-elapsed timer after the first contact is accepted.
- Adds context-aware Coach guidance that identifies the learner's current status and recommends the next incomplete action.
- Honors reduced-motion browser preferences.

Release 2 Epic 1.12 update:
- Aligns Case 1 with the duplicate-profile KBA workflow.
- Requires review of all related accounts before account actions are available.
- Adds explicit Trust & Safety and identity-comparison checks.
- Applies the primary-account decision hierarchy: completed consumer report, matching identity, completed Gigs, license on file, and account creation date.
- Restricts unlocking to the selected primary account and license removal to duplicate accounts.
- Requires the prescribed primary and duplicate account notes.
- Requires confirmation that the driver successfully logged in before submission.
- Expands the Knowledge Quick Guide with permanent-deactivation and potential-fraud stop paths.


Release 2 Epic 1.13
- Adds a Knowledge Base button to the Training navigation.
- Opens the live Salesforce duplicate profile KBA in a new tab so learners can practice consulting the production knowledge resource during the case.
- Updates the Coach Knowledge Base action to use the live article instead of the embedded quick guide.
- Records Knowledge Base opens as learner actions for future coaching and analytics enhancements.


Release 2 Epic 1.14
- Redesigned header progress so Readiness has its own aligned progress bar and level progress is clearly labeled.
- Widened the Active Case panel and increased customer-message and checklist readability.
- Added next-step highlighting and explicit in-product directions to the case checklist.
- Added Compare Profiles workspace for Trust & Safety review, identity comparison, and primary-account selection.
- Added Driving Info workflow for removing license information from duplicate profiles.
- Replaced the login-confirmation checkbox with a simulated send-and-reply customer interaction.


Epic 1.15 updates
- Added a case-specific Salesforce KBA configuration for all five cases.
- Knowledge Base entry points now open the article assigned to the active case.
- Added KBA titles to navigation and Coach guidance.
- Reworked customer response UX into a threaded conversation with Save Draft and Send Response actions.
- Customer login confirmation occurs only after the response is sent.
- Removed required-note autofill and added a blank, KBA-referenced note workflow.
- Added separate validation rules for primary-account and duplicate-account notes.
- Learners cannot complete the documentation checklist until valid notes exist on all affected profiles.

Release 2 Epic 1.17 update:
- Preserves the Active Case panel scroll position when switching between Customer response, Case details, and Case notes.
- Prevents tab clicks and in-panel saves from jumping the learner back to the top of the conversation.

Release 2 Epic 1.19 update:
- Replaces the free-text Root cause field with a case-specific dropdown using approved Salesforce root-cause terminology.
- Adds plausible options for each of the five current cases.
- Adds inline feedback when category, root cause, or required review fields are incomplete or incorrect.
- Preserves the Epic 1.17 Active Case tab scroll-position fix.

Release 2 Epic 1.19:
- Active Case tabs now switch in place without rebuilding or flashing the panel.
- Panel scroll position and entered values remain stable between tabs.


Release 2 Epic 1.20 update:
- Prevents the checklist and Active Case panel from shifting when Case notes is opened for the first time.
- Reserves a stable tab-content height, disables browser scroll anchoring inside the panel, and restores the panel scroll position after tab changes.
