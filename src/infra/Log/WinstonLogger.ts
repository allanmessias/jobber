import * as winston from 'winston';

export class WinstonLogger {
	private winstonLogger: winston.Logger;

	constructor() {
		this.winstonLogger = winston.createLogger({
			transports: [
				new winston.transports.File({
					format: winston.format.combine(
						winston.format.json(),
						winston.format.timestamp(),
					),
					filename: 'logs/combineds.log',
				}),
			],
		});
	}

	logInfo(message: string): void {
		this.winstonLogger.info(message);
	}

	logError(message: string): void {
		this.winstonLogger.error(message);
	}
}
