import chef from "/src/assets/chef.png";
import { comidas } from "../assets/comidas";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const Content = () => {
  const { adicionarAoCarrinho } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <section className="container mx-auto p-2 mb-10 mt-10">
        <div className="bg-red-100 w-full h-80 rounded-3xl max-sm:h-60">
          <div className="md:grid grid-cols-2 ">
            <div className="mx-auto p-10">
              <h1 className="text-3xl font-semibold max-sm:text-sm">
                As melhores comidas é Aqui!
              </h1>
              <p className="mt-3 max-sm:text-sm">
                Bateu a fome? Peça agora no IfoodNow e receba comidas
                quentinhas, rápidas e irresistíveis direto na sua porta! 🍔🚀
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                className="hidden lg:block object-cover relative left-50 w-56"
                src={chef}
                alt="Chef"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-semibold">Refeições</h2>
          <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
            {comidas.map((comida) => (
              <div
                key={comida.id}
                className="grid justify-center text-center mt-5 p-1"
              >
                <img
                  className="rounded-xl w-120 h-50 "
                  src={comida.image}
                  alt={comida.name}
                />
                <h3 className="font-semibold italic mt-2">{comida.name}</h3>
                <p className="text-sm italic">R$ {comida.preco.toFixed(2)}</p>
                <button
                  className="cursor-pointer mt-2 bg-red-200 px-3 py-1 rounded font-sans text-sm italic"
                  onClick={() => {
                    adicionarAoCarrinho(comida);
                    navigate("/carrinho");
                  }}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;