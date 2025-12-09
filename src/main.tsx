import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Task2 from '../task-2/Task2.tsx'
import Task3 from '../task-3/Task3.tsx'
import Task4 from '../task4/Task4.tsx'
import Task5 from '../task-5/Task5.tsx'
import Task6 from '../task-6/Task6.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Task2 /> */}
    {/* <Task3 /> */}
    {/* <Task4/> */}
    {/* <Task5 /> */}
    <Task6/>
  </StrictMode>
)
