
import { Link } from 'react-router'

function GridUi() {
  return (
    <div className='flex mx-auto w-[22%] flex-wrap gap-2 justify-center items-center '>
        {
            Array(11).fill(0).map((_, idx)=>(
                <Link to={`task-${idx+1}`} className='w-fit p-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow' >
                    {`Task - ${idx+1}`}
                </Link>
            ))
        }
    </div>
  )
}

export default GridUi