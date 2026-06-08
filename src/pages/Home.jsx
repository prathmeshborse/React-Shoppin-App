import { useEffect, useState } from "react";
import Product from '../components/Product';

function Home() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const API_URL = "https://fakestoreapi.com/products";

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setProducts(data);
        } catch (e) {
            console.log(e);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {loading ? (
                    /* Centered Loading Spinner */
                    <div className="flex flex-col justify-center items-center min-h-[60vh]">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        <h1 className="mt-4 text-xl font-medium text-gray-600">Loading items...</h1>
                    </div>
                ) : products.length === 0 ? (
                    /* Centered Empty State */
                    <div className="flex justify-center items-center min-h-[60vh]">
                        <h1 className="text-2xl font-semibold text-gray-500">No Items To Show</h1>
                    </div>
                ) : (
                    /* Responsive Grid Layout */
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Product key={product.id} product={product}/>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

export default Home;