import { h1 } from "framer-motion/client";
import { useState, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("u");
  const [password, setPassword] = useState("p");
  const [response, setResponse] = useState(null);
  const [responseID, setResponseID] = useState(null);

  const [regist, setRegist] = useState(0);

  // Estado para armazenar a resposta
  const submit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    console.log("123");
    console.log("123");
    if (regist == 0) {
      try {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, password: password }),
        });
        const data = await res.json(); // Converte a resposta para JSON
        setResponse(data.message);
        setResponseID(data.user.id) 
        localStorage.setItem("userID", data.user.id)// Armazena a resposta no estado
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      const data = await res.text();
      setResponse(data); // Armazena a resposta no estado
      console.log(data);
    }
  };

  /*
  useEffect(() => 
    {
        const fetchData = async () => {
            try {
              const response = (await fetch('http://localhost:3000/')).text();
         
              console.log(response);
              setResp(response);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []);
*/
  return (
    <div className="container-fluid-login padding-auto">
      {regist == 0 ? <h1>Login</h1> : <h1>Registrar</h1>}
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Usuário
          </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            className="form-control"
            id="username"
            name="username"
            required
            placeholder="digite o nome de usuário"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Senha
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            placeholder="digite a senha"
          />
        </div>

        <button
          type="submit"
          className="btn-login"
          onClick={() => {
            submit;
          }}
        >
          Enviar
        </button>
      </form>
      {regist == 0 ? (
        <div>
          Não tem uma conta?{" "}
          <button className="btn-reg"
            onClick={() => {
              setRegist(1);
            }}
          >
            registre-se
          </button>
        </div>
      ) : (
        <div>
          Já tem uma conta?{" "}
          <button className="btn-reg"
            onClick={() => {
              setRegist(0);
            }}
          >
            entrar
          </button>
        </div>
      )}
      {response && <div className="response">{response}</div>}{" "}
      {/* Exibe a resposta */}
    </div>
  );
}

export default Login;
