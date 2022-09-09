class JobberBot {
	constructor(private readonly developer: IDeveloper) {}

	greets() {
		return `Olá ${this.developer.name}, ${this.greetingsByHour()}`;
	}

	greetingsByHour(): string {
		const hour = new Date().getHours();

		if (hour > 18) return 'boa noite';

		if (hour >= 12 || hour <= 18) return 'boa tarde';

		return 'bom dia';
	}
}
