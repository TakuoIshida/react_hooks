import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext' 
import OperationLog from './OperationLog'

const OperationLogs = () => {
    const { state } = useContext(AppContext)
    return(
        <>
        <h4>操作ログ一覧</h4>
        <table className="table table-hover">
            <thead>
                <tr>
                    <td>内容</td>
                    <td>日時</td>
                </tr>
            </thead>
            <tbody>
                {
                state.operationLogs.map((operationLog, index) => {
                    return <OperationLog key={index} operationLog={operationLog}/>
                })
                }
            </tbody>
        </table>
        </>
    )
}

export default OperationLogs