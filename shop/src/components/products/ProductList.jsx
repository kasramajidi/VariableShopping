import { useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import { Client } from "../../../lib/axois";

export default function ProductList() {
    const { cart, dispatch } = useContext(CartContext);

    const getCartsFromApi = async () => {
        try {
            const response = await Client.get("/products");
            console.log(response.data.data);

            const formattedData = response.data.data.map(item => ({
                id: item.id,
                title: item.attributes.title,
                image: item.attributes.image,
                price: item.attributes.price,
                quantity: 1
            }));

            dispatch({ type: "ADD_PRODUCTS", payload: formattedData });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCartsFromApi();
    },[]);


    const visibleProducts = cart.slice(6, 10);

    const total = visibleProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (visibleProducts.length < 1) {
        return (
            <div className="max-w-[850px] mx-auto gap-5 flex items-start flex-col p-6">
                <h2 className="text-3xl font-bold mb-4 self-start">Products</h2>
                <h1 className="text-5xl font-bold text-[#0F172A]">YOUR BAG</h1>
                <span className="text-[#64748B] text-lg">is currently empaty</span>
            </div>
        );
    }

    return (
        <div className="max-w-[850px] mx-auto flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold mb-4 self-start">Products</h1>
            <div className="w-[800px] flex flex-col gap-4">
                {visibleProducts.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-md shadow-md">
                        <img src={item.image} alt={item.title} className="w-16 h-16 rounded-md" />
                        <div className="flex-1 ml-4 gap-2">
                            <h2 className="text-[#1E293B] font-bold">{item.title}</h2>
                            <div className="flex items-center">
                                <p className="text-[#1E293B] text-sm">${item.price}</p>
                                <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })} className="ml-4 text-red-500 text-xl cursor-pointer">🗑</button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item })} className="px-2  border-[#CBD5E1] border text-center bg-transparent rounded-md">-</button>
                            <span className="px-4">{item.quantity}</span>
                            <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item })} className="px-2 bg-[#F97316] text-white rounded-md">+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between w-[800px] mt-6">
                <span className="text-xl text-[#1E293B] font-bold">Total</span>
                <h2 className="bg-[#F97316] py-0.5 px-5 text-xl text-white font-bold rounded-lg">${total}</h2>
            </div>
            <button onClick={() => dispatch({ type: "CLEAR_CART" })} className="btn bg-[#CBCDCD] py-2 px-4 rounded-lg text-[#324E25] cursor-pointer">Clear Cart</button>
        </div>
    );
}





