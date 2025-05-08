import { div } from "framer-motion/client";
import { useEffect, useState } from "react";
let prod = {};
function Produtos() {
  const [produtos, setProdutos] = useState(null);

  const getProdutos = async () => {
    console.log(1231123);
    try {
      const response = await fetch("http://localhost:3000/produtos");
      const data = await response.json();
      console.log(data);
      prod = data;
      setProdutos(data); // Armazena a resposta no estado
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div className="row produtos-div">
      {produtos &&
        produtos.map((produto) => (
          <div className="produtos col-6 card" key={produto.id}>
            {console.log(produto)}
            <img src={produto.imagem} class="card-img-top" alt="..." />
            <div class="body-card">
              <h5 class="card-title">{produto.nome}</h5>
              <p class="card-text">{produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              <a href="#" class="btn btn-success">
                Comprar
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Produtos;
