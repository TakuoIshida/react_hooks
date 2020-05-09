const events = (state =[], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body }
            const length = state.length
            const id = length === 0? 1 : state[length-1].id + 1
            // ...でstateを全て取得し、その後ろにid: idとそのeventJSONを全て取得する
            // return [...state, { id: id, ...event}]
            return [...state, { id, ...event}]
        case 'DELETE_EVENT':
            return state.filter(event => event.id !== action.id)
        case 'DELETE_ALL_EVENTS':
            return []
        default:
            return state
    }
}
export default events