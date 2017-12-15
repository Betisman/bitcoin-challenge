module.exports = () => {

  const maxProfit = prices =>
    prices.reduce((acc, price) => {
      const sliced = acc.sliced.slice(1);
      return {
        sliced,
        max: Math.max(Math.max(...sliced) - price, acc.max) || -1,
      };
    }, { max: -1, sliced: prices }).max;

  return { maxProfit };
};
