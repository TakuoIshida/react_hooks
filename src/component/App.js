import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppContext from './../contexts/AppContext'
import Events from './Events'
import EventForm from './EventForm'
import reducer from '../reducers'

const App = () => {
  const initialState = {
    events: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <AppContext.Provider value={{state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
    </>
  )
}

export default App
