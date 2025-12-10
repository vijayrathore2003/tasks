import { useSelector } from "react-redux"
import { items } from "./util"
import type { CartType } from "./store/slices/cartSlice"

function CheckOut() {
    const cartItems = useSelector((state) => state.cart.items) as CartType[]

    let totalPrice = 0;
    cartItems.forEach((item)=>{
        totalPrice += (item.qty * item.price)
    })

    
    return (
        <div className="mt-6 h-fit rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Total</p>
                <p className="text-gray-700">${totalPrice}</p>
            </div>
            {/* <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
            </div> */}
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">${totalPrice} USD</p>
                    {/* <p className="text-sm text-gray-700">including VAT</p> */}
                </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
    )
}

export default CheckOut