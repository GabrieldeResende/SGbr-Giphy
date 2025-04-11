# Quasar App (sgbr-teste)

# 📸 Giphy Explorer

Este projeto é uma aplicação web desenvolvida com **Quasar 2** e **Vue 3 (Composition API)** que consome a API pública do [Giphy](https://developers.giphy.com/). O objetivo é permitir aos usuários **buscar, visualizar, favoritar e filtrar GIFs por categoria**, além de gerenciar seus favoritos de forma persistente usando o **LocalStorage**.

## 🧰 Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
- [Quasar Framework](https://quasar.dev/)
- [Pinia](https://pinia.vuejs.org/) para gerenciamento de estado global
- [Vue Router](https://router.vuejs.org/) para rotas
- [Axios](https://axios-http.com/) para requisições HTTP
- [LocalStorage](https://quasar.dev/quasar-plugins/web-storage) via plugin do Quasar
- [Tailwind CSS](https://tailwindcss.com/) para estilização adicional
- [Giphy](https://developers.giphy.com/)

## Install the dependencies

🔧 Instalação

> Pré-requisitos: Node.js (v16 ou superior) e npm/yarn instalados.

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/seu-projeto-giphy.git
cd seu-projeto-giphy

2. **Instale as dependências

npm install
# ou
yarn install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
