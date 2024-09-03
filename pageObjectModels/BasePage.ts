import { Page } from "@playwright/test";

/**
 * BasePage serves as a foundation for other page objects.
 * It contains common methods to interact with elements on a page.
 */
export class BasePage {
  protected page: Page;

  /**
   * Initializes the page object with the Playwright page instance.
   * @param page - The Playwright page object.
   */
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Clicks an element on the page.
   * @param selector - The selector for the element to be clicked.
   */
  async clickElement(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  /**
   * Fills an input field with the provided text.
   * @param selector - The selector for the input field.
   * @param text - The text to fill into the input field.
   */
  async fillInput(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  /**
   * Retrieves and returns the text content of an element.
   * @param selector - The selector for the element.
   * @returns The text content of the element, or an empty string if the content is null.
   */
  async getElementText(selector: string): Promise<string> {
    const textContent = await this.page.textContent(selector);
    return textContent ?? "";
  }

  /**
   * Gets the current URL of the page.
   * @returns The current URL as a string.
   */
  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  /**
   * Waits for the page to fully load.
   * @param selector - The selector of the element to wait for (not directly used).
   */
  async waitForLoad(selector: string): Promise<void> {
    await this.page.waitForLoadState("load", { timeout: 5000 });
  }

  /**
   * Navigates to a specific URL.
   * @param url - The URL to navigate to.
   */
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Hovers over an element on the page.
   * @param selector - The selector for the element to hover over.
   */
  async hoverElement(selector: string): Promise<void> {
    await this.page.hover(selector);
  }
}
