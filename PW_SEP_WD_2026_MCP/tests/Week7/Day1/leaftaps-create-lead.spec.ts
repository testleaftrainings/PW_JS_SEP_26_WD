import { randomUUID } from 'node:crypto';
import { expect, test, type Page } from '@playwright/test';

type LeadDetails = {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
};

class LeadCreationPage {
  constructor(private readonly page: Page) {}

  async signIn(username: string, password: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async openCreateLeadForm(): Promise<void> {
    await this.page.getByRole('link', { name: 'CRM/SFA' }).click();
    await this.page.getByRole('link', { name: 'Leads' }).click();
    await this.page.getByRole('link', { name: 'Create Lead' }).click();
  }

  async fillLead(details: LeadDetails): Promise<void> {
    await this.page.locator('#createLeadForm_companyName').fill(details.companyName);
    await this.page.locator('#createLeadForm_firstName').fill(details.firstName);
    await this.page.locator('#createLeadForm_lastName').fill(details.lastName);
    await this.page.locator('#createLeadForm_primaryEmail').fill(details.email);
    await this.page.locator('#createLeadForm_dataSourceId').selectOption({ label: 'Website' });
  }

  async submitLead(): Promise<void> {
    await this.page.locator('input[name="submitButton"]').click();
  }
}

test.describe('CRM/SFA Lead Creation', () => {
  test('Create a lead with valid company and contact details', async ({ page }) => {
    const username = process.env.LEAFTAPS_USERNAME ?? 'democsr2';
    const password = process.env.LEAFTAPS_PASSWORD ?? 'crmsfa';
    const uniqueId = randomUUID();
    const uniqueSuffix = uniqueId.slice(0, 8);
    const lead: LeadDetails = {
      companyName: `PW Lead ${uniqueSuffix}`,
      firstName: 'Taylor',
      lastName: `Tester ${uniqueSuffix}`,
      email: `pw-lead-${uniqueId}@example.test`,
    };
    const leadPage = new LeadCreationPage(page);

    // 1. Start a fresh browser context and navigate to the Leaftaps login page.
    await page.goto(process.env.LEAFTAPS_BASE_URL ?? 'https://leaftaps.com/opentaps/control/main');
    await expect(page.getByRole('heading', { name: 'Leaftaps Login' })).toBeVisible();

    // 2. Sign in with the test account and verify authentication.
    await leadPage.signIn(username, password);
    await expect(page.getByRole('heading', { name: 'Welcome Demo B2C CSR' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'CRM/SFA' })).toBeVisible();

    // 3-4. Navigate through CRM/SFA and Leads, then open the Create Lead form.
    await leadPage.openCreateLeadForm();
    await expect(page).toHaveTitle(/Create Lead/);
    await expect(page.locator('#createLeadForm_companyName')).toBeVisible();
    await expect(page.locator('#createLeadForm_firstName')).toBeVisible();
    await expect(page.locator('#createLeadForm_lastName')).toBeVisible();
    await expect(page.locator('#createLeadForm_primaryEmail')).toBeVisible();

    // 5. Fill the lead identity, email, and Website source, then verify the values.
    await leadPage.fillLead(lead);
    await expect(page.locator('#createLeadForm_companyName')).toHaveValue(lead.companyName);
    await expect(page.locator('#createLeadForm_firstName')).toHaveValue(lead.firstName);
    await expect(page.locator('#createLeadForm_lastName')).toHaveValue(lead.lastName);
    await expect(page.locator('#createLeadForm_primaryEmail')).toHaveValue(lead.email);
    await expect(page.locator('#createLeadForm_dataSourceId')).toHaveValue('LEAD_WEBSITE');

    // 6. Submit once and verify the new lead details view.
    await leadPage.submitLead();
    await expect(page).toHaveURL(/\/crmsfa\/control\/viewLead\?partyId=/);
    await expect(page).toHaveTitle('View Lead | opentaps CRM');

    // 7-8. Verify the created lead's identity, source, and contact email.
    await expect(page.getByText(lead.companyName, { exact: false })).toBeVisible();
    await expect(page.getByText(lead.firstName, { exact: true })).toBeVisible();
    await expect(page.getByText(lead.lastName, { exact: true })).toBeVisible();
    await expect(page.getByText('Website', { exact: true })).toBeVisible();
    await expect(page.getByText(lead.email, { exact: true })).toBeVisible();
  });
});
