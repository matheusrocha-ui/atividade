# Gerenciador de Compromissos 

Escolhi usar uma separação em camadas parecida com o que foi pedido no trabalho, porque isso deixa o código mais organizado e mais fácil de entender. Cada parte fica responsável pela sua função: a parte de dados, a parte que fala com o usuário (CLI/API) e a parte das regras de negócio. Isso ajuda bastante quando precisa arrumar algo depois.

No meu caso, eu trabalhei com compromissos. A CLI ou a API chamam o serviço, que por sua vez usa o repositório para salvar e listar os dados no SQLite.

---

## Estrutura do projeto

```
src/
 ├── adapters/
 │     ├── cli/
 │     │     cli.ts
 │     └── rest/
 │           server.ts
 ├── core/
 │     schedulerService.ts
 ├── domain/
 │     appointment.ts
 └── infra/
       appointmentRepo.ts
       db.ts

package.json
tsconfig.json
README.md
tarefas.db (gerado automaticamente)
```

---

## Como instalar

Abra a pasta no VS Code.
No terminal, rode:

```
npm install
npm install typescript ts-node --save-dev
npm install better-sqlite3
```

O tsconfig já está no projeto, mas caso precise:

```
npx tsc --init
```

---

## Como executar (CLI)

### Listar compromissos:

```
npx ts-node src/adapters/cli/cli.ts listar
```

### Adicionar compromisso:

```
npx ts-node src/adapters/cli/cli.ts add 10/10/2024 08:00 09:00 "Reunião"
```

---

## Como executar (API REST)

Rodar o servidor:

```
npx ts-node src/adapters/rest/server.ts
```

A API inicia na porta **3000**.

### GET

```
/compromissos
```

### POST (JSON)

```json
{
  "data": "10/10/2024",
  "hora_inicio": "08:00",
  "hora_fim": "09:00",
  "descricao": "Reunião"
}
```

---

## O que o sistema faz

O programa deixa cadastrar compromissos com data e hora e também listar todos os cadastrados.
Se tentar cadastrar um compromisso que bate com o horário de outro, ele avisa que está ocupado.

Ele usa SQLite para guardar os dados.

---

