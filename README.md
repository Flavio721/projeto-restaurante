<h1 align="center">Welcome to restaurante 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/restaurante" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/restaurante.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/flavio" target="_blank">
    <img alt="Twitter: flavio" src="https://img.shields.io/twitter/follow/flavio.svg?style=social" />
  </a>
</p>

> Projeto de um site para restaurante com node.js

## Tecnologias utilizadas

backend: 
  - Nodejs
  - Express
  - Prisma ORM
  - PostgreSQL
  - dotenv
frontend:
  - HTML
  - CSS
  - JavaScript


## Estrutura do projeto:
projeto-restaurante/
│
├── backend/
│   ├── src/
│   │   ├── routes/              # Rotas da API
│   │   ├── controllers/         # Lógica das requisições
│   │   ├── middlewares/         # Middlewares (auth, validações, etc.)
│   │   ├── services/            # Regras de negócio (opcional, mas recomendado)
│   │   └── prisma/              # Prisma schema e client
│   │       └── schema.prisma
│   │
│   ├── app.js                   # Configuração do Express
│   ├── server.js                # Inicialização do servidor (listen)
│   └── package.json             # Dependências do backend
│
├── frontend/
│   ├── pages/                   # Páginas HTML
│   ├── public/                  # CSS, JS, imagens
│   └── index.html               # Página inicial
│
├── .gitignore
├── .env                         # Variáveis de ambiente (ignorado)
├── README.md
└── package-lock.json

## Configuração do ambiente
1- Clonar repositórito:
  <code>git clone https://github.com/Flavio721/projeto-restaurante.git</code>
  <code>cd projeto-restaurante</code>

2- Instalar dependências:
  <code>npm install</code>

3- Configurar váriaveis do ambiente 
  Crie um arquivo .env na raíz do projeto:
    DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
    PORT=3000

4- Configurar banco de dados:
  <code>npx prisma generate</code>
  <code>npx prisma migrate dev</code>

5- Rodar o projeto:
  <code>node backend/server.js</code>

## Rotas principais
  - GET / -> Página inicial
  - POST /register -> Cadastrar novo admin
  - POST /login -> Entrar como admin
  - POST /create -> Criar nova reserva
  - POST /delete -> Cancelar reserva
  - POST /createPrato -> Criar novo prato (Necessário o login como admin)
  - GET /search -> Envia todas as reservas marcadas

## Segurança
- Variáveis sensíveis são armazenadas em .env
- node_modules, .env e pastas geradas pelo Prisma são ignoradas 
- Middlewares controlam acesso a páginas protegidas

  
## Autor
👤 **Flávio**

* Twitter: [@flavio](https://twitter.com/flavio)
* Github: [@Flavio721](https://github.com/Flavio721)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_