import { create } from 'zustand';
import Cookies from 'js-cookie';

type CartState = {
    cart: JSON;
    isLoading: boolean;
    counter: number;
    getCart: ()=>void;
    addItem: (itemId:string, quantity:number, stock:number)=>void;
    removeItem: (itemId:string)=>void;
}

export const useCartStore = create<CartState>((set)=>({
    cart: JSON.parse("{}"),
    isLoading: true,
    counter: 0,
    getCart: ()=>{
        const cart = JSON.parse(Cookies.get("cart") || "{}");
        set({cart:(cart || JSON.parse("{}")), isLoading:false, counter:Object.entries(cart).length || 0});
    },
    addItem: (itemId, quantity, stock)=>{
        set((state)=>({...state, isLoading:true}));
        const cart = JSON.parse(Cookies.get("cart") || "{}");
        if (cart[itemId]) { cart[itemId] = Math.min(cart[itemId] + quantity, stock); }
        else { cart[itemId] = quantity; }
        Cookies.set("cart", JSON.stringify(cart));
        set({cart:cart, isLoading:false, counter:Object.entries(cart).length});
    },
    removeItem: (itemId)=>{
        set((state)=>({...state, isLoading:true}));
        const cart = JSON.parse(Cookies.get("cart") || "{}");
        if (cart[itemId]) { delete cart[itemId]; }
        Cookies.set("cart", JSON.stringify(cart));
        set({cart:cart, isLoading:false, counter:Object.entries(cart).length});
    },
}));