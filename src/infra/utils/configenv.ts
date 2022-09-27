import dotenv from 'dotenv';

interface ENV {
	BOT_TOKEN: string | undefined;
}

const getConfig = (): ENV => {
	dotenv.config();
	return {
		BOT_TOKEN: process.env.BOT_TOKEN,
	};
};

const envConfig = getConfig();

export { envConfig };
