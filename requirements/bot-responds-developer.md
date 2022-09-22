## Bot responde desenvolvedor

> ## Caso de sucesso

1. Bot responde desenvolvedor com resposta "Olá <nome_do_dev>, bom <dia><tarde><noite>"
2. Bot pergunta ao desenvolvedor qual vaga ele deseja procurar
3. Bot informa ao desenvolvedor que está buscando o que ele procura
4. Bot realiza busca e, ao encontrar, responde a desenvolvedor se ele deseja salvar no sql ou não

> ## Requerimentos do sistema

1. Sistema deve implementar comunicação com o bot do Telegram;
2. Sistema deve buscar no JSON da conversa o nome do DEV e o saudar conforme hora do dia;
3. Sistema deve ter um mecanismo de busca de vagas, via Crawler ou outra API que forneça vagas;

> ## Exceção - Bot não encontrou vaga

1. Bot informa que vagas não foram encontradas e pergunta se pode ajudar com algo mais;
2. Bot deve recomeçar a conversa;
