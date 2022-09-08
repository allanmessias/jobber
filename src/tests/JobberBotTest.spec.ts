/**
 * 1. Bot responde desenvolvedor com resposta
 * "Olá <nome_do_dev>, bom <dia><tarde><noite>"
 */

class JobberBot {
	constructor(private readonly developer: IDeveloper) {}

	greets() {
		return `Olá ${this.developer.name}, ${this.greetingsByHour()}`;
	}

	greetingsByHour(): string {
		const hour = new Date().getHours();
		if (hour > 18) {
			return 'boa noite';
		}

		if (hour >= 12 || hour <= 18) {
			return 'boa tarde';
		}

		return 'bom dia';
	}
}

interface IDeveloper {
	name: string;
}

class DeveloperSpy implements IDeveloper {
	public name = 'allan';
}

type SutTypes = {
	sut: JobberBot;
	developer: DeveloperSpy;
};

const sutFactory = (): SutTypes => {
	const developer = new DeveloperSpy();
	const sut = new JobberBot(developer);

	return { sut, developer };
};

describe('JobberBot', () => {
	it('Bot greets developer with a message', async () => {
		const { developer, sut } = sutFactory();
		expect(sut.greets()).toBe(
			`Olá ${developer.name}, ${sut.greetingsByHour()}`,
		);
	});
});
