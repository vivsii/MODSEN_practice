import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Kanban } from '@/pages/Kanban'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/kanban" element={<Kanban />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
