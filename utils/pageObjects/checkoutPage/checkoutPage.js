const { BaseElement } = require('../baseElement/baseElement');

class CheckoutPage {
  constructor() {
    this.amountCounter = new BaseElement({
      xpath: '//div[3]/div/div[2]/div[1]/div[1]/div',
    });
    this.increaseButton = new BaseElement({
      xpath: '//div[2]/div/div/div/a[2]',
    });
    this.proceedButton = new BaseElement({
      xpath: '//div/div[3]/div/div[2]/div[2]/div/div/a',
    });

    
  }
}

module.exports = { CheckoutPage };
