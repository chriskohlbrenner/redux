import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, multiply, multiplyIfDivisibleByFive, resetToZero } = this.props
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={multiply}>Double</button>
        {' '}
        <button onClick={multiplyIfDivisibleByFive}>Double if divisible by five</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
        {' '}
        <button onClick={resetToZero}>Reset to zero</button>
      </p>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  multiply: PropTypes.func.isRequired,
  multiplyIfDivisibleByFive: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  resetToZero: PropTypes.func.isRequired
}

export default Counter
