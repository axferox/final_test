const { BaseElement } = require('../baseElement/baseElement')

class CatalogNavigation {
  constructor() {
    this.orderOptions = new BaseElement({
      xpath: '//*[@id="schema-order"]/a',
    });
    this.orderExpensiveFirstOption = new BaseElement({
      xpath: '//*[@id="schema-order"]/div[2]/div/div[3]/span',
    });
    this.computersAndNetworks = new BaseElement({
      xpath: '//*[@id="container"]/div/div/div/div/div[1]/ul/li[3]',
    });
    this.laptopsComputersMonitors = new BaseElement({
      xpath: '//*[@id="container"]/div/div/div/div/div[1]/div[4]/div/div[2]/div[1]/div/div[1]/div[1]',
    });
    this.gamingLaptops = new BaseElement({
      xpath: '//*[@id="container"]/div/div/div/div/div[1]/div[4]/div/div[2]/div[1]/div/div[1]/div[2]/div/a[2]/span',
    });
    this.vendorDell = new BaseElement({
      xpath: '//*[@id="schema-filter"]/div[5]/div[4]/div[2]/ul/li[6]/label/span[2]',
    });
    this.gamingLaptop = new BaseElement({
      xpath: '//*[@id="schema-products"]/div[2]/div/div[3]/div[2]/div[1]/a/span',
    });
    this.vendorDellLabel = new BaseElement({
      xpath: '//*[@id="schema-filter"]/div[5]/div[4]/div[2]/ul/li[6]/label/span[1]/input',
    });
  }
}

module.exports = { CatalogNavigation };
