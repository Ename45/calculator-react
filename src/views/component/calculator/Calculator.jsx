import React, { Component } from 'react'
import calculator from '../../../../src/styles/component/calculator/calculator.css'
import { Icon } from '@iconify/react';

export default class Calculator extends Component {
  constructor(props) {
		super(props);
		this.state = {
			value: "",
      finalResult: "",
      isOn: false,
      showScientificCalculator: false
		};
    this.power = this.power.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleBackSpace = this.handleBackSpace.bind(this)
    this.handleEqualsTo = this.handleEqualsTo.bind(this)
	}

  power = ()=> {
    this.setState((prevState) =>({
      ...prevState,
      isOn: prevState.isOn === false ? prevState.isOn = true : prevState.isOn = false
    }))
  }

	handleClick = (e) => {
		const value = e.target.value;
		if (this.state.isOn) {
      this.setState((prevState) => ({
			value: prevState.value + value
		}));
    }else{
    alert('Please turn on power')
  }
	};

	handleBackSpace = () => {
		this.setState((prevState) => ({
			value: prevState.value.slice(0, -1)
		}));
	};

  handleClearScreen = () => {
		this.setState({
			value: "",
      finalResult: ""
		});
	};

  handleScientificCalc = () => {
    this.setState((prevState) => ({
      showScientificCalculator: !prevState.showScientificCalculator,
    }));
  };

  handleSquareRoot = () => {
        const { value } = this.state;
        const number = parseFloat(value);
        const result = Math.sqrt(number);
        this.setState({
        value: String(result),
        });
    };

    handleSin = () => {
        const { value } = this.state;
        const number = parseFloat(value);
        const result = Math.sin(number);
        this.setState({
        value: String(result),
        });
    };

    handleCos = () => {
        const { value } = this.state;
        const number = parseFloat(value);
        const result = Math.cos(number);
        this.setState({
        value: String(result),
        });
    };

    handleTan = () => {
        const { value } = this.state;
        const number = parseFloat(value);
        const result = Math.tan(number);
        this.setState({
        value: String(result),
        });
    };

    handlePowerRaisedToTwo = () => {
        const { value } = this.state;
        const number = parseFloat(value);
        const result = Math.pow(number, 2);
        this.setState({
        value: String(result),
        });
    };

    handlePowerRaisedToThree = () => {
        const { value } = this.state;
        const number = parseFloat(value);
        const result = Math.pow(number, 3);
        this.setState({
        value: String(result),
        });
    };


    handleLog = () => {
        const { value } = this.state;
        const number = parseFloat(value);
        const result = Math.log10(number);
        this.setState({
        value: String(result),
        });
    };
    
    handlePi = () => {
        this.setState({
        value: String(Math.PI),
        });
    };

	handleEqualsTo = () => {
		const { value } = this.state;
    if(this.state.value === ""){
      return "0";
    }
		try {
			const result = eval(value);
			this.setState({
				finalResult: `${"=" + result}`
			});
		} catch (error) {
			console.error(error.message);
		}
	};



