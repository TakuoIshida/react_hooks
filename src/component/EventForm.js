import React, { useState, useContext } from 'react'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS
} from './../actions'
import AppContext from './../contexts/AppContext'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = e => {
    e.preventDefault()
    dispatch({
        type: CREATE_EVENT,
        title,
        body
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('Are you sure?')
    if(result) {
      dispatch({type: DELETE_ALL_EVENTS})
    }
  }

  // buttonの活性・不活性
  const unCreatable = title === '' | body === ''
  return(
      <>
      <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}></input>
          </div>
          <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <input className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></input>
          </div>

          <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
          <button className="btn btn-warning" onClick={deleteAllEvents} disabled={state.events.length === 0}>イベントを全て削除する</button>
          {/* <button className="btn btn-info">ログを削除する</button> */}
        </form>
      </>
  )
}

export default EventForm
