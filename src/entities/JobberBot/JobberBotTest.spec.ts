/**
 * 1. Bot responde desenvolvedor com resposta
 * "Olá <nome_do_dev>, bom <dia><tarde><noite>"
 *
 * 2. Bot pergunta ao desenvolvedor qual vaga ele deseja procurar
 *
 * 3. Bot informa ao desenvolvedor que está buscando o que ele procura
 *
 * 4. Bot realiza busca e, ao encontrar, responde a desenvolvedor se ele deseja salvar no sql ou não
 */

import { BotApiConfig } from '../../infra/config/BotApiConfig';
import { DeveloperSpy } from '../Developer/Developer.spec';
import { IJobberBot } from './IJobberBot';
import { Telegraf, Telegram } from 'telegraf';

class JobberBotSpy implements IJobberBot {
	constructor(
		private readonly developer: IDeveloper,
		private readonly apiToken: BotApiConfig,
	) {}
	greetsByHour(): string | Telegram {
		throw new Error('Method not implemented.');
	}

	getToken(): BotApiConfig {
		return this.apiToken;
	}

	greets() {
		return `Olá ${this.developer.getDeveloperName()}, ${this.greetingsByHour()}`;
	}

	greetingsByHour(): string {
		const hour = new Date().getHours();

		if (hour > 18) return 'boa noite';

		if (hour >= 12 || hour <= 18) return 'boa tarde';

		return 'bom dia';
	}

	jobAsk(): string {
		return 'Qual vaga você deseja procurar?';
	}

	tellToWait(): string {
		return 'Ok, estou procurando pra você';
	}
}

type SutTypes = {
	sut: JobberBotSpy;
	developer: DeveloperSpy;
	apiToken: BotApiConfig;
};

const sutFactory = (): SutTypes => {
	const developer = new DeveloperSpy('Allan', 'Chat1');
	const apiToken = new BotApiConfig();
	const sut = new JobberBotSpy(developer, apiToken);
	// const crawler = new CrawlerSpy(sut);

	return { sut, developer, apiToken };
};

describe('JobberBot', () => {
	it('Should greets developer with a message', () => {
		const { developer, sut } = sutFactory();
		expect(sut.greets()).toBe(
			`Olá ${developer.getDeveloperName()}, ${sut.greetingsByHour()}`,
		);
	});

	it('Should ask what job the developer wants', () => {
		const { sut } = sutFactory();
		expect(sut.jobAsk()).toBe('Qual vaga você deseja procurar?');
	});

	it('Should tell developer its looking for what developer wants', () => {
		const { sut } = sutFactory();
		expect(sut.tellToWait()).toBe('Ok, estou procurando pra você');
	});

	it('Should return a instance of telegraf', async () => {
		const { apiToken } = sutFactory();
		const telegraf = apiToken.init();

		expect(telegraf).toBeInstanceOf(Telegraf);
	});
});
