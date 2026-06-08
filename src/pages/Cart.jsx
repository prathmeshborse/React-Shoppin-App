import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItems from "../components/CartItems";
import { useEffect, useState } from "react";

function Cart() {
    // BUG FIX: Select the specific slice and remove curly braces if your state.cart is the array
    const cart = useSelector((state) => state.cart); //this line will hit the redux store and only import cart slice from store
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(
            cart.reduce(((acc, curr) => acc + curr.price), 0)
        );
    }, [cart]);

    return ( 
        <div className="max-w-300 mx-auto px-4 py-8">
            {
                cart.length === 0 ?
                    (// Empty Cart UI
                    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                        <h1 className="text-gray-700 font-semibold text-2xl">Your cart is empty!</h1>
                        <NavLink to="/">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in px-10 py-3 rounded-lg font-semibold uppercase tracking-wider">
                                Shop Now
                            </button>
                        </NavLink>
                    </div>)
                    :
                    (// Cart Content UI
                    <div className="flex flex-col lg:flex-row justify-center gap-10">
                        
                        {/* Left Side: Cart Items List */}
                        <div className="w-full lg:w-[60%] flex flex-col gap-5">
                            {
                                cart.map((item) => ( <CartItems key={item.id} item={item} /> ))
                            }
                        </div>
                        
                        {/* Right Side: Summary Section */}
                        <div className="w-full lg:w-[40%] flex flex-col p-8 justify-between border-2 border-gray-100 rounded-xl h-fit sticky top-10">
                            
                            <div>
                                <div className="text-xl text-blue-800 uppercase font-bold">Your Cart</div>
                                <div className="text-5xl text-blue-800 uppercase font-bold -mt-2">Summary</div>
                                <p className="mt-5">
                                    <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                                </p>
                            </div>

                            <div className="mt-10 lg:mt-20">
                                <p className="text-xl font-bold text-gray-700">
                                    Total Amount: <span className="text-black">₹{totalAmount.toFixed(2)}</span>
                                </p>

                                <button className="w-full bg-blue-700 hover:bg-white border-2 border-blue-700 hover:text-blue-700 transition duration-300 ease-in text-white py-3 rounded-lg font-bold text-xl mt-5">
                                    Checkout Now
                                </button>
                            </div>

                        </div>

                    </div>)
            }
        </div>
    );
}

export default Cart;