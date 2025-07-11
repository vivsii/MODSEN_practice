import {
    TaskCardWrapper,
    Priority,
    Title,
    Description,
    TitleInput,
    DescriptionInput,
    PrioritySelect,
    RemoveButton,
} from '@/components/TaskCard/styled'
import { getPriorityColor } from '@/constants/colors'
import { useState } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { ThemeProvider } from 'styled-components'

interface TaskCardProps {
    priority?: string
    title: string
    description: string
    onSave?: (priority: string, title: string, description: string) => void
    onRemove?: () => void
}

export const TaskCard: React.FC<TaskCardProps> = ({
    priority,
    title,
    description,
    onSave,
    onRemove,
}) => {
    const [editPriority, setEditPriority] = useState(true)
    const [editTitle, setEditTitle] = useState(false)
    const [editDescription, setEditDescription] = useState(false)

    const [priorityValue, setPriorityValue] = useState(priority)
    const [titleValue, setTitleValue] = useState(title)
    const [descriptionValue, setDescriptionValue] = useState(description)

    const handleSave = () => {
        if (onSave) onSave(priorityValue, titleValue, descriptionValue)
    }

    const priorityColor = getPriorityColor(priority)
    let taskTheme = {
        priority: priorityColor,
        bg: '#f9fafc',
    }
    return (
        <>
            <ThemeProvider theme={taskTheme}>
                <TaskCardWrapper>
                    {editPriority ? (
                        <PrioritySelect
                            value={priorityValue}
                            onChange={(e) => setPriorityValue(e.target.value)}
                            onBlur={() => {
                                setEditPriority(false)
                                handleSave()
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setEditPriority(false)
                                    handleSave()
                                }
                            }}
                            autoFocus
                        >
                            {' '}
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                            <option value="Important">Important</option>
                        </PrioritySelect>
                    ) : (
                        <Priority
                            onClick={() => {
                                setEditPriority(true)
                                setEditTitle(false)
                                setEditDescription(false)
                            }}
                        >
                            {priorityValue}
                        </Priority>
                    )}
                    {editTitle ? (
                        <TitleInput
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                            onBlur={() => {
                                setEditTitle(false)
                                handleSave()
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setEditTitle(false)
                                    handleSave()
                                }
                            }}
                            autoFocus
                        />
                    ) : (
                        <Title
                            onClick={() => {
                                setEditPriority(false)
                                setEditTitle(true)
                                setEditDescription(false)
                            }}
                        >
                            {titleValue}
                        </Title>
                    )}
                    {editDescription ? (
                        <DescriptionInput
                            value={descriptionValue}
                            onChange={(e) =>
                                setDescriptionValue(e.target.value)
                            }
                            onBlur={() => {
                                setEditDescription(false)
                                handleSave()
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setEditDescription(false)
                                    handleSave()
                                }
                            }}
                            autoFocus
                        />
                    ) : (
                        <Description
                            onClick={() => {
                                setEditPriority(false)
                                setEditTitle(false)
                                setEditDescription(true)
                            }}
                        >
                            {descriptionValue}
                        </Description>
                    )}
                    <RemoveButton onClick={onRemove}>
                        <IoTrashOutline />
                    </RemoveButton>
                </TaskCardWrapper>
            </ThemeProvider>
        </>
    )
}
