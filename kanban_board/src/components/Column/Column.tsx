import {
    Button,
    Count,
    ColumnHeader,
    Title,
    ColumnWrapper,
    AddTask,
    TitleInput,
    DeleteButton,
} from '@/components/Column/styled'
import { HiOutlinePlus } from 'react-icons/hi'
import { TaskCard as TaskCardInterface } from '@/constants/kanban'
import { TaskCard } from '@/components/TaskCard/TaskCard'
import { useDispatch } from 'react-redux'
import {
    editColumn,
    editTask,
    removeColumn,
    removeTask,
} from '@/store/reducers/kanbanReducer'
import { TaskCardWrapper } from '@/components/TaskCard/styled'
import { useState } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { ThemeProvider } from 'styled-components'
import { getColumnColor } from '@/constants/colors'

interface ColumnCardProps {
    columnId: number
    title: string
    count: number
    onAdd: () => void
    onRemoveColumn?: () => void
    tasks: TaskCardInterface[]
}
export const Column: React.FC<ColumnCardProps> = ({
    columnId,
    title,
    count,
    onAdd,
    onRemoveColumn,
    tasks,
}) => {
    const dispatch = useDispatch()

    const handleSave = (
        taskId: number,
        priority: string,
        title: string,
        description: string
    ) => {
        dispatch(editTask({ columnId, taskId, priority, title, description }))
    }
    const handleRemove = (columnId: number, taskId: number) => {
        dispatch(removeTask({ columnId, taskId }))
    }

    const handleSaveTitle = () => {
        setEdit(false)
        if (editTitle.trim() && editTitle !== title) {
            dispatch(editColumn({ columnId, title: editTitle }))
        }
    }

    const getPriorityOrder = (priority: string): number => {
        const normalizedPriority = priority?.trim() || ''

        switch (normalizedPriority) {
            case 'High':
                return 1
            case 'Medium':
                return 2
            case 'Low':
                return 3
            default:
                return 4
        }
    }

    const sortTasksByPriority = (tasks: any[]): any[] => {
        return [...tasks].sort((a, b) => {
            const orderA = getPriorityOrder(a.priority || '')
            const orderB = getPriorityOrder(b.priority || '')

            if (orderA !== orderB) {
                return orderA - orderB
            }

            return (a.priority || '').localeCompare(b.priority || '')
        })
    }
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(title)

    const headerColor = getColumnColor(editTitle)
    let theme = {
        main: headerColor,
        bg: '#f9fafc',
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <ColumnWrapper>
                    <ColumnHeader>
                        <Count>{count}</Count>
                        {edit ? (
                            <TitleInput
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                onBlur={handleSaveTitle}
                                onKeyDown={(e) =>
                                    e.key === 'Enter' && handleSaveTitle()
                                }
                                autoFocus
                            />
                        ) : (
                            <Title
                                onClick={() => {
                                    setEdit(true)
                                    setEditTitle('')
                                }}
                            >
                                {editTitle}
                            </Title>
                        )}
                        <DeleteButton onClick={onRemoveColumn}>
                            <IoTrashOutline />
                        </DeleteButton>

                        <Button onClick={onAdd}>
                            <HiOutlinePlus />
                        </Button>
                    </ColumnHeader>

                    {sortTasksByPriority(tasks).map((task) => (
                        <TaskCard
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            priority={task.priority}
                            onSave={(newPriority, newTitle, newDescription) =>
                                handleSave(
                                    task.id,
                                    newPriority,
                                    newTitle,
                                    newDescription
                                )
                            }
                            onRemove={() => handleRemove(columnId, task.id)}
                        />
                    ))}
                    <TaskCardWrapper>
                        <AddTask onClick={onAdd}>Add task...</AddTask>
                    </TaskCardWrapper>
                </ColumnWrapper>
            </ThemeProvider>
        </>
    )
}
