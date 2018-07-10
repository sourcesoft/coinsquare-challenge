## Coinsquare Technical Take Home

A simple Bitcoin price calculator form in React

#### Get Started:

Install and run:

```
yarn
yarn start # runs both server and client in parallel
yarn server # runs express server
yarn dev # runs webpack dev server and launch browser
yarn test # runs tests
```

Build the bundle and html:

```
yarn build
```

Output will be compiled to `/dist` folder.
Remember opening the built html won't work without a running server (`yarn server`)

#### Notes:

- Used Node and Express to fetch API from Bitfinex and bypass the CORS
  restrictions
- As requested, form validations are implemented in client only (no async server
  validations)
- To keep the code simple no Thunks or Sagas are used to handle XHR.

#### Libraries Used:

- React
- Redux
- styled-components
- Webpack, Jest, Babel, Express
