import { useState } from "react";
import { supabase } from "/src/assets/supabase.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, SetEmail] = useState("");
  const [senha, SetSenha] = useState("");
  const navigate = useNavigate();

  const goCadastro = () => {
    navigate("/cadastro");
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password: senha,
    });

    if (error) {
      alert("Erro no login: " + error.message);
      return;
    }

    alert("Login realizado com sucesso!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex place-items-center container mx-auto p-4 max-lg:flex-col">
    <div className="p-6 w-full max-w-2xl h-[500px] mt-20 mb-5 bg-white rounded-xl shadow-lg">
      
      <h2 className="flex justify-center text-2xl font-bold uppercase mb-5">Entrar</h2>
      <div className="flex uppercase mb-5 justify-center text-sm">Entre com seu email e senha para continuar</div>
      <input
        type="email"
        placeholder="E-mail"
        className="border p-2 w-full mb-3"
        value={email}
        onChange={(e) => SetEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="border p-2 w-full mb-2"
        value={senha}
        onChange={(e) => SetSenha(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-black font-bold text-white px-4 py-2 rounded-sm w-full uppercase mt-2 cursor-pointer">
        Entrar
      </button>
    </div>
    <div className="p-6 w-full max-w-xl mx-auto h-[300px] mt-10 mb-20 bg-white shadow-lg  rounded-xl text-center">
        <p className="uppercase text-2xl font-serif mb-2">quero me cadastrar</p>
        <span className="text-xl font-serif">Em apenas um passo, crie uma conta e finalize sua compra</span>
        <br/>
        <span className="text-xl font-serif">Ainda não tem conta?</span>
        <br/>
        <button onClick={goCadastro} className="text-xl font-serif bg-black text-white rounded-sm p-1 mt-5 w-full uppercase cursor-pointer">
          Cadastre-se em nossa Loja
        </button>
      </div>
    </div>
  );
}
