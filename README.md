# 🍔 IfoodNow

Aplicativo de delivery simples e funcional feito com **React**, **Tailwind CSS** e **Supabase**. O projeto simula uma plataforma de pedidos com carrinho de compras, autenticação de usuários e integração com banco de dados.

---

## 📦 Tecnologias Utilizadas

- ⚛️ **React** — SPA com rotas e hooks modernos (`useContext`, `useState`,)
- 🎨 **Tailwind CSS** — Estilização rápida e responsiva
- 🔐 **Firebase Auth** — Cadastro/Login de usuários
- 🛢️ **Supabase** — Backend com banco de dados
- 🛒 **useContext (CartContext)** — Gerenciamento do carrinho

---

# Clone o projeto:

git clone https://github.com/Whofelisberto/IfoodNow.git 
/cd IfoodNow

---

# Instale as dependências:

npm install

---

# Configure as variáveis de ambiente:

### - Crie um arquivo .env na raiz com:

VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...

---

# Rode o projeto:

npm run dev

---

## 📁 Estrutura de Pastas

```bash
├── public/
├── src/
│   ├── assets/              # Supabase config
│   ├── components/          # Header, Footer, Cards, etc.
│   ├── contexts/            # CartContext (gerencia carrinho)
│   ├── pages/               # Home, Login, Cadastro, Carrinho
│   ├── App.jsx              # Rotas principais
│   └── main.jsx             # Entry point da aplicação
├── .env                    # Variáveis de ambiente
├── package.json
└── vite.config.js



