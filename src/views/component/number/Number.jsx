import {React, useState} from 'react'

const Number = () => {
  const [number, setNumber] = useState(0)

  const handleClick = (e) => {
    if (number >= 0) {
      if (e.target.value === "count++") {
      setNumber(number+1)
    }
    if (e.target.value === "count--") {
      if (number > 0) {
        setNumber(number-1)
      }
    }
    if (e.target.value === "count+5") {
      setNumber(number+5)
    }
    if (e.target.value === "count-5") {
      const value = number-5
      if (value >= 0) {
        setNumber(number-5)        
      }
    }
    }
  }

  
  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={handleClick} value="count++">++</button>
      <button onClick={handleClick} value="count--">--</button>
      <button onClick={handleClick} value="count+5">+5</button>
      <button onClick={handleClick} value="count-5">-5</button>
    </div>
  )
}

export default Number