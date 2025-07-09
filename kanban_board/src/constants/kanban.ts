export interface TaskCard {
    id: number
    title: string
    description?: string
    priority?: string
}

export interface Column {
    id: number
    title: string
    color?: string
    count: number
    tasks: TaskCard[]
}

export interface Board {
    columns: Column[]
}
