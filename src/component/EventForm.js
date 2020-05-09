import React, { useState, useContext } from 'react'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'
import AppContext from './../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

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

    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントが作成されました",
      operatedAt: timeCurrentIso8601() 
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除しますか?')
    if(result) {
      dispatch({type: DELETE_ALL_EVENTS})
      dispatch({
        type: ADD_OPERATION_LOG,
        description: "イベントが削除されました",
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    const result = window.confirm('全てのログを削除しますか?')
    if(result) {dispatch({type: DELETE_ALL_OPERATION_LOGS})}
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
          <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>
        </form>
      </>
  )
}

export default EventForm
