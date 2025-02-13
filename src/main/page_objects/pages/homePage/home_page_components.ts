import { expect, Locator, Page } from '@playwright/test';
export class HomePage {
    readonly page: Page;
    readonly homeLogo: Locator;
    readonly soloPanel: Locator;
    readonly price:Locator

    constructor(page: Page) {
        this.page = page;
        this.homeLogo = page.locator('[class=logo-img]');
        this.soloPanel = page.locator(`[id=product3-order-button]`);
        this.price = page.locator(`[id=product3] [class='price']`);
    };

    async openHomePage() {
        await this.page.goto('https://store.cpanel.net/store/cpanel-licenses');
    };

    async logo() {
        await expect(this.homeLogo).toBeVisible();
    };

    async orderSoloPanel(){
        await this.soloPanel.waitFor({state:"visible"});
        await this.soloPanel.click();
    };
};