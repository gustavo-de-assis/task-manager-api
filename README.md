# Task Manager Api

## Um api escrito em TypeScript utilizando arquitetura Node express

Este projeto é um exemplo de api Express utilizando design RestFul de arquitetura em camadas. Nele são realizadas comunicações com um banco de dados PostgreSQL, onde é permitido cadastrar, ler, atualizar e deletar linhas de uma tabela de tarefas(Task)

### O projeto foi criado utilizando as seguintes tecnologias:

*NodeJs - Utilizando Express, foi implementado uma arquitetura em camadas, com Rotas, Controladores, Serviços e Repositórios</br>
*TypeScript - JavaScript com superpoderes </br>
*Banco de Dados Postgres
*Modelagem e acesso ao banco através da ORM Prisma.

## Rodando o Projeto

Para executar o projeto em sua máquina, basta seguir os seguintes passos: <br>

1. Faça o clone deste repositório em sua máquina, através do comando:

```shell
git clone https://github.com/gustavo-de-assis/task-manager-api/
```

2. Abra o diretório do projeto em seu terminal ou no seu editor favorito. 
3. Execute o comando ``` npm install ``` para instalação das dependências do projeto.
4. Faça uma cópia do arquivo .env.example, renomeando para .env e configure as variáveis de ambiente para o acesso ao banco de dados Postgres em sua máquina.
5. Execute o comando ``` npx prisma migrate dev ``` para a criação do banco de dados e modelagem.
6. Após finalizado, execute o comando ```npm run dev``` para execução da api.

Caso deseje testar as rotas, você pode utilizar o Postman, ThunderClient ou semelhantes, configurando as rotas de acesso de acordo com endpoints disponíveis no arquivo de rota.
Para tal, configure o url padrão para: *http://localhost:4000* e configure as seguintes rotas:

*GET {urlPadrão}/tasks - recebe as tarefas do banco de dados <br>
*POST{urlPadrão}/tasks - envia um objeto para o banco, no formato {title, description, deadline} (ambos não vazios ou nulos, e deadline não no passado} <br>
*PUT{urlPadrão}/tasks/id - atualiza informações da tarefa com id fornecido {deadline não no passado} <br>
*DELETE{urlPadrão}/tasks/id - deleta a tarefa com id fornecido <br>

Você pode também seguir as instruções do repositório da aplicação web que utiliza esta api para alimentá-la em:

*https://github.com/gustavo-de-assis/task-manager-app/*
