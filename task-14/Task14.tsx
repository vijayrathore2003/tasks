import './task14.css'
import { Link} from 'react-router'


function Task14() {
    
  return (
    <div className='h-screen pointer-events-none flex justify-center items-center  gap-3'>
        <Link to="/register" className='p-3 pointer-events-auto relative z-3 bg-blue-500 text-white rounded-sm'>Register</Link>
        <Link to="/login" className='p-3 pointer-events-auto relative z-3 bg-blue-500 text-white rounded-sm'>Login</Link>
    </div>
  )
}

export default Task14