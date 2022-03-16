const { driver } = require('../../webdriverConfigs/chromeDriver');
const { By, document } = require('selenium-webdriver');
const { DriverUtils } = require('../../driverUtils/driverUtils');

class BaseElement {
  constructor(locator) {
    this.locator = locator;
  }

  findElement() {
    DriverUtils.wait(this.locator);
    return driver.findElement(this.locator);
  }

  scrollUnitllIsVisible() {
    return driver.executeScript('arguments[0].scrollIntoView(true);', this.findElement());
  }

  textInput(inputData) {
    this.findElement().sendKeys(inputData);
  }

  isSelected() {
    return this.findElement().isSelected();
  }

  getElementText() {
    return this.findElement().getText();
  }

  click() {
    return this.findElement(this.locator).click();
  }
}

module.exports = { BaseElement };
