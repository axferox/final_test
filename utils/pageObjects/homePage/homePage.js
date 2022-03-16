const { BasePage } = require('../basePage/basePage');

class HomePage extends BasePage {
  constructor() {
    super();
    this.protocol = 'https://';
    this.baseUrl = 'onliner.by/';
    this.path = '';
    this.prefix = '';
  }
}

module.exports = { HomePage };
