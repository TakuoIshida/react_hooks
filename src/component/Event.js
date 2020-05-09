import React, { useContext } from 'react'
import {
    ADD_OPERATION_LOG,
    DELETE_EVENT
} from './../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const id = event.id
    const handleClickDeleteButton =() => {
    const result = window.confirm(`Are you sure?${id}`)
    if (result) {
        dispatch({ type: DELETE_EVENT,id})
        dispatch({ 
            type: ADD_OPERATION_LOG,
            description: `${id}イベントが削除されました`,
            operatedAt: timeCurrentIso8601()
        })
    }
    }
    return (
    <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-warning" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
    )
}

export default Event