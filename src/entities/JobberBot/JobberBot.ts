export class JobberBot {
	constructor(private readonly developer: IDeveloper) {}

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
