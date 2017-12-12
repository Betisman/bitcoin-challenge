const Bitcoin = require('../src/bitcoin');
const expect = require('expect.js');

const bitcoin = Bitcoin();

describe('bitcoin profti maximisation', () => {
  it('returns -1 if there is no profit', () => {
    expect(bitcoin.maxProfit([])).to.equal(-1);
  });

  it('returns 16 for [45, 24, 35, 31, 40, 38, 11]', () => {
    const input = [45, 24, 35, 31, 40, 38, 11];
    expect(bitcoin.maxProfit(input)).to.equal(16);
  });

  it('returns -1 for [1]', () => {
    const input = [1];
    expect(bitcoin.maxProfit(input)).to.equal(-1);
  });
});
