export class Developer implements IDeveloper {
	private id!: string;

	constructor(private readonly name: string, private readonly chat_id: string) {
		this.name = name;
		this.chat_id = chat_id;
	}

	getDeveloperName() {
		return this.name;
	}

	getChatId() {
		return this.chat_id;
	}
}
