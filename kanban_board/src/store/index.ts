import { configureStore } from '@reduxjs/toolkit'
import kanbanReducer from '@/store/reducers/kanbanReducer'
import { localStorageService } from '@/utils/localStorage.service'

export const store = configureStore({
    reducer: {
        kanban: kanbanReducer,
    },
    preloadedState: {
        kanban: localStorageService.loadBoard(),
    },
})

store.subscribe(() => {
    const state = store.getState()
    localStorageService.saveBoard(state.kanban)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
