# Projeto Final - Sistema de Casa de Eventos com Docker

Este repositório contém o projeto "Sistema de Casa de Eventos", que foi conteinerizado usando Docker e Docker Compose para facilitar sua implantação e escalabilidade.

## Tecnologias Utilizadas

- **Frontend**: React, Vite
- **Backend**: Node.js
- **Dependências**:
  - React Router
  - Styled Components
  - Axios
  - React Toastify
  - Json Server

## Participantes do Projeto

- **Aluno 01**: Criou o componente de rotas e foi responsável pelo CSS.
- **Aluno 02**: Criou a página de login e o componente de cabeçalho.

## Instruções de Instalação

Para instalar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
<br>
   ```bash
   git clone https://github.com/viniciuscaol/projeto-final-scdocker.git
   cd projeto-final-scdocker
   ```

2. **Instale as dependências**:
<br>
    ```bash
    npm install
    ```

## Executar Docker a partir do Repositório

Para executar o contêiner da aplicação diretamente do repositório, siga as instruções abaixo:

1. **Baixe e execute o contêiner**:
<br>
    ```bash
    docker run -d -p 8080:5173 -p 3000:3000 viniciuscaol/projetofinalscdocker
    ```

- O parâmetro `-d` executa o contêiner em segundo plano (modo "detached").
- A porta `8080` no host será redirecionada para a porta `5173` do contêiner, que é onde o frontend está rodando.
- A porta `3000` do host será redirecionada para a mesma porta do contêiner, onde o backend está disponível.

2. **Acesse a aplicação**:
<br>
    - Frontend: http://localhost:8080
    - Backend: http://localhost:3000

Certifique-se de que o Docker esteja instalado e em execução no seu sistema antes de executar o comando.

## Docker
#### Dockerfile

O `Dockerfile` neste repositório foi criado para facilitar a conteinerização da aplicação.

**Como funciona**:

- O contêiner é baseado na imagem do Node.js.
- As dependências são instaladas e a aplicação é iniciada, incluindo o json-server.

#### Instruções para construir e rodar a aplicação com Docker
1. **Estrutura do** `Dockerfile`
<br>
    ```bash
    FROM node:20.5.1
    WORKDIR /usr/src/app
    COPY package*.json ./
    RUN npm install
    RUN npm install -g json-server
    COPY . .
    EXPOSE 5173
    EXPOSE 3000
    CMD ["sh", "-c", "npm run dev -- --host & json-server --watch eventos.json"]
    ```
2. **Construa a imagem Docker**:
<br>
    ```bash
    docker build -t projeto-final .
    ```

3. **Execute o contêiner**:
<br>
    ```bash
    docker run -p 5173:5173 -p 3000:3000 projeto-final
    ```

4. **Acesse a aplicação**:
<br>
    - Frontend: http://localhost:5173
    - Mock Server: http://localhost:3000

## Docker Compose
#### Instruções para usar Docker Compose

1. **Estrutura do** `docker-compose.yaml`
<br>
    ```yaml
    version: '3.8'
    services:
        frontend:
            build:
            context: .
            dockerfile: Dockerfile-front
            ports:
            - "8080:80"
            volumes:
            - .:/app

        backend:
            build:
            context: .
            dockerfile: Dockerfile-back
            volumes:
            - ./eventos.json:/data/eventos.json
            ports:
            - "3000:3000"
    ```
<br>

2. **Inicie os serviços**:
<br>
    ```bash
    docker compose up -d
    ```
<br>

3. **Acesse a aplicação**:
<br>
    - Frontend: http://localhost:8080
    - Backend: http://localhost:3000
<br>

4. **Parar os serviçoes**:
<br>
    ```bash
    docker compose down
    ```
<br>

[Readme Original](https://github.com/roofranklin/casa-de-eventos-react/blob/main/README.md)