import { ImCart } from "react-icons/im";
import logo from "../assets/storeImg.png";
import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
    return (
        <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center h-20 px-4 sm:px-8">
                
                {/* Logo Section */}
                <NavLink to="/">
                    <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                        <img src={logo} alt="Store Logo" className="h-12 w-12 object-contain" loading="lazy" />
                        <span className="font-bold text-xl tracking-wider text-green-400 hidden sm:block">
                            STORE
                        </span>
                    </div>
                </NavLink>

                {/* Navigation Links */}
                <div className="flex items-center space-x-8 font-medium">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive ? "text-green-400" : "text-white hover:text-green-400 transition-colors"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink to="/cart">
                        <div className="relative group p-2">
                            <ImCart className="text-2xl group-hover:text-green-400 transition-colors" />
                            {/* Cart Counter Badge */}
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-5 h-5 flex justify-center items-center rounded-full animate-bounce">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </NavLink>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;