function DisplayProduct({ product }) {
  const submit = async () => {
    console.log("submit");
    try {
      const response = await fetch("http://localhost:3000/produtos/produto", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ id: product.id, userID: localStorage.getItem("userID") }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="padding-auto margin-auto display-product">
      <h1>{product.nome}</h1>
      <img className="img-selected" src={product.imagem} alt={product.nome} />
      <p>
        Preço:{" "}
        {product.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <input
        onClick={() => {
          submit();
        }}
        type="submit"
        value="Comprar"
      />
    </div>
  );
}

export default DisplayProduct;
