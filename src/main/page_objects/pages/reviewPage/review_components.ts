import { expect, Locator, Page } from '@playwright/test';
import { Price } from '../../../constants/price';

export class ReviewComponent {
    readonly page: Page;
    readonly cart: Locator;
    readonly productItem: Locator;
    readonly addonItem: Locator;
    readonly addonPrice: Locator;
    readonly productPrice:Locator;
    readonly subtotal:Locator;
    readonly checkout:Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.cart = page.locator(`[id='order-standard_cart']`);
        this.productItem = page.locator(`[class='secondary-cart-body'] div[class=item]:first-child span[class=item-title]`);
        this.addonItem = page.locator(`[class='secondary-cart-body'] div[class=item]:last-child span[class=item-title]`);
        this.addonPrice = page.locator(`[class='secondary-cart-body'] div[class=item]:last-child div[class*='item-price']>span:first-child`);
        this.productPrice = page.locator(`[class='secondary-cart-body'] div[class=item]:first-child div[class*='item-price']>span:first-child`);
        this.subtotal = page.locator(`span[id='subtotal']`);
        this.checkout = page.locator(`[class*='btn-checkout']`);
    }

    async checkAddedItem(item:string, addon:string) {
        await this.cart.waitFor({state: 'visible'});
        await expect(this.productItem).toContainText(item);
        await expect(this.addonItem).toContainText(addon);
    };

    async checkPrice() {
        const product = await this.productPrice.innerText();
        const addon = await this.addonPrice.innerText();
        expect(product).toEqual(Price.C_PANEL_SOLO);
        expect(addon).toEqual(Price.WHCMC);
        const subtotalPrice = await this.subtotal.innerText();
        expect(subtotalPrice).toEqual(Price.TOTAL);
    };

    async checkoutNext() {
        await this.checkout.click();
    };
}