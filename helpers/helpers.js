const helpers = {
    async waitForVisible(element) {
        const EC = protractor.ExpectedConditions;
        return browser.driver.wait(EC.visibilityOf(element), 10000);
    },

    async waitForNotVisible(element) {
        const EC = protractor.ExpectedConditions;
        return browser.driver.wait(EC.invisibilityOf(element));
    },

    async getTextByLocator(locator) {
      const elm = await element(locator);
      await this.waitForVisible(elm);
      return elm.getText();
    },
};

module.exports = helpers;
