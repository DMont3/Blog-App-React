# Blog App - React + Vite

Aplicação React que consome dados da API JSON Placeholder para exibir posts e seus autores.

## Funcionalidades

- Listagem de posts com paginação
- Busca de posts por título
- Visualização de detalhes do post em modal
- Exibição do autor do post
- Interface responsiva e moderna

## Tecnologias Utilizadas

- React
- Vite
- React Router
- Material-UI
- Axios

## Pré-requisitos

- Node.js e npm instalados

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/DMont3/teste-daniel
```

2. Navegue até o diretório do projeto:
```bash
cd teste-daniel
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse no navegador:
```
http://localhost:PORTA
```
   *Nota: A `PORTA` padrão geralmente é 5173, mas pode variar dependendo da configuração do Vite.*

## Estrutura do Projeto

```
src/
├── components/
│   ├── PostCard.jsx
│   ├── PostDetailsModal.jsx
│   └── PostList.jsx
├── pages/
│   └── HomePage.jsx
├── services/
│   └── api.js
├── App.jsx
├── index.css
└── main.jsx
```
