import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Board, Column, TaskCard } from '@/constants/kanban'

const initialState: Board = {
    columns: [],
}

const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        addColumn(state, action: PayloadAction<Column>) {
            state.columns.push(action.payload)
        },
        addTaskColumn(
            state,
            action: PayloadAction<{ columnId: number; task: TaskCard }>
        ) {
            const { columnId, task } = action.payload
            const column = state.columns.find((col) => col.id === columnId)
            if (column) {
                column.tasks.push(task)
                column.count = column.tasks.length
            }
        },
        removeTask(
            state,
            action: PayloadAction<{ columnId: number; taskId: number }>
        ) {
            const { columnId, taskId } = action.payload
            const column = state.columns.find((col) => col.id === columnId)
            if (column) {
                column.tasks = column.tasks.filter((task) => task.id !== taskId)
                column.count = column.tasks.length
            }
        },
    },
})

export const { addColumn, addTaskColumn, removeTask } = kanbanSlice.actions
export default kanbanSlice.reducer
