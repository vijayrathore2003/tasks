import Item from './Item'
import CartItem from './CartItems'
import { addItem, type CartType } from './store/slices/cartSlice';
import { useCallback } from 'react';
import Checkout from './CheckOut'
import { items, type ItemType } from './util';
import { useAppSelector, useAppDispatch } from './hooks/hooks';


function Layout() {

    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items)


    const handleAddToCart = useCallback((item: ItemType) => {
        console.log("addtocart handler : ", item)
        dispatch(addItem({ id: item.id, price: item.price }))
    }, [])

    console.log("cartItems : ", cartItems);

    return (
        <div className="bg-white h-screen">

            <div className="mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
                <h2 className="text-2xl mx-auto block w-fit sm:text-3xl font-semibold text-slate-900 mb-6 sm:mb-8">Shopping Items</h2>

                <div className="flex max-xl:gap-4 gap-6">

                    {
                        items.map((item) => (
                            <Item key={item.title} item={item} handleAddToCart={handleAddToCart} />
                        ))
                    }

                </div>
            </div>

            <div className="mx-auto mt-5 border lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
                <h2 className="text-2xl mx-auto block w-fit sm:text-3xl font-semibold text-slate-900 ">Your Cart</h2>

                <div className=" px-5 py-2 flex max-xl:gap-4 gap-6">



                    {/* {
                        cartItems && cartItems.map((cartItem: CartType) => (
                            <CartItem key={cartItem.id} items={items} cartItem={cartItem} />
                        ))
                    } */}

                    <div className="mx-auto w-full  max-w-5xl  justify-between  md:flex md:space-x-6 xl:px-0">

                        <div className="rounded-lg md:w-2/3">
                            {
                                !cartItems.length &&
                                <div className='text-lg w-fit font-bold text-red-500 mx-auto mt-5'>No items available</div>
                            }
                            {

                                cartItems && cartItems.map((cartItem: CartType) => (
                                    <CartItem key={cartItem.id} cartItem={cartItem} />
                                ))
                            }
                        </div>

                        <Checkout />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Layout