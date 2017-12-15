module.exports = () => {

  const maxProfit = prices =>
    prices.reduce((acc, price) => ({
        sliced: acc.sliced.slice(1),
        max: Math.max(Math.max(...acc.sliced) - price, acc.max) || -1,
      }), { max: -1, sliced: prices }).max;

  return { maxProfit };
};
