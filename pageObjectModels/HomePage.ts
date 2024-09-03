import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  async navigateToHoodiesAndSweatshirts(): Promise<void> {
    // Hover over the "Men" menu using XPath
    await this.page.hover("#ui-id-5");
    await this.page.waitForTimeout(500); // Ensure the menu is displayed

    // Hover over the "Tops" submenu using XPath
    await this.page.hover("#ui-id-17");
    await this.page.waitForTimeout(500); // Ensure the submenu is displayed

    // Click on "Hoodies & Sweatshirts" using XPath
    await this.page.click("#ui-id-20");
  }

  async navigateToPants(): Promise<void> {
    // Hover over the "Women" menu using XPath
    await this.page.hover("#ui-id-4");
    await this.page.waitForTimeout(500); // Ensure the menu is displayed

    // Hover over the "Bottoms" submenu using XPath
    await this.page.hover("#ui-id-10");
    await this.page.waitForTimeout(500); // Ensure the submenu is displayed

    // Click on "Pants" using XPath
    await this.page.click("#ui-id-15");
  }

  async verifyHoodiesAndSweatshirtsPage(): Promise<void> {
    await this.page.waitForURL(
      "**/men/tops-men/hoodies-and-sweatshirts-men.html"
    );
    const currentUrl = await this.getCurrentUrl();
    if (
      currentUrl !==
      "https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"
    ) {
      throw new Error(`Navigation failed. Current URL: ${currentUrl}`);
    }
  }

  async verifyPantsPage(): Promise<void> {
    await this.page.waitForURL("**/women/bottoms-women/pants-women.html");
    const currentUrl = await this.getCurrentUrl();
    if (
      currentUrl !==
      "https://magento.softwaretestingboard.com/women/bottoms-women/pants-women.html"
    ) {
      throw new Error(`Navigation failed. Current URL: ${currentUrl}`);
    }
  }
}
