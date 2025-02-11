import { create } from 'zustand';
import Cookies from 'js-cookie';

type CartState = {
    cart: {"id":number,"quantity":number}[];
    counter: number;
    getCart: ()=>void;
    addItem: (itemId:number, quantity:number, stock:number)=>void;
    removeItem: (itemId:number, quantity:number)=>void;
    deleteItem: (itemId:number)=>void;
    clearCart: ()=>void;
}

export const useCartStore = create<CartState>((set)=>({
    cart: [],
    counter: 0,
    getCart: ()=>{
        let cart: {"id":number,"quantity":number}[];
        try {
            cart = JSON.parse(Cookies.get("cart") || "[]");
            set({cart:cart, counter:cart.length});
        } catch (error) {
            Cookies.set("cart", "[]");
            set({cart:[], counter:0});
        }
    },
    addItem: (itemId, quantity, stock)=>{
        let cart: {"id":number,"quantity":number}[];
        try {
            cart = JSON.parse(Cookies.get("cart") || "[]");
        } catch (error) {
            cart = [];
        }

        let found = false;
        for (const item of cart) {
            if (item["id"] === itemId) { 
                item["quantity"] = Math.min(item["quantity"] + quantity, stock);
                found = true;
                break;
            }
        }

        if (!found) {
            cart.push({"id":itemId,"quantity":quantity});
        }
        
        Cookies.set("cart", JSON.stringify(cart));
        set({cart:cart, counter:cart.length});
    },
    removeItem: (itemId, quantity)=>{
        let cart: {"id":number,"quantity":number}[];
        try {
            cart = JSON.parse(Cookies.get("cart") || "[]");
        } catch (error) {
            cart = [];
        }

        for (const item of cart) {
            if (item["id"] === itemId) { 
                item["quantity"] = Math.max(item["quantity"] - quantity, 1);
                break;
            }
        }

        Cookies.set("cart", JSON.stringify(cart));
        set({cart:cart, counter:cart.length});
    },
    deleteItem: (itemId)=>{
        let cart: {"id":number,"quantity":number}[];
        try {
            cart = JSON.parse(Cookies.get("cart") || "[]");
        } catch (error) {
            cart = [];
        }

        for (const item of cart) {
            if (item["id"] === itemId) { 
                cart.splice(cart.indexOf(item), 1);
                break;
            }
        }

        Cookies.set("cart", JSON.stringify(cart));
        set({cart:cart, counter:cart.length});
    },
    clearCart: ()=>{
        Cookies.set("cart", "[]");
        set({cart:[], counter:0});
    },
}));