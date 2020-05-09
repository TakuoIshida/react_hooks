import React, { useEffect, useState } from 'react';

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state
// 新規画面読み込み or 更新rennderringのあとで実行される(componentDidMount,componentDodUpdate)
  useEffect(() => {
    console.log('didmount or update')
  })
// mountされたときのみ、JSXのレンダリング後に実行される
  useEffect(() => {
    console.log('didmount')
  },[])
  // this callback is for nameonly.
  useEffect(() => {
    console.log('nameonly')
  },[name])
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
