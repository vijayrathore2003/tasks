
import { useState } from 'react'
import useOnlineStatus from '../task-3/hooks/useOnlineStatus'

function Task3() {

    const isOnline = useOnlineStatus()
    const [count, setCount] = useState(1);
    
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div>Your Status is : { isOnline ? "Online 🟢" : "Offline 🔴" }
            </div>
            
            <button className='p-2 bg-blue-200' onClick={()=> setCount(count+1)}>Add : </button>
            <div>{count}</div>
        </div>
    )
}

export default Task3