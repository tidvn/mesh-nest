import {
  CONTEXT_PATH,
  NODE_ENV,
  PORT,
  SWAGGER_DESCRIPTION,
  SWAGGER_PATH,
  SWAGGER_TITLE,
  SWAGGER_VERSION,
} from '@/app.environment';
import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: PORT,
    context_path: CONTEXT_PATH,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: NODE_ENV !== 'production',
    title: SWAGGER_TITLE,
    description: SWAGGER_DESCRIPTION,
    version: SWAGGER_VERSION,
    path: SWAGGER_PATH,
  },
  graphql: {
    playgroundEnabled: NODE_ENV !== 'production',
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
