import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

function Product({ product }) {
    if (!product) {
        return <div className="p-4 text-center text-gray-500">No data</div>;
    }

    // FIX 1: Select only the cart array (No curly braces here)
    const cart = useSelector((state) => state.cart); //this line will hit the redux store and only import cart slice from store
    const dispatch = useDispatch();

    // FIX 2: Use .some() to check by ID (safer than .includes(product))
    // We check if "cart" exists first to prevent crashes
    const isItemSelected = cart && cart.some((item) => item.id === product.id);

    function handleAddItem() {
        dispatch(add(product));
        toast.success("Item added to Cart");
    }

    function handleRemoveItem() {
        dispatch(remove(product.id));
        toast.error("Item removed from Cart");
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col h-full">
            <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="object-contain h-full w-full hover:scale-105 transition-transform duration-300" 
                />
            </div>

            <div className="mt-4 flex flex-col grow">
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2 grow">{product.description}</p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                    
                    <button 
                        onClick={isItemSelected ? handleRemoveItem : handleAddItem}
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 
                            ${ isItemSelected?
                             "bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white" 
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        }`}
                    >
                        {isItemSelected ? "Remove Item" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Product;