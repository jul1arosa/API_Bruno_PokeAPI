# Atividade — Testes de API com Bruno CLI e PokéAPI

Este projeto é entregue **semi preenchido**. O arquivo `01-pikachu.bru` contém um exemplo completo; os arquivos `02` a `05` contêm testes incompletos que você deverá finalizar. **Não há resolução incluída**.

## Pré-requisitos

- Node.js e npm previamente disponíveis no computador (recomendado Node.js 20+).
- Internet para instalar as dependências e consultar a PokéAPI.
- Terminal do VS Code, PowerShell ou CMD.
- Permissão de escrita em sua pasta de usuário. **Não utilize o modo administrador nem instalação global.**

## 1. Abrir e instalar

1. Extraia o ZIP em sua pasta de documentos.
2. Abra a pasta `N2_E_API_Bruno_PokeAPI_Base` no VS Code.
3. Abra o terminal dentro dela e confirme: `node --version` e `npm --version`.
4. Instale as dependências **somente nesta pasta**:

```bash
npm install
```

O pacote `@usebruno/cli` será instalado em `node_modules/`. Você não precisa instalar Bruno Desktop e não deve executar `npm install -g`.

## 2. Rodar o exemplo que já está resolvido

```bash
npm run test:exemplo
```

Abra `colecao-pokeapi/01-pikachu.bru` e identifique:
- `get {}`: URL da requisição.
- `headers {}`: header `Accept` enviado.
- `tests {}`: testes JavaScript com `test()` e `expect()`.
- `res.getStatus()`: status HTTP recebido.
- `res.getHeader('content-type')`: cabeçalho recebido.
- `res.getBody()`: JSON retornado convertido em objeto.

## 3. Arquivos a completar

| Arquivo | Objetivo | O que falta |
| --- | --- | --- |
| `02-bulbasaur.bru` | Verificar dados do Pokémon | ID, nome, altura e peso |
| `03-paginacao.bru` | Verificar resposta paginada | Status, 5 resultados, metadados |
| `04-nao-encontrado.bru` | Testar erro esperado | Status 404 e assert negativo |
| `05-habilidade.bru` | Verificar outro recurso | `Content-Type`, ID e nome |

**Substitua** cada linha `throw new Error('TODO: ...')` por assertivas reais. Não basta apagar essas linhas: o teste precisa comparar o resultado observado com o esperado. Preserve o teste completo do Pikachu para referência.

## 4. Executar todos os testes

```bash
npm test
```

**É normal haver falhas inicialmente**, porque os exercícios possuem marcadores `TODO` que falham intencionalmente. Ao finalizar a implementação, a suíte deverá passar, desde que a API esteja acessível.

Um retorno HTTP **404 pode ser correto** no teste de recurso inexistente. O importante é que o teste espere 404, e não 200.

## 5. Consultar a resposta (status, headers, body)

```bash
npm run inspect
```

O script `inspecionar-resposta.mjs` mostra status, headers e uma parte do JSON no terminal. Você também pode usar Bruno Desktop caso ele já esteja disponível, mas não é necessário para concluir a atividade.

## 6. Comandos e dicas

- `npm run bruno:version`: mostra a versão da CLI local.
- `npm test`: executa toda a coleção.
- `npm run test:exemplo`: executa somente o exemplo pronto.
- `npm run inspect`: inspeciona resposta HTTP no terminal.
- Caso tenha erro de rede, confira o acesso à `https://pokeapi.co/api/v2/pokemon/pikachu` e ao npm.
- Se os testes falharem por indisponibilidade da API, documente o problema e registre a mensagem; não falsifique resultados.

## 7. Entrega

Siga o **ENUNCIADO_ATIVIDADE.md**. Envie ao Teams um ZIP contendo a coleção `.bru` editada e o relatório PDF solicitado. Não inclua `node_modules` nem informações pessoais ou credenciais.
