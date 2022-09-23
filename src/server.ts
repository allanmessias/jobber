import { app } from './app';
import dotenv from 'dotenv';
import { envConfig } from './infra/utils/configenv';

app.listen(envConfig.PORT);
console.log(`Servidor rodando na porta: ${envConfig.PORT}`);
