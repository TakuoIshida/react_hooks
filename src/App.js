import React, { useState } from 'react';

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)
  return (
    <>
      <p>現在の{name}は{price}です</p>
      <button onClick={() => setState({...state, price: price + 1})}> +1</button>
      <button onClick={() => setState({...state, price: price - 1})}> -1</button>
      <button onClick={() => setState(props)}>RESET</button>
      <input value={name} onChange={(e) => setState({...state, name: e.target.value})} /> 
    </>
  )
}

App.defaultProps = {
  name: '価格',
  price: 1000
}

export default App
