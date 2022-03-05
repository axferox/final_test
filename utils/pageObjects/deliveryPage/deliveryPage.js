const { BaseElement } = require('../baseElement/baseElement');
const { BasePage } = require('../basePage/basePage');

class DeliveryPage extends BasePage {
  constructor() {
    super();
    this.path = 'order';
    this.prefix = 'cart.';
    this.firstName = new BaseElement({
      css: 'div:nth-child(9) > div:nth-child(1) > div.cart-form__field > div > input',
    });
    this.lastName = new BaseElement({
      css: 'div:nth-child(9) > div:nth-child(2) > div.cart-form__field > div > input',
    });
    this.houseStreet = new BaseElement({
      xpath: '//div[4]/div[1]/div[2]/div/div/div/div/div/input',
    });
    this.houseNumber = new BaseElement({
      xpath:
        '//div[4]/div[3]/div[2]/div/input',
    });
    this.houseNumberExtra = new BaseElement({
      xpath:
        '//div[4]/div[4]/div[2]/div/input',
    });
    this.housePorch = new BaseElement({
      xpath:
        '//div[4]/div[6]/div[2]/div/input',
    });
    this.houseFloor = new BaseElement({
      xpath:
        '//div[4]/div[7]/div[2]/div/input',
    });
    this.houseAppartment = new BaseElement({
      xpath:
        '//div[4]/div[8]/div[2]/div/input',
    });
    this.extraInfoForAdress = new BaseElement({
      xpath:
        '//div[5]/div/div[2]/div/textarea',
    });
    this.emailAddress = new BaseElement({
      xpath:
        '//div[10]/div[1]/div[2]/div/input',
    });
    this.phoneNumber = new BaseElement({
      xpath: '//input[@placeholder="xx xxx-xx-xx" and @type="tel"]',
    });
  }
}

module.exports = {
  DeliveryPage,
};
