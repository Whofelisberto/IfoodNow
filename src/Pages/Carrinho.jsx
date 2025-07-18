import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { supabase } from "/src/assets/supabase.js";

export default function Carrinho() {
  const { carrinho, removerDoCarrinho, limparCarrinho } = useCart();
  const navigate = useNavigate();

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.qtd, 0);

  const finalizarPedido = async () => {

   const user = supabase.auth.getUser(); // garante que está logado

  const { data: userData, error: userError } = await user;
  if (userError || !userData.user) {
    alert("Você precisa estar logado para fazer um pedido.");
    return;
  }

  const { error } = await supabase.from("pedidos").insert([
    {
      usuario_id: userData.user.id,
      produtos: carrinho,
      total: total,
    },
  ]);

  if (error) {
    console.error("Erro ao salvar pedido:", error);
    alert("Erro ao finalizar pedido.");
  } else {
    alert("Pedido salvo com sucesso!");
  }

    alert("Pedido finalizado com sucesso! Total: R$ " + total.toFixed(2));
    limparCarrinho();
    navigate("/")
  };

  if (carrinho.length === 0) {
    return <p className="p-6 min-h-screen w-full text-center">Seu carrinho está vazio.</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto min-h-screen mt-20">
      <div className="shadow-lg p-5 h-[400px]">
      <h2 className="text-2xl font-bold mb-4 ">Seu Carrinho</h2>
      <ul>
        {carrinho.map((item) => (
          <li key={item.id} className="mb-2 border p-3 rounded flex justify-between">
            <div>
              <p className="font-semibold">{item.nome}</p>
              <p className="text-sm">
                Qtd: {item.qtd} x R$ {item.preco.toFixed(2)}
              </p>
            </div>
            <button
              className="text-red-600"
              onClick={() => removerDoCarrinho(item.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold mt-4">Total: R$ {total.toFixed(2)}</h3>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
        onClick={finalizarPedido}
      >
        Finalizar Pedido
      </button>
      <p className="uppercase mt-20 font-mono text-lg"><span className="font-semibold">OBS</span>: entregas podem demorar a partir de 60 minutos devido a grande demanda de pedidos!!</p>
      </div>
    </div>
  );
}
