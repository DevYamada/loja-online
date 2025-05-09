import { div, h2 } from 'framer-motion/client';
import {useEffect, useState} from 'react'

function Carrinho(){

    const [cart, setCart] = useState(null)
    const [cartP, setCartP] = useState(null)

    const getCart = async () => {
        const response = await fetch("http://localhost:3000/carrinho", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({ userID: localStorage.getItem("userID") }),
        })
        const data = await response.json();
        setCart(data)
        console.log(cart);
    }

    const getProducts = async () => {
        const response = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({ productsID: cart[0].produtos }),
        })
        const data = await response.json();
        setCartP(data)
        console.log(cartP);
    }

    useEffect(() => {
        getCart()
    }, [])

    return(
        <div className="padding-auto margin-auto">
            <h1>Carrinho</h1>
            
            {cart && <h2>{cart[0].produtos}</h2>}
        </div>
    )
}

export default Carrinho;