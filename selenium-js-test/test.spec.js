const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const { describe, it, before, after } = require('mocha');

describe('Login Test', function() {
    let driver;

    before(async function() {
        this.timeout(30000); // Đặt timeout cho việc khởi tạo driver bvggy
        try {
            const chromeOptions = new chrome.Options();

            driver = await new Builder()
                .forBrowser('chrome')
                .setChromeOptions(chromeOptions) // Sử dụng Chrome service
                .build();
        } catch (error) {
            console.error("Driver initialization failed:", error);
        }
    });

    after(async function() {
        if (driver) {
            await driver.quit(); // Đảm bảo đóng driver khi hoàn thành
        }
    });

    it('Should go to Google', async function() {
        await driver.get('khoipro.myharavan.com/admin');
    });
});