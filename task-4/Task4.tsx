import useLocalStorage from './useLocalStorage'

function Task4() {

    const [count, setCount] = useLocalStorage('count', 0); // a state which is synced with localStorage

    return (
        <div className='flex flex-col h-screen justify-center items-center'>

            <p>Count</p>
            <p>{count}</p>

            <div className='flex gap-5'>
                <button className="p-2 bg-blue-400 text-white rounded-xl" onClick={() => setCount(count - 1)}> Decr </button>
                <button className="p-2 bg-blue-400 text-white rounded-xl" onClick={() => setCount(count + 1)}> Incr </button>
            </div>

        </div>
    )
}

export default Task4