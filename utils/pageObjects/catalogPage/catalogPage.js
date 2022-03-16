const { BasePage } = require('../basePage/basePage');
const { BaseElement } = require('../baseElement/baseElement');
const { CatalogNavigation } = require('../baseCollections/catalogNavigation');

class CatalogPage extends BasePage {
  constructor() {
    super();
    this.path = '';
    this.prefix = 'catalog.'
    this.catalogNavigation = new CatalogNavigation();
  }
}

module.exports = { CatalogPage };
