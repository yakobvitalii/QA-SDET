import { test } from '@playwright/test';
import { 
  CheckoutComponents,
  HomePage,
  ProductPageComponents,
  ReviewComponent, 
  
} from '../src/main/page_objects';
import { IP } from '../src/main/constants/ip';
import { Products } from '../src/main/constants/products';

test('Automation Steps to Cover and Verify', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPageComponents(page);
  const reviewPage = new ReviewComponent(page);
  const checkoutPage = new CheckoutComponents(page)
  await homePage.openHomePage();
  await homePage.logo();
  await homePage.orderSoloPanel();
  await productPage.productTitle(Products.C_PANEL_SOLO);
  await productPage.fillIpForm(IP.IP_2222);
  await productPage.chooseWHCMSPlus();
  await productPage.summaryItemAdded(Products.WHCMC);
  await productPage.clickContinue();
  await reviewPage.checkAddedItem(Products.C_PANEL_SOLO, Products.WHCMC);
  await reviewPage.checkPrice();
  await reviewPage.checkoutNext();
  await checkoutPage.orderSummary();
  await checkoutPage.fillForm();
});
