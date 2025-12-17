import { useState, type ChangeEvent } from "react"

function Task7() {
    const list = [
        "bhopal", "bhojpal", "india", "indore", "ujjain", "jabalpur", "madhya pradesh"
    ]

    const [searchValue, setSearchValue] = useState("");

    const filteredList = list.filter((element) => {
        console.log("filtering elements")
        return element.includes(searchValue)
    })

    const simpleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log("calling change event handler : ", e.target.value);
        setSearchValue(e.target.value)
    }

    const handleChange = debounce(simpleChange, 1000);

    function debounce(callback: (...args: any[])=>void, delay: number){
        let timer: NodeJS.Timeout;
        return (...args: any[])=>{
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback(...args)
            }, delay);
        }
    }

    // function simpleThrottle(e: ChangeEvent<HTMLInputElement>){
    //     console.log("calling change event handler : ", e.target.value, " at ", new Date().toLocaleTimeString());
    // }

    // const throttledChange = throttle(simpleThrottle, 1000);

    // function throttle(mainFunction, delay){
    //     let timer = null;
    //     return (...args) => {
    //         if(timer === null){
    //             mainFunction(...args);
    //             timer = setTimeout(()=>{
    //                 timer = null;
    //             }, delay);
    //         }
    //     }
    // }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="flex shadow p-10 rounded-2xl flex-col items-center">
                <h1 className="text-2xl font-bold text-center dark:text-gray-200 mb-5">Multi Step Form</h1>
                <input type="text" onChange={handleChange} className="shadow-sm mb-5 rounded-md w-fit px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Type something..." />
                {
                    Array.isArray(filteredList) && filteredList.map((el) => (
                        <li> {el} </li>
                    ))
                }
            </div>
        </div>
    )
}

export default Task7