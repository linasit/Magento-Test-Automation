import { BasePage } from "./BasePage";

/**
 * ProductPage contains methods to interact with product-related elements on the page.
 * It extends BasePage to utilize common page interaction methods.
 */
export class ProductPage extends BasePage {
  /**
   * Selects a product by its name.
   * @param productName - The name of the product to select.
   */
  async selectProduct(productName: string): Promise<void> {
    await this.page.waitForLoadState("networkidle"); // Wait for the page to fully load before interacting
    await this.page.click(`text=${productName}`); // Clicks on the product with the given name
  }

  /**
   * Selects a product size by clicking the appropriate option.
   * @param size - The size to select (e.g., "M", "L").
   */
  async selectSize(size: string): Promise<void> {
    await this.clickElement("#option-label-size-143-item-169"); // Clicks the size option
  }

  /**
   * Opens the details tab for the product.
   * @param details - The details section to open (e.g., "Description").
   */
  async openDetails(details: string): Promise<void> {
    await this.clickElement("#tab-label-description-title"); // Clicks to open the details section
  }

  /**
   * Selects a product color by clicking the appropriate option.
   * @param color - The color to select.
   */
  async selectColor(color: string): Promise<void> {
    await this.clickElement("#option-label-color-93-item-53"); // Clicks the color option
  }

  /**
   * Selects a size for pants by clicking the appropriate option.
   * @param color - The size to select.
   */
  async selectPantsSize(color: string): Promise<void> {
    await this.clickElement("#option-label-size-143-item-171"); // Clicks the pants size option
  }

  /**
   * Selects a color for pants by clicking the appropriate option.
   * @param color - The color to select.
   */
  async selectPantsColor(color: string): Promise<void> {
    await this.clickElement("#option-label-color-93-item-49"); // Clicks the pants color option
  }

  /**
   * Sets the quantity of the product to add to the cart.
   * @param quantity - The quantity to set (e.g., "1", "10").
   */
  async setQuantity(quantity: string): Promise<void> {
    await this.clickElement("#qty"); // Clicks the quantity input field
    await this.page.fill("#qty", quantity); // Fills in the desired quantity
  }

  /**
   * Adds the selected product to the cart.
   */
  async addToCart(): Promise<void> {
    await this.clickElement("#product-addtocart-button"); // Clicks the "Add to Cart" button
  }
}
