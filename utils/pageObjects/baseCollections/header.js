const { BaseElement } = require('../baseElement/baseElement');

class Header {
  constructor() {
    this.catalogButton = new BaseElement({
      xpath: '//span[@class = "b-main-navigation__text" and  text()="Каталог"]',
    });
  }
}

module.exports = { Header };
