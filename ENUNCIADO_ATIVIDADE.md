# N2 — Exercício: Testes de API com Bruno e PokéAPI

**Disciplina:** Teste de Software  
**Modalidade:** Individual  
**Ferramenta:** Bruno CLI em projeto Node.js  
**API:** https://pokeapi.co/api/v2/

## Objetivo

Completar uma coleção de testes de API HTTP utilizando JavaScript e Bruno CLI. A atividade verifica sua capacidade de interpretar requisições e respostas, identificar códigos HTTP, conferir headers e validar estruturas e valores de um corpo JSON.

## Cenário

Você recebeu um projeto Node.js parcialmente preenchido. A coleção Bruno possui cinco requisições GET à PokéAPI. A primeira já apresenta testes completos e deverá ser usada como referência. As outras quatro contêm testes incompletos, sinalizados com comentários `TODO` e linhas que provocam falha intencional.

**Seu trabalho é completar os testes que faltam.** Não é necessário desenvolver uma API, instalar aplicativos globalmente ou usar privilégios administrativos.

## Parte A — Preparação

1. Extraia o projeto base e leia `README.md`.
2. No terminal aberto na pasta do projeto, execute `npm install`.
3. Execute `npm run test:exemplo` e examine `01-pikachu.bru`.
4. Execute `npm test` antes de editar os testes. Observe quais casos falham e por quê.

## Parte B — Implementação (obrigatória)

Complete os arquivos abaixo, substituindo **todos** os marcadores `TODO` por verificações reais usando `test()` e `expect()` do Bruno.

**Arquivo `02-bulbasaur.bru` — Dados de Pokémon:** verifique status 200 (já exemplificado), `id` igual a 1, `name` igual a `bulbasaur` e que `height` e `weight` são números positivos.

**Arquivo `03-paginacao.bru` — Lista paginada:** verifique status 200, que `results` é um array com exatamente 5 elementos e que `count`, `next` e `previous` existem com tipos adequados à resposta da API. Explique a função de `limit=5` e `offset=10`.

**Arquivo `04-nao-encontrado.bru` — Erro esperado:** verifique que um Pokémon inexistente retorna HTTP 404 e que a resposta não possui status 200. Um teste pode passar mesmo quando a resposta HTTP indica erro, desde que esse seja o comportamento esperado.

**Arquivo `05-habilidade.bru` — Status, header e JSON:** verifique status 200 (já exemplificado), que `Content-Type` contém `application/json`, que `id` vale 1 e que `name` é uma string não vazia.

**Importante:** apagar `throw new Error(...)` sem inserir assertivas não atende à atividade. Os testes devem detectar resultados incorretos.

## Parte C — Evidências e explicação

Depois de completar os testes:

1. Execute `npm test` e registre o resultado final.
2. Execute `npm run inspect` para visualizar status, headers e JSON.
3. Produza um **PDF curto** contendo: identificação; explicação do método HTTP utilizado; diferença entre status 200 e 404; distinção entre os headers `Accept` e `Content-Type`; explicação dos campos de paginação; e captura ou transcrição legível do resultado final da execução.
4. Informe quais testes foram concluídos e qualquer falha de rede ou indisponibilidade encontrada.

## Entrega no Microsoft Teams

Anexe **dois arquivos** na atividade correspondente:

- **ZIP do projeto final**, contendo os arquivos `.bru` editados, `package.json` e `README.md`. Não inclua `node_modules`.
- **PDF de evidências**, contendo as explicações e o resultado da execução.

Não serão considerados entregas por chat, e-mail ou anexadas em outra atividade. O código e a documentação devem ser individuais.

## Critérios de avaliação

Serão considerados a execução correta das requisições, a adequação das assertivas, o uso correto dos códigos de status e dos headers, a verificação da estrutura JSON, a compreensão da paginação e a clareza das evidências. **Testes sem assertivas reais não serão considerados concluídos**, mesmo que a execução não apresente falhas.

O acesso à PokéAPI depende da internet. Se houver indisponibilidade externa, registre o erro no PDF em vez de alterar os testes para simular resultados.
