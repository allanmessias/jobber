import { app } from './app';
import dotenv from 'dotenv';
import { config } from './infra/utils/configenv';

app.listen(config.PORT);
console.log(`Servidor rodando na porta: ${config.PORT}`);
