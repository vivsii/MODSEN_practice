import { Button, HeaderWrapper, Title } from '@/components/Header/styled'
import { RootState } from '@/store'
import { addColumn } from '@/store/reducers/kanbanReducer'
import { HiOutlinePlus } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
export const Header = () => {
    const dispatch = useDispatch()

    const handleAddColumn = () => {
        dispatch(
            addColumn({
                id: Number(Date.now()),
                title: 'Column title',
                count: 0,
                tasks: [],
            })
        )
    }
    return (
        <>
            <HeaderWrapper>
                <Title>Kanban Dashboard</Title>
                <Button onClick={handleAddColumn}>
                    <HiOutlinePlus />
                </Button>
            </HeaderWrapper>
        </>
    )
}
