import { create } from 'zustand';
import Cookies from 'js-cookie';

type CartState = {
    cart: JSON;
    counter: number;
    getCart: ()=>void;
    addItem: (itemId:string, quantity:number, stock:number)=>void;
    removeItem: (itemId:string, quantity:number)=>void;
    deleteItem: (itemId:string)=>void;
    clearCart: ()=>void;
}

export const useCartStore = create<CartState>((set)=>({
    cart: JSON.parse("{}"),
    counter: 0,
    getCart: ()=>{
        const cart = JSON.parse(Cookies.get("cart") || "{}");
        set({cart:(cart || JSON.parse("{}")), counter:Object.entries(cart).length || 0});
    },
    addItem: (itemId, quantity, stock)=>{
        const cart = JSON.parse(Cookies.get("cart") || "{}");
        if (cart[itemId]) { cart[itemId] = Math.min(cart[itemId] + quantity, stock); }
        else { cart[itemId] = quantity; }
        Cookies.set("cart", JSON.stringify(cart));
        set({cart:cart, counter:Object.entries(cart).length});
    },
    removeItem: (itemId, quantity)=>{
        const cart = JSON.parse(Cookies.get("cart") || "{}");
        if (cart[itemId]) { cart[itemId] = Math.max(cart[itemId] - quantity, 1); }
        Cookies.set("cart", JSON.stringify(cart));
        set({cart:cart, counter:Object.entries(cart).length});
    },
    deleteItem: (itemId)=>{
        const cart = JSON.parse(Cookies.get("cart") || "{}");
        if (cart[itemId]) { delete cart[itemId]; }
        Cookies.set("cart", JSON.stringify(cart));
        set({cart:cart, counter:Object.entries(cart).length});
    },
    clearCart: ()=>{
        Cookies.set("cart", "{}");
        set({cart:JSON.parse("{}"), counter:0});
    },
}));