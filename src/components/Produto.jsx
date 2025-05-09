import { useEffect, useState } from "react";
import DisplayProduct from "./DisplayProduct.jsx";

function Produto() {
  const [produtos, setProdutos] = useState(null);

  const getProduto = async () => {
    try {
      const response = await fetch("https://loja-online-back-6j5q.onrender.com/produtos");
      const data = await response.json();

      for (let item = 0; item<=data.length; item++){
        if (data[item].id == localStorage.getItem("produto")){
          console.log(data[item]);
          setProdutos(data[item])
          
          return
        }
      }


    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProduto();
  }, []);

  return (
    <div>
        <p>aqui</p>

      <h1>{produtos && <DisplayProduct product={produtos}/>}</h1>
    </div>
  );
}

export default Produto;
