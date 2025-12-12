import { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router";
import GridUi from './GridUi.tsx'

const Task2 = lazy(() => import('../task-2/Task2.tsx'))
const Task3 = lazy(() => import('../task-3/Task3.tsx'))
const Task4 = lazy(() => import('../task-4/Task4.tsx'))
const Task5 = lazy(() => import('../task-5/Task5.tsx'))
const Task6 = lazy(() => import('../task-6/Task6.tsx'))
const Task7 = lazy(()=> import('../task-7/Task7.tsx'))
const Task8 = lazy(() => import('../task-8/Task8.tsx'))
const Task10 = lazy(()=> import('../task-10/Task10.tsx'));
const Task11 = lazy(()=> import('../task-11/Task11.tsx'));
const Task12 = lazy(()=> import('../task-12/Task12.tsx'))
const Task13 = lazy(()=> import('../task-13/Task13.tsx'))



function App() {
    return (
        <Routes>
            <Route path='/' element={<GridUi />} />

            <Route path='/task-2' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task2 />
                </Suspense>
            } />

            <Route path='/task-3' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task3 />
                </Suspense>
            } />

            <Route path='/task-4' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task4 />
                </Suspense>
            } />

            <Route path='/task-5' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task5 />
                </Suspense>
            } />

            <Route path='/task-6' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task6 />
                </Suspense>
            } />

            <Route path='/task-7' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task7 />
                </Suspense>
            } />

            <Route path='/task-8' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task8 />
                </Suspense>
            } />

            {/* <Route path='/task-10' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task10 />
                </Suspense>
            } /> */}

            <Route path='/task-11' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task11 />
                </Suspense>
            } />

            <Route path='/task-12' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task12 />
                </Suspense>
            } />


            <Route path='/task-13' element={
                <Suspense fallback={<div>Loading...</div>}>
                    <Task13 />
                </Suspense>
            } />

            
        </Routes>
    )
}

export default App