export class DeveloperSpy implements IDeveloper {
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

const makeSut = () => {
	const sut = new DeveloperSpy('Allan', 'Chat1');

	return sut;
};

describe('Developer', () => {
	it('Should return developers name', () => {
		const sut = makeSut();
		expect(sut.getDeveloperName()).toBe('Allan');
	});
});
