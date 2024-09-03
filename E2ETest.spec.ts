import { test, expect } from "@playwright/test";
import { HomePage } from "./pageObjectModels/HomePage";
import { ProductPage } from "./pageObjectModels/ProductPage";
import { CartPage } from "./pageObjectModels/CartPage";
import { CheckoutPage } from "./pageObjectModels/CheckoutPage";
import { BasePage } from "./pageObjectModels/BasePage";

test.describe("Magento Store End-to-End Test", () => {
  // Declare page objects to be used across tests
  let homePage: HomePage;
  let productPage: ProductPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  // Initialize page objects before each test
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
  });

  test("Navigate to Homepage", async ({ page }) => {
    // Navigate to the Magento store homepage
    await homePage.navigate("https://magento.softwaretestingboard.com/");
    await page.pause(); // Pause for inspection
  });

  test("Navigate to Men's Hoodies & Sweatshirts and add a product", async ({
    page,
  }) => {
    // Navigate to homepage
    await homePage.navigate("https://magento.softwaretestingboard.com/");
    await page.pause(); // Pause for inspection

    // Navigate to the Hoodies & Sweatshirts section
    await homePage.navigateToHoodiesAndSweatshirts();
    await homePage.verifyHoodiesAndSweatshirtsPage(); // Verify correct navigation

    // Select "Frankie Sweatshirt", choose options, and add to cart
    await productPage.selectProduct("Frankie Sweatshirt");
    await productPage.openDetails("Details");
    await productPage.selectSize("L");
    await productPage.selectColor("Green");
    await productPage.setQuantity("10");
    await productPage.addToCart();

    // Verify the cart contents and proceed to checkout
    await page.getByRole("link", { name: " My Cart 10 10 items" }).click();
    const productName = await page.textContent(".product-item-name");
    await page.getByRole("button", { name: "Proceed to Checkout" }).click();
    await page.waitForTimeout(500); // Wait briefly for any loading
    await checkoutPage.fillCheckoutForm("test@example.com");
  });

  test("Navigate to Women's Pants and add the cheapest product", async ({
    page,
  }) => {
    // Navigate to the Women's Pants section
    await homePage.navigate("https://magento.softwaretestingboard.com/");
    await page.pause(); // Pause for inspection

    // Sort products by price to find the cheapest pants
    await homePage.navigateToPants();
    await page.waitForLoadState("networkidle"); // Wait for the page to fully load
    await page.click("select#sorter");
    await page.getByLabel("Sort By").selectOption({ label: "Price" });

    // Select the cheapest pants, choose options, and add to cart
    await productPage.selectProduct("Karmen Yoga Pant");
    await productPage.setQuantity("2");
    await productPage.selectPantsColor("28");
    await productPage.selectPantsSize("Black");
    await productPage.addToCart();

    // Verify the shopping cart contents
    await expect(page.locator(".showcart .counter-number")).toHaveText("2");

    // Remove a product from the cart and add another
    await cartPage.openCart();
    await cartPage.removeProduct();
    await productPage.selectProduct("Carina Basic Capri");
    await productPage.selectPantsSize("28");
    await productPage.selectPantsColor("Black");
    await productPage.setQuantity("2");
    await productPage.addToCart();
    await expect(page.locator(".showcart .counter-number")).toHaveText("2");

    // Proceed to checkout and complete the order
    await cartPage.openCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutForm("");
    await page.waitForTimeout(500); // Wait briefly for any loading
    await checkoutPage.verifyOrderSuccess(); // Verify that the order was successful
  });
});
