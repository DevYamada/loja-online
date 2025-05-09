import { div, h2 } from "framer-motion/client";
import { useEffect, useState } from "react";

function Carrinho() {
  const [cart, setCart] = useState(null);
  const [cartP, setCartP] = useState(null);

  const getCart = async () => {
    const response = await fetch(
      `http://localhost:3000/carrinho/${localStorage.getItem("userID")}`
    );
    const data = await response.json();

    setCart(data);
  };

  const getProducts = async () => {
    const response = await fetch("http://localhost:3000/produtos", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ productsID: cart[0].produtos }),
    });
    const data = await response.json();
    setCartP(data);
    console.log(cartP);
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="card padding-auto margin-auto">
      <h1>Carrinho</h1>

      {cart &&
        cart.map((item) => (
          <div className="card-body" key={item.id}>
            <div>{item.nome}</div>
            <div>{item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</div>
            <div><img className="card-img-top1" src={item.imagem} alt="imagem produto" srcset="" /></div>
          </div>
        ))}
    </div>
  );
}

export default Carrinho;
