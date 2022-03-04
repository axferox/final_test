const { BaseElement } = require('../baseElement/baseElement');
const { BasePage } = require('../basePage/basePage');

class DeliveryPage extends BasePage {
  constructor() {
    super();
    this.path = 'order';
    this.prefix = 'cart.';
    this.firstName = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[9]/div[1]/div[2]/div/input',
    });
    this.lastName = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[9]/div[2]/div[2]/div/input',
    });
    this.houseStreet = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[4]/div[1]/div[2]/div/div/div/div/div/input',
    });
    this.houseNumber = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[4]/div[3]/div[2]/div/input',
    });
    this.houseNumberExtra = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[4]/div[4]/div[2]/div/input',
    });
    this.housePorch = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[4]/div[6]/div[2]/div/input',
    });
    this.houseFloor = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[4]/div[7]/div[2]/div/input',
    });
    this.houseAppartment = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[4]/div[8]/div[2]/div/input',
    });
    this.extraInfoForAdress = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[5]/div/div[2]/div/textarea',
    });
    this.emailAddress = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[10]/div[1]/div[2]/div/input',
    });
    this.phoneNumber = new BaseElement({
      xpath:
        '//*[@id="container"]/div/div[1]/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[1]/div[2]/div/div[10]/div[2]/div[3]/div[1]/div/div[1]/input',
    });
  }
}

module.exports = {
  DeliveryPage,
};
