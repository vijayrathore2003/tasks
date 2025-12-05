import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Task2 from '../task-2/Task2.tsx'
import Task3 from '../task-3/Task3.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Task2 /> */}
    <Task3 />
  </StrictMode>
)
