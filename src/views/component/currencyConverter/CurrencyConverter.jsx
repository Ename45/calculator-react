import React, {useState} from 'react'
import '../../../styles/component/currencyConverter/currencyConverter.css'

const CurrencyConverter = () => {

  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [baseAmount, setBaseAmount] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.62,
    NGN: 750,
  };

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleBaseAmountChange = (event) => {
    setBaseAmount(event.target.value);
    convertCurrency(baseCurrency, targetCurrency, event.target.value);
  };

  const convertCurrency = (base, target, amount) => {
    const rate = exchangeRates[target] / exchangeRates[base];
    const convertedAmount = amount * rate;
    setTargetAmount(convertedAmount.toFixed(2));
  };

  const handleClick = (e) => {
    const value = e.target.value;
    setBaseAmount(baseAmount + value)
    convertCurrency(baseCurrency, targetCurrency, value)
};

  return (
    <div>
      <div className="mainCont">
        <div className="cont">
          <div className="inner-flex">
            <div className="currencyConverter">
            <h2>Currency Converter</h2>
          </div>
          <div className="write-up">
            <p>Check live rates, set rate alerts, receive notifications and more.</p>
          </div>
          <div className="currencies-and-amount">
            <div className="pick-currency">
              <div className="amount">
                <p>Amount</p>
              </div>
              <div className="to-flex">
                <div className="currency">
                  <select id="baseCurrency" value={baseCurrency} onChange={handleBaseCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="NGN">NGN</option>
                  </select>
                </div>
                <div className="figure-to-convert">
                  <p>{baseAmount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="currencies-and-amount">
            <div className="pick-currency">
              <div className="amount">
                <p>Converted Amount</p>
              </div>
              <div className="to-flex">
                <div className="currency">
                  <select id="baseCurrency" value={targetCurrency} onChange={handleTargetCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="NGN">NGN</option>
                  </select>
                </div>
                <div className="figure-to-convert">
                  <p>{targetAmount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-half">
              <div className="each-btn">                
                <button onClick={handleClick} value='0' className="btns-style">0</button>
                <button onClick={handleClick} value='7' className="btns-style">7</button>
                <button onClick={handleClick} value='8' className="btns-style">8</button>
                <button onClick={handleClick} value='9' className="btns-style">9</button>
                <button onClick={handleClick} value='4' className="btns-style">4</button>
                <button onClick={handleClick} value='5' className="btns-style">5</button>
                <button onClick={handleClick} value='6' className="btns-style">6</button>
                <button onClick={handleClick} value='1' className="btns-style">1</button>
                <button onClick={handleClick} value='2' className="btns-style">2</button>
                <button onClick={handleClick} value='3' className="btns-style">3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyConverter