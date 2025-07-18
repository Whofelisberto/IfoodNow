import { useState } from "react";
import { supabase } from "/src/assets/supabase.js";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [nome, SetNome] = useState("");
  const [email, SetEmail] = useState("");
  const [senha, SetSenha] = useState("");
  const [endereco, SetEndereco] = useState("");
  const [dataNascimento, SetDataNascimento] = useState("");
  const navigate = useNavigate();


   const handleSubmit = async (e) => {
    e.preventDefault();

     if (!nome || !email || !senha) {
    alert("Preencha todos os campos, por favor!");
  }

    const { error } = await supabase.from("usuarios").insert([
      {
        nome,
        endereco,
        email,
        data_nascimento: dataNascimento,
      },
    ]);
    
    if (error) {
      console.error("Erro ao cadastrar:", error);
      setMensagem("Erro ao cadastrar. Tente novamente.");
    } else {
      alert("Usuário cadastrado com sucesso!");
       navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex">
    <div className="place-items-center p-6 w-full max-w-2xl h-[600px] mx-auto mt-20 mb-20 bg-white shadow-lg rounded-xl">
      
      <h2 className="text-2xl font-bold mb-10 uppercase">Dados Pessoais</h2>

       <div className="flex gap-10">
       <div className="flex-col w-full gap-2">
        <label className="w-full">Nome *</label>
      <input 
      type="text"
      placeholder="Nome"
      required
      className="border p-2 w-full mb-5"
      value={nome}
      onChange={(e) => SetNome(e.target.value)}
      />
      </div>

      <div className="flex-col w-full">
      <label className="w-full uppercase">data de nascimento *</label>
      <input 
      type="date"
      className="border p-2 w-full mb-5 uppercase"
      value={dataNascimento}
      onChange={(e) => SetDataNascimento (e.target.value)}
      />
      </div>
      </div>
 
       <div className="flex-col w-full">
      <label className="uppercase">e-mail *</label>
      <input
        type="email"
        placeholder="Email"
        required
        className="border p-2 w-full mb-5"
        value={email}
        onChange={(e) => SetEmail(e.target.value)}
      />
      </div> 

      <div className="flex-col w-full">
      <label className="uppercase">Senha *</label>
      <input
        type="password"
        placeholder="Senha"
        required
        className="border p-2 w-full mb-5"
        value={senha}
        onChange={(e) => SetSenha(e.target.value)}
      />
      </div>

      <div className="flex-col w-full">
      <label className="uppercase">Endereço *</label>
     <input 
     type="text"
     placeholder="Endereço"
     className="border p-2 w-full mb-10"
     value={endereco}
     onChange={(e) => SetEndereco (e.target.value)}
     />
     </div>
      <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded-sm w-full uppercase font-bold">
        Cadastrar
      </button>
    </div>
    </div>
  );
}
