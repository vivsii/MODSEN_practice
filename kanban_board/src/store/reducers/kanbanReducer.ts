import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Board, Column, TaskCard } from '@/constants/kanban'
import * as kanbanActions from '@/store/actions/kanbanActions'

const initialState: Board = {
    columns: [],
}

const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: kanbanActions,
})

export const {
    addColumn,
    addTaskColumn,
    editTask,
    editColumn,
    removeTask,
    removeColumn,
} = kanbanSlice.actions
export default kanbanSlice.reducer
