import { IBotConfig } from '../../entities/JobberBot/IBotConfig';

export class JobberBot {
	constructor(private readonly botConfig: IBotConfig) {
		this.botConfig = botConfig;
	}

	greetingsByHour(): string {
		const hour = new Date().getHours();

		if (hour > 18) return 'boa noite';

		if (hour >= 12 || hour <= 18) return 'boa tarde';

		return 'bom dia';
	}
}
