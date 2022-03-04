const { until } = require('selenium-webdriver');
const { Header } = require('../baseCollections/header');
const { driver } = require('../../webdriverConfigs/chromeDriver');

class BasePage {
  constructor() {
    this.protocol = 'https://'
    this.baseUrl = 'onliner.by/';
    this.path = '';
    this.prefix = '';
    this.Header = new Header();
  }

  getPageUrl() {
    return `${this.protocol}${this.prefix}${this.baseUrl}${this.path}`;
  }

  open() {
    driver.get(`${this.protocol}${this.prefix}${this.baseUrl}${this.path}`);
  }

  waitUntilTitleIsLoaded(title) {
    return driver.wait(until.titleIs(title));
  }
}

module.exports = { BasePage };
