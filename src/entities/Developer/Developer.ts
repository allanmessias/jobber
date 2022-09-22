export interface IDeveloperProps {
	firstName: string;
	lastName: string;
	userName: string;
}

export class Developer {
	private id!: number;

	constructor(private developerProps: IDeveloperProps) {
		this.developerProps = developerProps;
	}
}
