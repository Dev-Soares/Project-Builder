<h1 align="center">
  <br>
  🏗️ <br>
  ProjectBuilder
  <br>
</h1>

<h4 align="center">Visualize, Modele e Gere a Arquitetura do seu Sistema.</h4>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-api-docs">Documentação API</a> •
  <a href="#-autor">Autor</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success.svg?style=flat-square&color=2E8B57" alt="Status">
  <img src="https://img.shields.io/badge/react-v19-blue?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/node-v20-green?style=flat-square&logo=nodedotjs" alt="Node">
  <img src="https://img.shields.io/badge/docker-compose-blue?style=flat-square&logo=docker" alt="Docker">
  <img src="https://img.shields.io/badge/postgres-15-336791?style=flat-square&logo=postgresql" alt="Postgres">
  <img src="https://img.shields.io/badge/license-ISC-lightgrey?style=flat-square" alt="License">
</p>

<br>

## 🔖 Sobre

O **ProjectBuilder** é uma ferramenta visual interativa projetada para desenvolvedores e arquitetos de software. Ela permite criar diagramas de infraestrutura e arquitetura de sistemas utilizando uma interface "Drag & Drop" intuitiva.

Diferente de ferramentas de desenho genéricas, o ProjectBuilder é focado em tech, oferecendo uma biblioteca vasta de ícones reais (AWS, Azure, Linguagens, Frameworks) e permitindo salvar e compartilhar projetos através de links únicos, sem a barreira de login obrigatório.

---

## ✨ Features

* **🎨 Modelagem Visual (Drag & Drop):** Construa diagramas complexos arrastando nós em um canvas infinito (powered by `@xyflow/react`).
* **💾 Persistência de Dados:** Salve seus diagramas e recupere-os posteriormente via ID único.
* **🔗 Compartilhamento:** Gere links de acesso para compartilhar a arquitetura com seu time.
* **📚 Biblioteca Rica:** Centenas de ícones categorizados (Cloud, DevTools, Bancos de Dados, Linguagens).
* **🎓 Tutorial Interativo:** Sistema de onboarding integrado (`intro.js`) para novos usuários.
* **📱 Responsivo:** Interface adaptável para Desktop e Mobile.

---

## 🚀 Tech Stack

O projeto utiliza o que há de mais moderno no ecossistema JavaScript/TypeScript.

### Frontend
| Tecnologia | Descrição |
| :--- | :--- |
| **React 19** | Biblioteca core para UI. |
| **Vite** | Build tool de altíssima performance. |
| **Tailwind CSS v4** | Estilização utility-first de última geração. |
| **React Flow (@xyflow)** | Engine para construção de diagramas baseados em nós. |
| **Axios** | Cliente HTTP para comunicação com a API. |
| **React Hot Toast** | Notificações toast elegantes. |

### Backend
| Tecnologia | Descrição |
| :--- | :--- |
| **Node.js v20** | Runtime JavaScript no servidor. |
| **Express** | Framework web rápido e minimalista. |
| **Prisma ORM** | ORM moderno para interação com o banco de dados. |
| **PostgreSQL** | Banco de dados relacional robusto. |
| **Swagger** | Documentação automática da API. |
| **JWT** | Gestão de tokens de acesso para compartilhamento seguro. |

### Infraestrutura & DevOps
* **Docker & Docker Compose:** Orquestração completa do ambiente (Frontend, Backend e Banco de Dados).

---

## 🐳 Como Executar (Docker)

A maneira mais fácil de rodar o projeto é utilizando Docker, pois ele configura automaticamente o banco de dados, o backend e o frontend.

### Pré-requisitos
* Docker e Docker Compose instalados.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/bernardosoares30/project-builder.git](https://github.com/bernardosoares30/project-builder.git)
    cd project-builder
    ```

2.  **Configure as Variáveis de Ambiente:**
    Crie o arquivo `.env` na pasta `backend` baseando-se no `.env.example`:
    ```bash
    # Exemplo para backend/.env
    DB_USER=postgres
    DB_PASSWORD=postgres
    DB_NAME=projectbuilder
    JWT_SECRET=sua_chave_secreta_aqui
    # A URL é montada automaticamente pelo Docker Compose, mas para referência:
    # DATABASE_URL="postgresql://postgres:postgres@db:5432/projectbuilder?schema=public"
    ```

3.  **Suba os Containers:**
    Na raiz do projeto (onde está o `docker-compose.yml` principal ou nas pastas respectivas se separado), execute:
    ```bash
    docker-compose up --build
    ```

4.  **Acesse a Aplicação:**
    * **Frontend:** `http://localhost:5173`
    * **Backend API:** `http://localhost:3000`
    * **Swagger Docs:** `http://localhost:3000/api-docs`

---

## 🔌 API Endpoints

A documentação completa pode ser visualizada via Swagger em `/api-docs`. Abaixo, as principais rotas:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/diagram/create-diagram` | Cria um novo diagrama e retorna o ID. |
| `GET` | `/api/diagram/:id` | Retorna os dados (nós e arestas) de um diagrama. |
| `PUT` | `/api/diagram/save-diagram/:id` | Atualiza a estrutura de um diagrama existente. |
| `DELETE`| `/api/diagram/delete-diagram/:id` | Remove um diagrama. |
| `POST` | `/api/diagram/generate-token/:id` | Gera token de acesso temporário. |

---

## 📂 Estrutura do Projeto

```text
ProjectBuilder/
├── backend/
│   ├── src/
│   │   ├── controllers/   # Lógica das rotas
│   │   ├── services/      # Regras de negócio e chamadas ao DB
│   │   ├── routes/        # Definição de endpoints
│   │   └── prisma/        # Schemas e Migrations do DB
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/    # Componentes React modulares
│   │   │   ├── diagramComponents/ # Lógica do React Flow
│   │   │   └── ...
│   │   ├── contexts/      # Context API (Diagram, Alert)
│   │   ├── hooks/         # Hooks customizados
│   │   └── pages/         # Roteamento
│   └── Dockerfile
└── docker-compose.yml     # Orquestração dos serviços
