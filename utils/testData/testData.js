// eslint-disable-next-line import/no-extraneous-dependencies
const { generate } = require('randomstring');

class TestData {
  static textGenerator() {
    return generate({ length: 10, charset: 'alphabetic' });
  }

  static phoneNumber() {
    return `292388${generate({ length: 3, charset: 'numeric' })}`;
  }

  static mailRandomizer() {
    return `${this.textGenerator()}@russkijkorabl.com`;
  }

  static passwordGenerator() {
    return this.textGenerator().toUpperCase();
  }

  static houseNumber() {
    return '14';
  }

  static houseNumberExtra() {
    return '2';
  }

  static housePorch() {
    return '4';
  }

  static houseFloor() {
    return '10';
  }

  static houseAppartment() {
    return '92';
  }
}

module.exports = { TestData };
