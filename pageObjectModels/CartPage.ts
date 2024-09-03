import { BasePage } from "./BasePage";

/**
 * CartPage contains methods to interact with the shopping cart.
 * It extends BasePage to utilize common page interaction methods.
 */
export class CartPage extends BasePage {
  /**
   * Opens the shopping cart by clicking on the cart icon.
   */
  async openCart(): Promise<void> {
    await this.page.waitForSelector(".showcart"); // Waits for the cart icon to be visible
    await this.clickElement(".showcart"); // Clicks on the cart icon to open the cart
  }

  /**
   * Verifies if a specific product is in the cart.
   * @param productName - The name of the product to verify.
   * @returns A boolean indicating whether the product is in the cart.
   */
  async verifyProductInCart(productName: string): Promise<boolean> {
    await this.page.waitForSelector(".product-item-name"); // Waits for the product name to be visible in the cart
    const productText = await this.getElementText(".product-item-name"); // Retrieves the product name from the cart
    return productText.includes(productName); // Checks if the product name matches the expected name
  }

  /**
   * Proceeds to the checkout process from the cart.
   */
  async proceedToCheckout(): Promise<void> {
    await this.clickElement("button#top-cart-btn-checkout"); // Clicks the "Proceed to Checkout" button
  }

  /**
   * Removes a product from the cart and confirms the removal.
   */
  async removeProduct(): Promise<void> {
    await this.page.waitForSelector(
      "#mini-cart > li > div > div > div.product.actions > div.secondary > a"
    );
    await this.clickElement(
      "#mini-cart > li > div > div > div.product.actions > div.secondary > a"
    ); // Clicks the remove product link
    await this.page.waitForSelector("button.action-primary.action-accept"); // Waits for the confirmation popup
    await this.page.click("button.action-primary.action-accept"); // Confirms the removal by clicking "OK"
  }
}
