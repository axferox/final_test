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
      xpath: '//span[contains(text(),"Компьютеры и" )]',
    });
    this.laptopsComputersMonitors = new BaseElement({
      xpath: '//div[contains(text()," Ноутбуки, компьютеры, мониторы ")]',
    });
    this.gamingLaptops = new BaseElement({
      css: 'a[href*="notebook?nbusage%5B0%5D=gamer"]',
    });
    this.vendorDell = new BaseElement({
      xpath: '//div[4]/div[2]/ul/li[6]/label/span[2]',
    });
    this.gamingLaptop = new BaseElement({
      xpath: '//span[contains(text(),"Игровой ноутбук Dell Alienware m15 R6 M15-0365")]',
    });
    this.vendorDellLabel = new BaseElement({
      xpath: '//div[4]/div[2]/ul/li[6]/label/span[1]/input',
    });
  }
}

module.exports = { CatalogNavigation };
