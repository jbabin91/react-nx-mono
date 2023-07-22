import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  client: {
    APP_NAME: z.string(),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    VERSION: z.string(),
  },
  clientPrefix: '',
  runtimeEnv: {
    APP_NAME: process.env['NX_APP_NAME'],
    NODE_ENV: process.env['NODE_ENV'],
    VERSION: process.env['VERSION'],
  },
});
