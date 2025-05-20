import baseConfig from './global.config';
import { PlaywrightTestConfig } from '@playwright/test';

const { use, custom, ...rest } = baseConfig as any;

const config: PlaywrightTestConfig & { custom: typeof custom } = {
  ...rest,
  use: {
    ...use,
    baseURL: 'https://staging.example.com',
  },
  custom: {
    ...custom,
    envName: 'staging',
    apiUrl: 'https://api-staging.example.com',
  },
};

export default config;
