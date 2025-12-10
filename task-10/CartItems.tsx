import React from "react"
import { addItem, removeItem, type CartType } from "./store/slices/cartSlice"
import { useDispatch } from "react-redux"
import { items } from "./util"

type ItemType = {
    id: number,
    image: string,
    price: number,
    title: string,
    description: string,
}

type propType = {
    cartItem: CartType
}

function CartItems({ cartItem }: propType) {

    const dispatch = useDispatch()

    const data = items.find((item) => (item.id === cartItem.id)) as ItemType


    const handleIncrease = (item: ItemType) => {
        dispatch(addItem({ id: item.id, price: item.price }))
    }

    const handleDecrease = (item: ItemType) => {
        dispatch(removeItem({ id: item.id }))
    }



    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={data?.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{data?.title}</h2>
                    <p className="mt-1 text-xs text-gray-700"></p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => { handleDecrease(data) }}> - </span>
                        <p>{cartItem.qty}</p>
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => { handleIncrease(data) }}> + </span>
                    </div>
                    <div className="flex items-center  space-x-4">
                        <p className="text-sm">Price : ${data?.price}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CartItems)    