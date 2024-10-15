const assert = require('assert');
var { Builder, By } = require('selenium-webdriver');


async function Login() {
    var driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://khoipro.myharavan.com/admin');

        // Chờ tối đa 5 giây để tải trang
        driver.manage().setTimeouts({
            implicit: 10000,
            pageLoad: 20000,
            script: 30000
        });
        // Tìm và nhập tên người dùng
        const userName = await driver.findElement(By.xpath("//*[@id='Username']"));
        await userName.sendKeys("khoi.maidang@haravan.com");

        // Tìm và nhập mật khẩu
        const passWord = await driver.findElement(By.xpath("//*[@id='Password']"));
        await passWord.sendKeys("Anhlaga123");

        // Tìm và nhấp nút đăng nhập
        await driver.findElement(By.xpath('//*[@id="btn-submit-login"]')).click();

        const actualText = await driver.findElement(By.xpath("//*[@class='hrv-card-head']//*[text()='Gợi ý để bán hàng thuận lợi hơn']")).getText();

        const expectedText = 'Gợi ý để bán hàng thuận lợi hơn'

        assert.strictEqual(actualText, expectedText, "text khong dung")
        console.log('Test case passed!');


        // Chờ 5 giây trước khi thoát trình duyệt
        await new Promise(resolve => setTimeout(resolve, 5000));

    } catch (error) {
        console.error('Error during test execution:', error);

    } finally {
        // Đóng trình duyệt
        await driver.quit();
    }
}

module.exports = { Login };