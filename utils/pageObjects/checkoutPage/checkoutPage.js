const { BaseElement } = require('../baseElement/baseElement');

class CheckoutPage {
  constructor() {
    this.amountCounter = new BaseElement({
      xpath:
        '//*[@id="container"]/div[2]/div/div/div/div/div[2]/div/div[4]/div/div/div[3]/div/div[2]/div[1]/div[1]/div',
    });
    this.increaseButton = new BaseElement({
      xpath:
        '//*[@id="container"]/div[2]/div/div/div/div/div[2]/div/div[4]/div/div/div[2]/div/div[4]/div/div[2]/div/div/div/a[2]',
    });
    this.proceedButton = new BaseElement({
      xpath: '//*[@id="container"]/div[2]/div/div/div/div/div[2]/div/div[4]/div/div/div[3]/div/div[2]/div[2]/div/div/a',
    });

    
  }
}

module.exports = { CheckoutPage };
