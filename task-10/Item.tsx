import React from "react"

type ItemType = {
    id: number, 
    image: string,
    price: number,
    title: string,
    description: string,
}

type propType = {
    item: ItemType,
    handleAddToCart: (item: ItemType) => void
}

function Item({ item, handleAddToCart }: propType) {
    return (
        <div className="bg-white w-[20%] shadow-sm border border-gray-200 rounded-lg p-3">
            <div className="block h-full">
                <div className=" h-1/2 bg-gray-100 rounded-lg p-4">
                    <img src={item.image} alt={item.title}
                        className="w-full h-full object-contain" />
                </div>

                <div className="flex gap-2 mt-4">
                    <h5 className="text-base font-semibold text-slate-900">{item.title}</h5>
                    <h6 className="text-base text-slate-900 font-bold ml-auto">${item.price}</h6>
                </div>
                <p className="text-slate-600 text-[13px] mt-2">{item.description}</p>
                <div className="flex items-center gap-2 mt-6">
                    {/* <div
                                        className="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer" title="Wishlist">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div> */}
                    <button onClick={() => handleAddToCart(item)} type="button" className="text-sm px-2 py-2 font-medium cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white tracking-wide ml-auto outline-none border-none rounded-lg">Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default React.memo(Item)