import { useState } from 'react'
import Modal from './Modal'

function Task6() {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);
    return (
        <div className=' h-screen w-full flex justify-center items-center '>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Modal.Header>
                    <h2 className="text-xl w-fit mx-auto font-bold mb-4 text-gray-800">Modal Header</h2>
                </Modal.Header>
                <Modal.Body className='w-[30vw] px-5'>
                    <div className="bg-white  mx-auto p-6 rounded-2xl shadow h-fit">
                        <h2 className="text-lg mx-auto w-fit  mb-2 text-gray-800">Enter Your Name</h2>

                        <input
                            placeholder="Vijay"
                            className="w-full p-3 border rounded-xl mb-3 outline-none"
                            onChange={(e)=> setName(e.target.value)}
                        />

                        <button
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow"
                            onClick={()=> setShow(true)}
                        >
                            Done
                        </button>
                        {show && <p className='mx-auto w-fit mt-4'>Hi {name}</p>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className=' p-3 block w-fit mx-auto bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl shadow' onClick={() => setOpen(false)}>Close</button>
                </Modal.Footer>
            </Modal>

            <button className='mx-auto  flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={() => setOpen(true)}>Open Modal</button>
        </div>
    )
}

export default Task6