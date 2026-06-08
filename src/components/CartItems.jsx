import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast"; // Optional: if you want notifications

function CartItems({ item }) {
    const dispatch = useDispatch();

    function handleRemoveItem() {
        dispatch(remove(item.id));
        toast.error("Item removed from cart"); // Optional feedback
    }

    return (
        <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5">
            <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center w-full">

                {/* Image Section */}
                <div className="w-[30%]">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain h-40 w-full"
                    />
                </div>

                {/* Text Content Section */}
                <div className="md:ml-10 self-start space-y-5 w-full md:w-[70%]">
                    <h1 className="text-xl text-slate-700 font-semibold">
                        {item.title}
                    </h1>

                    {/* Description with line clamping to keep it tidy */}
                    <h1 className="text-base text-slate-700 font-medium line-clamp-2">
                        {item.description}
                    </h1>

                    <div className="flex items-center justify-between">
                        <p className="font-bold text-lg text-green-600">
                            ₹{item.price}
                        </p>

                        {/* Delete Button Container */}
                        <div
                            onClick={handleRemoveItem}
                            className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                        >
                            <MdDelete className="text-red-800 group-hover:text-white transition-colors duration-300" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default CartItems;