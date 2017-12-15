module.exports = () => {

  const maxProfit = prices =>
    prices.reduce((acc, price) => {
      const sliced = acc.sliced.slice(1);
      const max = Math.max(...acc.sliced);
      return {
        sliced,
        // max: (max - price > acc.max ? max - price : acc.max) || -1,
        max: (max - price > acc.max && max - price) || acc.max || -1,
      };
    }, { max: -1, sliced: prices }).max;

  return { maxProfit };
};
