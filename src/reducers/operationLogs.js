import {
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from '../actions'

const operationLogs = (state = [], action) => {
    switch(action.type) {
        case ADD_OPERATION_LOG:
            const operationLogs ={
                description: action.description,
                operatedAt: action.operatedAt
            }
            // operationLogsは先頭に出力される
            return [operationLogs, ...state]
        case DELETE_ALL_OPERATION_LOGS:
            return []
        default:
            return state
    }
}

export default operationLogs

