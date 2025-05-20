import baseConfig from './global.config';
import { PlaywrightTestConfig } from '@playwright/test';

const { use, custom, ...rest } = baseConfig as any;

const config: PlaywrightTestConfig & { custom: typeof custom } = {
  ...rest,
  use: {
    ...use,
    baseURL: 'https://dev.example.com',
  },
  custom: {
    ...custom,
    envName: 'dev',
    apiUrl: 'https://api-dev.example.com',
  },
};

export default config;
