# Gerenciador de Tarefas / Compromissos

Esse projeto foi feito para o trabalho da matéria. A ideia é ter um sisteminha simples que guarda compromissos no banco SQLite e deixa listar e adicionar coisas.
Tentei seguir o que foi pedido no PDF, como separar em camadas e usar TypeScript, mas deixei tudo o mais simples possível para eu mesmo conseguir entender depois.

## O que o sistema faz

* Lista compromissos
* Adiciona um compromisso com data e hora
* Não deixa colocar horário que bate com outro
* Tem uma CLI e também uma API REST básica

## Como eu organizei o projeto

Segui mais ou menos o modelo que o professor colocou:

src/
  adapters/
    cli/
    rest/
  core/
  domain/
  infra/

* *adapters* → onde conversa com usuário (CLI) ou API
* *core* → regras do sistema
* *domain* → só o modelo dos dados
* *infra* → banco SQLite

## Como rodar

Primeiro instala as dependências:

npm install

## Usando a CLI

### Listar compromissos:

npx ts-node src/adapters/cli/cli.ts listar

### Adicionar:

npx ts-node src/adapters/cli/cli.ts add 25/12/2024 10:00 11:00 "Reunião"

O formato é:

data hora_inicio hora_fim descrição

## API REST

Se quiser usar com API também dá.

### Rodar o servidor:

npx ts-node src/adapters/rest/server.ts

Ele inicia na porta 3000.

### Endpoints:

**GET /compromissos**
Retorna todos os compromissos

**POST /compromissos**

Json exemplo:

json
{
  "data": "25/12/2024",
  "hora_inicio": "10:00",
  "hora_fim": "11:00",
  "descricao": "Reunião"
}