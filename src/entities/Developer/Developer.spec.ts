export interface IDeveloperProps {
	firstName: string;
	lastName: string;
	userName: string;
}

export class DeveloperSpy {
	private id!: number;

	constructor(private developerProps: IDeveloperProps) {
		this.developerProps = developerProps;
	}

	getDeveloperName() {
		return this.developerProps.firstName + ' ' + this.developerProps.lastName;
	}
}

const makeSut = () => {
	const sut = new DeveloperSpy({
		firstName: 'allan',
		lastName: 'messias',
		userName: 'allanmessias',
	});

	return sut;
};

describe('Developer', () => {
	it('Should return developers name', () => {
		const sut = makeSut();
		expect(sut.getDeveloperName()).toBe('allan messias');
	});
});
