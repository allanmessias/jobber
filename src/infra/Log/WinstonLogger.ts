import * as winston from 'winston';
import { Logger } from 'winston';
import { IWinstonLogger } from './IWinstonLogger';

export class WinstonLogger implements IWinstonLogger {
	private winstonLogger: winston.Logger;

	constructor() {
		this.winstonLogger = winston.createLogger({
			transports: [
				new winston.transports.File({
					format: winston.format.combine(
						winston.format.json(),
						winston.format.timestamp({
							format: 'MM-YY-DD',
						}),
						winston.format.printf(
							(info) => `${info.level}: : ${[info.timestamp]}: ${info.message}`,
						),
					),
					filename: 'logs/combineds.log',
				}),
			],
		});
	}

	logInfo(message: string): Logger {
		return this.winstonLogger.info(message);
	}

	logError(message: string): Logger {
		return this.winstonLogger.error(message);
	}
}
