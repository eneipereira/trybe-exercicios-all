const fetchCryptoCoins = async () => {
  const API_URL = 'https://api.coincap.io/v2/assets';
  const coins = await fetch(API_URL);
  const coinsRes = await coins.json();
  const { data } = coinsRes;
  return data;
};

const fetchCurrencies = async () => {
  const CURR_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
  const currencies = await fetch(CURR_URL);
  const result = await currencies.json();
  const { usd } = result;
  return usd;
}

const putCryptoCoins = async () => {
  const coinsRes = await fetchCryptoCoins();
  const currencies = await fetchCurrencies();
  const ol = document.querySelector('#cryptoContainer');
  coinsRes
    .filter((coin) => coin.rank <= 10)
    .forEach((item) => {
      const li = document.createElement('li');
      const usdPrice = Number(item.priceUsd);
      const brlPrice = usdPrice * currencies.brl;
      li.innerText = `${item.name} (${item.symbol}): $ ${usdPrice.toFixed(2)} / R$ ${brlPrice.toFixed(2)}`;
      ol.appendChild(li);
    });
}

window.onload = putCryptoCoins();
