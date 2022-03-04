const { BaseElement } = require('../baseElement/baseElement');

class Header {
  constructor() {
    this.catalogButton = new BaseElement({
      xpath: '//*[@id="container"]/div/div/header/div[2]/div/nav/ul[1]/li[1]/a[2]/span',
    });
  }
}

module.exports = { Header };
