import { expect, Locator, Page } from '@playwright/test';
export class ProductPageComponents {
    readonly page: Page;
    readonly title: Locator;
    readonly ipAdress: Locator;
    readonly ipLoader:Locator;
    readonly continue:Locator;
    readonly whmcs:Locator;
    readonly orderItem:Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator(`[class*='product-title']`);
        this.ipAdress = page.locator('input[id*=customfield]')
        this.ipLoader = page.locator('[id*=customfield11Loader]');
        this.continue = page.locator('button[id=btnCompleteProductConfig]');
        this.whmcs = page.locator(`[class='row addon-products']>div:nth-child(10) div[class=panel-add]`);
        this.orderItem = page.locator(`[class='summary-container'] div:nth-child(4)>span:first-child`)
    };

    async productTitle(name:string) {
        await this.title.waitFor({timeout:3000})
        await expect(this.title).toContainText(name);
    };

    async fillIpForm(ip:string) {
        await this.ipAdress.waitFor({state:"visible"});
        await this.ipAdress.fill(ip);
        await this.page.keyboard.press('Enter');
        await this.ipLoader.waitFor({state:"visible"});
        await this.ipLoader.waitFor({state:"hidden"});
    };

    async chooseWHCMSPlus () {
        await this.whmcs.click();
    };

    async summaryItemAdded (name:string) {
        await this.orderItem.waitFor({state:"visible"});
        await expect(this.orderItem).toContainText(name);
    };

    async clickContinue() {
        await this.continue.click();
    };
}