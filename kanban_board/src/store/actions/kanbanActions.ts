import { Board, Column, TaskCard } from '@/constants/kanban'
import { PayloadAction } from '@reduxjs/toolkit'

export const addColumn = (state: Board, action: PayloadAction<Column>) => {
    state.columns.push(action.payload)
}

export const addTaskColumn = (
    state,
    action: PayloadAction<{ columnId: number; task: TaskCard }>
) => {
    const { columnId, task } = action.payload
    const column = state.columns.find((col) => col.id === columnId)
    if (column) {
        column.tasks.push(task)
        column.count = column.tasks.length
    }
}

export const editColumn = (
    state,
    action: PayloadAction<{ columnId: number; title: string }>
) => {
    const { columnId, title } = action.payload
    const column = state.columns.find((col) => col.id === columnId)
    if (column) {
        column.title = title
    }
}

export const editTask = (
    state,
    action: PayloadAction<{
        columnId: number
        priority: string
        taskId: number
        title: string
        description: string
    }>
) => {
    const { columnId, taskId, priority, title, description } = action.payload
    const column = state.columns.find((col) => col.id === columnId)
    if (column) {
        const task = column.tasks.find((task) => task.id === taskId)
        if (task) {
            task.priority = priority
            task.title = title
            task.description = description
        }
    }
}

export const removeColumn = (
    state,
    action: PayloadAction<{ columnId: number }>
) => {
    const { columnId } = action.payload
    state.columns = state.columns.filter((col) => col.id !== columnId)
}

export const removeTask = (
    state,
    action: PayloadAction<{ columnId: number; taskId: number }>
) => {
    const { columnId, taskId } = action.payload
    const column = state.columns.find((col) => col.id === columnId)
    if (column) {
        column.tasks = column.tasks.filter((task) => task.id !== taskId)
        column.count = column.tasks.length
    }
}
