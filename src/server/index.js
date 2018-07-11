const request = require('request');
const express = require('express');
const cors = require('cors');
const BITFINEX_API = 'https://api.bitfinex.com/v1';

let app = express();
app.use(cors());

// since bitfinex rejects CORS we request it from server and then expose an API
// with open CORS so our client can access
app.get('/api/v1/price/btc', function(req, res) {
  try {
    request.get(`${BITFINEX_API}/pubticker/btcusd`, function(
      error,
      response,
      body
    ) {
      if (error) {
        // something wrong happened requesting bitfinex
        res.status(500).json({
          ok: false,
          data: {
            msg: 'Could not fetch BTC current price, please try again later',
          },
        });
        return;
      }
      const resp = JSON.parse(body);
      // we extract last_price
      const price = (resp && resp.last_price) || 1;
      res.json({ ok: true, data: { price: Number(price) } });
    });
  } catch (error) {
    // something wrong happened requesting bitfinex
    res.status(500).json({ ok: false, data: { msg: 'Server internal error' } });
  }
});

app.listen(8080, () => console.log('server listening on port 8080!'));
