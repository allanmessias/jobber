import { Logger } from 'winston';

export interface IWinstonLogger {
	logInfo(message: any): Logger;
	logError(message: any): Logger;
}
