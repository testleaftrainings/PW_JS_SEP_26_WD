# Leaftaps Create Lead Test Plan

## Application Overview

## Application and Preconditions
- Base login URL: `https://leaftaps.com/opentaps/control/main`.
- Use the supplied test account (`democsr2` / `crmsfa`) in a non-production environment. In an automated implementation, source credentials from environment variables or a secret store; do not print them in logs.
- The app and CRM/SFA module must be available, the account must be active and permitted to create leads, and each test starts in a fresh browser context with no authenticated session.
- Use a unique company name/contact combination per run (for example, append a timestamp) so the success test does not collide with existing leads. Confirm the test environment's data-cleanup policy before running repeatedly.

## Route and Locator Notes
- The supplied direct URL `https://leaftaps.com/opentaps/control/createLeadForm` returned an application error (`Unknown request [createLeadForm]`). After CRM/SFA authentication, the working form route observed was `https://leaftaps.com/crmsfa/control/createLeadForm`; the normal journey is CRM/SFA > Leads > Create Lead.
- The login controls have accessible names: `getByRole('textbox', { name: 'Username' })`, `getByRole('textbox', { name: 'Password' })`, and `getByRole('button', { name: 'Login' })`. CRM/SFA and Leads navigation are links.
- The legacy lead form fields are not programmatically labelled in the accessibility tree. Prefer stable observed IDs: `#createLeadForm_companyName`, `#createLeadForm_firstName`, `#createLeadForm_lastName`, `#createLeadForm_primaryEmail`, and `#createLeadForm_dataSourceId`. Submit with `getByRole('button', { name: 'Create Lead' })`. Add labels to the application if locator accessibility improvements are in scope.
- The observed inputs did not have native `required` attributes. Confirm mandatory-field rules with the application owner; the negative test below should verify server/UI validation rather than assume browser-native validation.

## Test Data
- Company Name: unique value such as `PW Lead <run-id>`.
- First Name: `Taylor`.
- Last Name: unique value such as `Tester <run-id>`.
- Source: `Website`.
- E-Mail Address: valid, controlled test mailbox such as `pw-lead-<run-id>@example.test` (use only if the environment accepts the reserved test domain).

## Success Criteria
- The test reaches the authenticated CRM/SFA area and the Create Lead form.
- A successful submission produces a lead details or confirmation view showing the unique company and contact values; the lead can also be found in Leads using the same unique value.
- Validation tests do not report success or create a record when required input is invalid. Capture any unexpected created record for cleanup rather than silently leaving test data.

## Test Scenarios

### 1. CRM/SFA Lead Creation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Create a lead with valid company and contact details

**File:** `tests/Week7/Day1/leaftaps-create-lead.spec.ts`

**Steps:**
  1. Start a fresh browser context and navigate to `https://leaftaps.com/opentaps/control/main`.
    - expect: The Leaftaps Login page is displayed.
  2. Fill the Username textbox with `democsr2`, fill the Password textbox with `crmsfa`, then click Login.
    - expect: Authentication succeeds and the authenticated welcome page shows the expected demo user; a CRM/SFA link is visible.
    - expect: The page is not showing a login error or remaining on the sign-in form.
  3. Click the CRM/SFA link, then click Leads in the CRM navigation.
    - expect: The CRM/SFA application opens and the Leads area is displayed.
  4. Open Create Lead from the Leads shortcuts/navigation. If the shortcut is not exposed as a semantic link, navigate to `https://leaftaps.com/crmsfa/control/createLeadForm` within the authenticated context.
    - expect: The page title or main heading identifies Create Lead.
    - expect: The form contains Company Name, First name, Last name, Source, E-Mail Address, and a Create Lead submit button.
  5. Fill `#createLeadForm_companyName` with a unique company name, `#createLeadForm_firstName` with `Taylor`, `#createLeadForm_lastName` with a unique surname, and `#createLeadForm_primaryEmail` with a valid unique test address. Select `Website` in `#createLeadForm_dataSourceId`.
    - expect: Each entered value is present in its corresponding form control and the selected source is Website.
    - expect: No unrelated field is populated or changed.
  6. Click the Create Lead button once and wait for the resulting navigation or success feedback.
    - expect: The application reports successful creation by displaying the new lead's details or a clear success confirmation.
    - expect: The resulting view shows the submitted unique company name and contact name; the page is not an error page or login page.
  7. If the confirmation view does not show all submitted fields, navigate to Leads and search/filter by the unique company name.
    - expect: Exactly one newly created lead matching the unique company/contact values is found.
    - expect: The lead details preserve the submitted email and source where those fields are displayed.
  8. Assert the final state using Playwright assertions, e.g. `await expect(page).toHaveURL(/crmsfa/)` and `await expect(page.getByText(companyName, { exact: true })).toBeVisible()`; prefer a stable lead detail heading/field locator if available.
    - expect: All required success assertions pass and the unique lead can be distinguished from pre-existing records.

#### 1.2. Reject lead submission when mandatory identity fields are blank

**File:** `tests/Week7/Day1/leaftaps-create-lead-validation.spec.ts`

**Steps:**
  1. Start a fresh browser context, sign in with the supplied test account, open CRM/SFA > Leads > Create Lead, and confirm the form is displayed.
    - expect: The authenticated Create Lead form is ready for input.
  2. Leave Company Name and Last name blank; enter a unique First name if needed to make the attempted record identifiable. Click Create Lead.
    - expect: The application does not navigate to a successful lead-details view and does not report success.
    - expect: A validation message or field-level validation state explains which mandatory value is missing; record the exact observed wording for future assertions.
  3. Assert the form remains available and no lead matching the attempted unique test values exists in Leads.
    - expect: The submission is rejected without creating a lead.
    - expect: If the environment permits blank values instead of rejecting them, mark the test as a product validation defect and clean up any unexpected record.
