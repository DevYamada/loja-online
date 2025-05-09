import { _useState } from "react";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Contato from "./components/Contato.jsx";
import Produtos from "./components/Produtos.jsx";
import Produto from "./components/Produto.jsx";
import Carrinho from "./components/Carrinho.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Commerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" aria-current="page" to="/">
                  Inicio
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/produtos">
                  Produtos
                </Link>
                <Link className="nav-link" to="/contato">
                  Contato
                </Link>

              </div>
              <Link className="navbar-text" to="/carrinho">
                Carrinho
            </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/produto" element={<Produto />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