  render() {
    const { showScientificCalculator } = this.state;

    return (
      <div className="main-calc-container">
        <div className="inner-container">
          <div className="inner-content">
            <div className="top-half">
              <div className="calc-name">
                <h1>Calculator</h1>
              </div>
              <div className="calculations-screen">
                <input type="text" value={this.state.value}/>
              </div>
              <div className="result">
                <p>{`${this.state.finalResult}`}</p>
              </div>
            </div>
            <div className="state-change">              
              {showScientificCalculator ? (
              <div className="scientific-half">
                  <div className="bottom-half">
                <div className="each-sci-button"> 
                <button onClick={this.power} value='Ac' className="btns-styles color-white">Ac</button>
                <button value='backspace' className="btns-styles"><Icon onClick={this.handleBackSpace}  icon="iconamoon:backspace-light" color="#C0C0C0" width="30" height="30" /></button>
                <button onClick={this.handleLog} value='log10' className="btns-styles blue-button" >log</button>
                <button onClick={this.handleSquareRoot} value='sqrt' className="btns-styles blue-button" >√</button>
                <button onClick={this.handleTan} value='tan' className="btns-styles blue-button" >tan</button>
                <button onClick={this.handlePi} value='PI' className="btns-styles blue-button" >π</button>
                <button onClick={this.handleClick} value='%' className="btns-styles blue-button" >%</button>
                <button onClick={this.handleClick} value='/' className="btns-styles blue-button">/</button>
                <button onClick={this.handleCos} value='cos' className="btns-styles blue-button">cos</button>
                <button onClick={this.handleSin} value='sin' className="btns-styles blue-button">sin</button>
                <button onClick={this.handlePowerRaisedToTwo} value='x^2' className="btns-styles blue-button">x^2</button>
                <button onClick={this.handleClick} value='7' className="btns-styles">7</button>
                <button onClick={this.handleClick} value='8' className="btns-styles">8</button>
                <button onClick={this.handleClick} value='9' className="btns-styles">9</button>
                <button onClick={this.handleClick} value='*' className="btns-styles blue-button">x</button>
                <button onClick={this.handlePowerRaisedToThree} value='x^3' className="btns-styles blue-button">x^3</button>
                <button onClick={this.handleClick} value='4' className="btns-styles">4</button>
                <button onClick={this.handleClick} value='5' className="btns-styles">5</button>
                <button onClick={this.handleClick} value='6' className="btns-styles">6</button>
                <button onClick={this.handleClick} value='-' className="btns-styles blue-button color-white">-</button>
                <button className='clear' onClick={this.handleClearScreen}>C</button>
                <button onClick={this.handleClick} value='1' className="btns-styles">1</button>
                <button onClick={this.handleClick} value='2' className="btns-styles">2</button>
                <button onClick={this.handleClick} value='3' className="btns-styles">3</button>
                <button onClick={this.handleClick} value='+' className="btns-styles blue-button color-white">+</button>
                <button className='clear' onClick={this.handleScientificCalc}>un-sci</button>
                <button onClick={this.handleClick} value='0' className="btns-styles occupy color-grey">0</button>
                <button onClick={this.handleClick} value='.' className="btns-styles color-grey">.</button>
                <button onClick={this.handleEqualsTo} value='=' className="btns-styles blue-button color-white">=</button>
              </div>
            </div>
              </div>
              ) : (
              <div className="bottom-half">
                <button className='clear' onClick={this.handleClearScreen}>C</button>

              <button className='scientific' onClick={this.handleScientificCalc}>sci</button>
              
              <div className="each-button">

                <button onClick={this.power} value='Ac' className="btns-styles color-white">Ac</button>
                <button value='backspace' className="btns-styles"><Icon onClick={this.handleBackSpace}  icon="iconamoon:backspace-light" color="#C0C0C0" width="30" height="30" /></button>
                <button onClick={this.handleClick} value='%' className="btns-styles blue-button" >%</button>
                <button onClick={this.handleClick} value='/' className="btns-styles blue-button">/</button>
                <button onClick={this.handleClick} value='7' className="btns-styles">7</button>
                <button onClick={this.handleClick} value='8' className="btns-styles">8</button>
                <button onClick={this.handleClick} value='9' className="btns-styles">9</button>
                <button onClick={this.handleClick} value='*' className="btns-styles blue-button">x</button>
                <button onClick={this.handleClick} value='4' className="btns-styles">4</button>
                <button onClick={this.handleClick} value='5' className="btns-styles">5</button>
                <button onClick={this.handleClick} value='6' className="btns-styles">6</button>
                <button onClick={this.handleClick} value='-' className="btns-styles blue-button color-white">-</button>
                <button onClick={this.handleClick} value='1' className="btns-styles">1</button>
                <button onClick={this.handleClick} value='2' className="btns-styles">2</button>
                <button onClick={this.handleClick} value='3' className="btns-styles">3</button>
                <button onClick={this.handleClick} value='+' className="btns-styles blue-button color-white">+</button>
                <button onClick={this.handleClick} value='0' className="btns-styles occupy color-grey">0</button>
                <button onClick={this.handleClick} value='.' className="btns-styles color-grey">.</button>
                <button onClick={this.handleEqualsTo} value='=' className="btns-styles blue-button color-white">=</button>
              </div>
            </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
