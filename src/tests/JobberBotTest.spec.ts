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

import { IWinstonLogger } from '../infra/Log/IWinstonLogger';
import { WinstonLogger } from '../infra/Log/WinstonLogger';

class JobberBotSpy {
	constructor(
		private readonly developer: IDeveloper,
		private readonly logger: IWinstonLogger,
	) {}

	greets() {
		this.logger.logInfo('Saudando developer');
		return `Olá ${this.developer.name}, ${this.greetingsByHour()}`;
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

interface IDeveloper {
	name: string;
}

class DeveloperSpy implements IDeveloper {
	public name = 'allan';
}

type SutTypes = {
	sut: JobberBotSpy;
	developer: DeveloperSpy;
	winstonLogger: WinstonLogger;
};

const sutFactory = (): SutTypes => {
	const developer = new DeveloperSpy();
	const winstonLogger = new WinstonLogger();
	const sut = new JobberBotSpy(developer, winstonLogger);
	// const crawler = new CrawlerSpy(sut);

	return { sut, developer, winstonLogger };
};

describe('JobberBot', () => {
	it('Should greets developer with a message', () => {
		const { developer, sut } = sutFactory();
		expect(sut.greets()).toBe(
			`Olá ${developer.name}, ${sut.greetingsByHour()}`,
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

	// it('Should search for jobs on the internet or whatever', async () => {
	// 	const { crawler } = sutFactory();
	// 	expect(crawler.searchForJobs()).;
	// });
});
