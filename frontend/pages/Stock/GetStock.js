export const getStockInfo = async (ticker) => {
  ticker = ticker.toUpperCase();
  const result = await fetch('http://localhost:3000/financials', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ticker})
  });

  const res = await result.json();
  console.log(res);
  return res;
}