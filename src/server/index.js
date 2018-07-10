const request = require('request');
const express = require('express');
const cors = require('cors');
const BITFINEX_API = 'https://api.bitfinex.com/v1';

let app = express();
app.use(cors());

app.get('/api/v1/price/btc', function(req, res) {
  try {
    request.get(`${BITFINEX_API}/pubticker/btcusd`, function(
      error,
      response,
      body
    ) {
      if (error) {
        res.status(500).json({
          ok: false,
          data: {
            msg: 'Could not fetch BTC current price, please try again later',
          },
        });
        return;
      }
      const resp = JSON.parse(body);
      const price = (resp && resp.last_price) || 1;
      res.json({ ok: true, data: { price: Number(price) } });
    });
  } catch (error) {
    res.status(500).json({ ok: false, data: { msg: 'Server internal error' } });
  }
});

app.listen(8080, () => console.log('server listening on port 3000!'));
