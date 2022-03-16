const { expect } = require('chai');
const { PageFactory } = require('../utils/pageFactory');
const { chromeConfig, sleep, quit } = require('../utils/webdriverConfigs/chromeDriver');
const { TestData } = require('../utils/testData/testData');
const { DriverUtils } = require('../utils/driverUtils/driverUtils');

const homePage = PageFactory.getPage('Home');
const deliveryPage = PageFactory.getPage('Delivery');
const catalogPage = PageFactory.getPage('Catalog');
const devicePage = PageFactory.getPage('Device');
const checkoutPage = PageFactory.getPage('Checkout');
const catalogNavigation = catalogPage.catalogNavigation;

describe('Test performs the testing of the purchase process', () => {
  before(async () => {
    await chromeConfig();
  });
  beforeEach(async () => {
    await sleep();
  });
  after(async () => {
    await sleep();
    await quit();
  });

  it('Verify that Home page is loaded and the title matches the expected', async () => {
    const title = 'Onliner';
    await homePage.open();
    await homePage.waitUntilTitleIsLoaded(title);
    expect(await DriverUtils.getTitle()).equal(title);
  });

  it('Verify that catalog button text is matching the expected', async () => {
    const expectedButtonText = 'Каталог';
    expect(await homePage.Header.catalogButton.getElementText()).equal(expectedButtonText);
  });

  it('Verify that user is landed on catalog page after click on catalog button', async () => {
    await homePage.Header.catalogButton.click();
    expect(await DriverUtils.getCurrentUrl()).equal(catalogPage.getPageUrl());
  });

  it('Verify that Catalog page is loaded and the title matches the expected', async () => {
    const title = 'Каталог Onlíner';
    await homePage.waitUntilTitleIsLoaded(title);
    expect(await DriverUtils.getTitle()).equal(title);
  });

  it('Verify that after click on Computers and Neworks in catalogNavigation an appropriate section is opened', async () => {
    await catalogNavigation.computersAndNetworks.click();
    await catalogNavigation.laptopsComputersMonitors.findElement();
  });

  it('Verify that user is landed on the gaming laptops catalog page after click on appropriate element', async () => {
    const title = 'Игровой ноутбук купить в Минске';
    await catalogNavigation.laptopsComputersMonitors.click();
    await catalogNavigation.gamingLaptops.click();
    expect(await DriverUtils.getTitle()).equal(title);
  });

  it('Verify that Dell vendor is not selected by default', async () => {
    expect(await catalogNavigation.vendorDellLabel.isSelected()).equal(false);
  });

  it('Verify that Dell vendor becomes selected after click', async () => {
    const vendorCheckBox = catalogPage.catalogNavigation.vendorDell;
    await vendorCheckBox.scrollUnitllIsVisible();
    await vendorCheckBox.click();
    expect(await catalogNavigation.vendorDellLabel.isSelected()).equal(true);
  });

  it('Verify that user can sort list', async () => {
    await catalogNavigation.orderOptions.click();
    await catalogNavigation.orderExpensiveFirstOption.click();
  });

  it('Verify that user is landed on laptop page after click', async () => {
    const title = 'Dell Alienware m15 R6 M15-0365 игровой ноутбук купить в Минске';
    await catalogNavigation.gamingLaptop.click();
    expect(await DriverUtils.getTitle()).equal(title);
  });

  it('Verify that laptop can be added to cart after click and user is landed on checkout page', async () => {
    await devicePage.addToCardButton.click();
    await devicePage.addToCardButton.click();
  });

  it('Verify that amount is equal to expected', async () => {
    expect(await checkoutPage.amountCounter.getElementText()).include('1');
  });

  it('Verify that amount of laptops can be increased via button', async () => {
    await checkoutPage.increaseButton.click();
  });

  it('Verify that amount increased', async () => {
    expect(await checkoutPage.amountCounter.getElementText()).include('2');
  });

  it('Verify that user can proceed further to the delivery details page', async () => {
    await checkoutPage.proceedButton.click();
  });

  it('Verify that user is landed to delivery details page', async () => {
    expect(await DriverUtils.getCurrentUrl()).equal(deliveryPage.getPageUrl());
  });

  it('Verify that complete the fields with the test data', async () => {
    await deliveryPage.firstName.textInput(TestData.textGenerator());
    await deliveryPage.lastName.textInput(TestData.textGenerator());
    await deliveryPage.houseStreet.textInput(TestData.textGenerator());
    await deliveryPage.houseNumber.textInput(TestData.houseNumber());
    await deliveryPage.houseNumberExtra.textInput(TestData.houseNumberExtra());
    await deliveryPage.housePorch.textInput(TestData.housePorch());
    await deliveryPage.houseFloor.textInput(TestData.houseFloor());
    await deliveryPage.houseAppartment.textInput(TestData.houseAppartment());
    await deliveryPage.extraInfoForAdress.textInput(TestData.textGenerator());
    await deliveryPage.emailAddress.textInput(TestData.mailRandomizer());
    await deliveryPage.phoneNumber.textInput(TestData.phoneNumber());

  });

});
