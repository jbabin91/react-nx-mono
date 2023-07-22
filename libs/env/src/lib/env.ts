import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  client: {
    APP_NAME: z.string(),
    APP_VERSION: z.string(),
    CONFIG_ONE: z.string().default('default config one'),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },
  clientPrefix: '',
  runtimeEnv: {
    APP_NAME: process.env['NX_APP_NAME'],
    NODE_ENV: process.env['NODE_ENV'],
    NX_CONFIG_ONE: process.env['NX_CONFIG_ONE'],
    VERSION: process.env['VERSION'],
  },
});
