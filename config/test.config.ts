import baseConfig from './global.config';
import { PlaywrightTestConfig } from '@playwright/test';

const { use, custom, ...rest } = baseConfig as any;

const config: PlaywrightTestConfig & { custom: typeof custom } = {
  ...rest,
  use: {
    ...use,
    baseURL: 'https://test.example.com',
  },
  custom: {
    ...custom,
    envName: 'test',
    apiUrl: 'https://api-test.example.com',
  },
};

export default config;
