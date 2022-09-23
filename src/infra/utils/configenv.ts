import dotenv from 'dotenv';

dotenv.config();

interface ENV {
	NODE_ENV: string | undefined;
	PORT: number | undefined;
	BOT_TOKEN: string | undefined;
	NGROK_TOKEN: string | undefined;
}

const getConfig = (): ENV => {
	return {
		NODE_ENV: process.env.NODE_ENV,
		PORT: process.env.PORT,
		BOT_TOKEN: process.env.BOT_TOKEN,
		NGROK_TOKEN: process.env.TUNNEL,
	};
};

const envConfig = getConfig();

export { envConfig };
