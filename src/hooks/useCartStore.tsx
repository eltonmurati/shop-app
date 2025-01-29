import { create } from 'zustand';
import Cookies from 'js-cookie';

type CartState = {
    cart: JSON;
    isLoading: boolean;
    counter: number;
    getCart: ()=>void;
    addItem: (itemId:number, quantity:number)=>void;
    removeItem: (itemId:number)=>void;
}

const useStore = create<CartState>((set)=>({
    cart: JSON.parse("{}"),
    isLoading: true,
    counter: 0,
    getCart: ()=>{
        const cart = JSON.parse(Cookies.get("cart") || "{}");
        set({cart:(cart || JSON.parse("{}")), isLoading:false, counter:Object.entries(cart).length || 0})
    },
    addItem: ()=>{},
    removeItem: ()=>{},
}));