import { expect, Locator, Page } from '@playwright/test';
import { Products } from '../../../constants/products';
import { IP } from '../../../constants/ip';
import { Price } from '../../../constants/price';

export class CheckoutComponents {
    readonly page: Page;
    readonly cart: Locator;
    readonly checkoutProduct: Locator;
    readonly checkoutProductIp: Locator;
    readonly checkoutProductPrice: Locator;
    readonly productPrice:Locator;
    readonly addonPrice:Locator;
    readonly addonCheckout:Locator;
    readonly personal:Locator;
    readonly billing:Locator;
    readonly payments:Locator;
    readonly seccurity:Locator;
    readonly complete:Locator;

    constructor(page: Page) {
        this.page = page;
        this.cart = page.locator(`[id='order-standard_cart']`);
        this.checkoutProduct = page.locator(`[class=table-responsive] tbody tr:first-child>td:first-child`);
        this.checkoutProductIp = page.locator(`[class=table-responsive] tbody tr:first-child>td:nth-child(3)`)
        this.checkoutProductPrice = page.locator(`[class=table-responsive] tbody tr:first-child>td:nth-child(5)`);
        this.addonPrice = page.locator(`[class=table-responsive] tbody tr:last-child>td:nth-child(5)`);
        this.addonCheckout = page.locator(`[class=table-responsive] tbody tr:last-child>td:first-child`);
        this.personal = page.locator(`[id=containerNewUserSignup] div[class=row]:nth-child(3)`);
        this.billing = page.locator(`[id=containerNewUserSignup] div[class=row]:nth-child(5)`);
        this.seccurity = page.locator('[id=containerNewUserSecurity]');
        this.payments = page.locator('[id=paymentGatewaysContainer]');
        this.complete = page.locator('[id=btnCompleteOrder]')

    }

    async orderSummary() {
        await expect(this.checkoutProduct).toContainText(Products.C_PANEL_SOLO);
        await expect(this.checkoutProductIp).toContainText(IP.IP_2222);
        await expect(this.checkoutProductPrice).toContainText(Price.C_PANEL_SOLO);
        await expect(this.addonCheckout).toContainText(Products.WHCMC);
        await expect(this.addonPrice).toContainText(Price.WHCMC);
    };

    async fillForm() {
        await expect(this.personal).toBeVisible();
        await expect(this.billing).toBeVisible();
        await expect(this.seccurity).toBeVisible();
        await expect(this.payments).toBeVisible();
        await expect(this.complete).toBeVisible();
    };
}