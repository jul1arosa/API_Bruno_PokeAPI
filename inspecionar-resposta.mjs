const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
try {
  const resposta = await fetch(url, { headers: { Accept: 'application/json' } });
  console.log('URL:', url);
  console.log('STATUS:', resposta.status, resposta.statusText);
  console.log('HEADERS:');
  for (const [nome, valor] of resposta.headers) console.log(`  ${nome}: ${valor}`);
  const body = await resposta.json();
  console.log('BODY (resumo JSON):', JSON.stringify({ id: body.id, name: body.name, types: body.types }, null, 2));
} catch (erro) {
  console.error('Falha na requisicao externa:', erro.message);
  process.exitCode = 1;
}
