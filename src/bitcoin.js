module.exports = () => {
  const maxProfit = prices => {
    const profits = prices.reduce((acc, price) => {
      if (!acc[price]) acc[price] = -1;
      Object.keys(acc).map(k => {
        if (price - k > acc[k]) acc[k] = price - k 
      });
      return acc;
    }, {});
    //const values = Object.values(profits);
    const values = Object.keys(profits).map(v => profits[v]);
    return values.length < 1 ? -1 : Math.max(...values) || -1; // || -1 para devolver -1 cuando profit es 0
  };

  return { maxProfit };
};