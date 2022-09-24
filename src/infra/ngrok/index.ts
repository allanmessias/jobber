import { BotApiConfig } from '../config/BotApiConfig';
import { envConfig } from '../utils/configenv';
import { WebhookService } from './WebhookService';

const whService = new WebhookService(envConfig.NGROK_TOKEN);
const botApi = new BotApiConfig();

botApi.launchWebhook(whService.getTunnelPublicUrl(), envConfig.BOT_TOKEN);
