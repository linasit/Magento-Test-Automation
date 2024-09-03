import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillCheckoutForm(email: string): Promise<void> {
    if (!this.page) throw new Error("Page object is not initialized");

    //  Ensure the email field is visible
    await this.page
      .locator("input#customer-email")
      .first()
      .waitFor({ state: "visible" });

    // Fill in the email address
    await this.page.fill("input#customer-email", "bartas@simpsonas.com");
    await this.page.fill('input[name="firstname"]', "Bartas");
    await this.page.fill('input[name="lastname"]', "Simpsonas");
    await this.page.fill('input[name="company"]', "Simpsons");
    await this.page.fill('input[name="street[0]"]', "123 Localhost");
    await this.page.fill('input[name="street[1]"]', "010101 Localhost");
    await this.page.fill('input[name="street[2]"]', "Localhost");
    await this.page.fill('input[name="city"]', "Kaunas");
    await this.page.selectOption('select[name="country_id"]', "LT");
    await this.page.selectOption('select[name="region_id"]', "476"); // Adjust with correct value
    await this.page.fill('input[name="postcode"]', "10001");
    await this.page.fill('input[name="telephone"]', "555-123-4567");

    // Select shipping method
    await this.page.locator('input[value="flatrate_flatrate"]').check();

    // Proceed to 'Next'
    await this.page.click("button.continue");

    // Complete the order
    await this.page.click('button[title="Place Order"]');

    // Verify that the order is successful
    await expect(
      this.page.locator("#maincontent > div.page-title-wrapper > h1 > span")
    ).toBeVisible();
    await expect(
      this.page.locator("#maincontent > div.page-title-wrapper > h1 > span")
    ).toHaveText("Thank you for your purchase!");
  }

  async placeOrder(): Promise<void> {
    await this.page.waitForSelector('button[title="Place Order"]');
    await this.page.click('button[title="Place Order"]');
  }

  async verifyOrderSuccess(): Promise<void> {
    await expect(
      this.page.locator("#maincontent > div.page-title-wrapper > h1 > span")
    ).toHaveText("Thank you for your purchase!");
    await this.page.waitForSelector(
      "#maincontent > div.page-title-wrapper > h1 > span"
    );
  }
}
