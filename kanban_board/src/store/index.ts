import { configureStore } from '@reduxjs/toolkit'
import kanbanReducer from '@/store/reducers/kanbanReducer'

const saveBoard = (state: any) => {
    localStorage.setItem('kanbanBoard', JSON.stringify(state))
}

const loadBoard = () => {
    const data = localStorage.getItem('kanbanBoard')
    if (data) {
        return JSON.stringify(data)
    }
    return undefined
}

export const store = configureStore({
    reducer: {
        kanban: kanbanReducer,
    },
    preloadedState: {
        kanban: loadBoard(),
    },
})

store.subscribe(() => {
    const state = store.getState()
    saveBoard(state.kanban)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
