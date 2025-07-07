export type Priority = 'Low Priority' | 'Medium' | 'High Priority'

export interface TaskCard {
    id: number
    title: string
    description?: string
    priority?: Priority
}

export interface Column {
    id: number
    title: string
    color: string
    count: number
    tasks: TaskCard[]
}

export interface Board {
    columns: Column[]
}
