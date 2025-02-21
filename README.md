<h1 align="center">API de Cadastro de Usuários com Sistema de Ranking de Conversões</h1>

Este projeto é uma API desenvolvida em Node.js com TypeScript, utilizando o framework Fastify. Ela possibilita o cadastro de usuários e gera um link de compartilhamento único para cada um. A API monitora os cliques nesses links e calcula quantos novos cadastros foram gerados a partir deles. Além disso, há um sistema de ranking que exibe os três principais usuários com mais conversões.

## 🛠️ Tecnologias Utilizadas

- **Node.js + TypeScript**: Ambiente de execução e linguagem principal.
- **Fastify**: Framework rápido e eficiente para construção de APIs.
- **Drizzle ORM**: Integração com PostgreSQL para gerenciamento de banco de dados.
- **Redis**: Armazenamento de cliques e ranking.
- **Zod**: Validação de dados.
- **Swagger**: Documentação da API.
- **Docker + Docker Compose**: Gerenciamento dos serviços de PostgreSQL e Redis.
- 
## 🚀 Instalação e Execução

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/wmsalves/nlw-connect/
   cd nlw-connect
2. Instale as dependências com npm:

   ```bash
   npm install
3. Suba os serviços do PostgreSQL e Redis com Docker Compose:

   ```bash
   docker-compose up -d
4. Inicie o projeto em modo de desenvolvimento:

   ```bash
   npm run dev

## 🛣️ Endpoints da API

### Cadastro de Novo Usuário
- **POST** `/subscribers`
  - Registra um novo usuário no sistema.

### Compartilhamento de Link e Ações
- **GET** `/invites/:subscriberId`
  - Gera um link exclusivo para compartilhamento de um usuário.

### Rankings Personalizados
- **GET** `/subscribers/:subscriberId/ranking/clicks`
  - Exibe o número de cliques no link gerado para o usuário.

- **GET** `/subscribers/:subscriberId/ranking/count`
  - Exibe a quantidade de cadastros convertidos a partir do link do usuário.

- **GET** `/subscribers/:subscriberId/ranking/position`
  - Mostra a posição do usuário no ranking geral.

### Ranking Global
- **GET** `/ranking`
  - Retorna os três principais usuários com mais conversões.

## 📚 Guia da API

A API possui uma documentação gerada automaticamente pelo **Swagger**. Para visualizá-la, basta iniciar a API e acessar:

http://localhost:3330/docs

As seções disponíveis na documentação são:
- **Usuário**
- **Link de Referência**
- **Dados de Referência**
- **Posições no Ranking**

