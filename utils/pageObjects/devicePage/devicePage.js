const { BaseElement } = require('../baseElement/baseElement');

class DevicePage {
  constructor() {
    this.addToCardButton = new BaseElement({
      css: '#container > div > div > div > div > div.catalog-content.js-scrolling-area > div.product.product_details.b-offers.js-product > main > div > div > aside > div:nth-child(1) > div.product-aside__offers > div.product-aside__offers-list > div > div.product-aside__control.product-aside__control_condensed-additional > a.button-style.button-style_base-alter.button-style_primary.product-aside__button.product-aside__button_narrow.product-aside__button_cart.button-style_expletive',
    });

  }
}

module.exports = { DevicePage };
