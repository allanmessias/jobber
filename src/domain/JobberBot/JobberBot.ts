<<<<<<< Updated upstream:src/domain/JobberBot/JobberBot.ts
class JobberBot {
	constructor(private readonly developer: IDeveloper) {}

	greets() {
		return `Olá ${this.developer.name}, ${this.greetingsByHour()}`;
=======
import { IDeveloperService } from '../Developer/IDeveloperService';
import { IBotConfig } from './IBotConfig';

export class JobberBot {
	constructor(private readonly botConfig: IBotConfig) {
		this.botConfig = botConfig;
>>>>>>> Stashed changes:src/entities/JobberBot/JobberBot.ts
	}

	greetingsByHour(): string {
		const hour = new Date().getHours();

		if (hour > 18) return 'boa noite';

		if (hour >= 12 || hour <= 18) return 'boa tarde';

		return 'bom dia';
	}
}
