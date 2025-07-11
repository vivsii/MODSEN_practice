import { BoardWrapper } from '@/components/Board/styled'
import { Column } from '@/components/Column/Column'
import { RootState } from '@/store'
import { addTaskColumn, removeColumn } from '@/store/reducers/kanbanReducer'
import { useDispatch, useSelector } from 'react-redux'

export const Board = () => {
    const columns = useSelector((state: RootState) => state.kanban.columns)
    const dispatch = useDispatch()

    const handleAddTask = (columnId: number) => {
        dispatch(
            addTaskColumn({
                columnId,
                task: {
                    id: Number(Date.now()),
                    priority: 'High',
                    title: 'Task title',
                    description: 'Add Description',
                },
            })
        )
    }

    const handleRemoveColumn = (columnId: number) => {
        dispatch(removeColumn({ columnId }))
    }
    return (
        <BoardWrapper>
            {columns.map((col) => (
                <Column
                    key={col.id}
                    columnId={col.id}
                    title={col.title}
                    count={col.count}
                    onAdd={() => handleAddTask(col.id)}
                    tasks={col.tasks}
                    onRemoveColumn={() => handleRemoveColumn(col.id)}
                />
            ))}
        </BoardWrapper>
    )
}
