const express = require('express');
const cors = require('cors');
const { restClient } = require('@polygon.io/client-js');
const { checkPolygonResponse } = require('./services/checkPolygonResponse');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/financials', async (req, res) => {
  try {
    let result;
    result = await fetch(`https://api.polygon.io/v2/aggs/ticker/${req.body.ticker}/prev?apiKey=${process.env.POLYGON_API_KEY}`);
    checkPolygonResponse(await result.json());
    const price = (await result.json()).results[0].c;
  
    result = await fetch(`https://api.polygon.io/vX/reference/financials?apiKey=${process.env.POLYGON_API_KEY}&ticker=${req.body.ticker}`);
    const financials = (await result.json()).results[1].financials;
  
    const totalAssets = financials.balance_sheet.assets.value;
    const totalLiabilities = financials.balance_sheet.liabilities.value;
    const currentAssets = financials.balance_sheet.current_assets.value;
    const currentLiabilities = financials.balance_sheet.current_liabilities.value;
    const longTermDebt = financials.balance_sheet.long_term_debt.value;
    const earningPerShare = financials.income_statement.basic_earnings_per_share.value;
    const workingCapital = currentAssets - currentLiabilities;
  
    res.json({
      price,
      totalAssets,
      totalLiabilities,
      currentAssets,
      currentLiabilities,
      longTermDebt,
      earningPerShare,
      workingCapital
    });    
  } catch (error) {
    res.json({error});
  }
});

app.get('/price', async (req, res) => {
  const result = await fetch(`https://api.polygon.io/v2/aggs/ticker/${req.body.ticker}/prev?apiKey=${process.env.POLYGON_API_KEY}`);
  checkPolygonResponse(await result.json());
  const price = (await result.json()).results[0].c;
  res.json({price});
});

app.listen(3000, () => {
  console.log("listening on 3k");
});