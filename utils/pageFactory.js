const { BasePage } = require('./pageObjects/basePage/basePage');
const { HomePage } = require('./pageObjects/homePage/homePage');
const { CatalogPage } = require('./pageObjects/catalogPage/catalogPage');
const { DeliveryPage } = require('./pageObjects/deliveryPage/deliveryPage');
const { CheckoutPage } = require('./pageObjects/checkoutPage/checkoutPage');
const { DevicePage } = require('./pageObjects/devicePage/devicePage');

class PageFactory {
  static getPage(pageName) {
    switch (pageName) {
      case 'Base':
        return new BasePage();
      case 'Home':
        return new HomePage();
      case 'Catalog':
        return new CatalogPage();
      case 'Device':
        return new DevicePage();
      case 'Delivery':
        return new DeliveryPage();
      case 'Checkout':
        return new CheckoutPage();
      default:
        throw Error(`Page ${[pageName]} is not defined ot not found`);
    }
  }
}

module.exports = { PageFactory };
