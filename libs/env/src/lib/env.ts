import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  client: {
    APP_NAME: z.string(),
    APP_VERSION: z.string(),
    CONFIG_ONE: z.string().default('default config one'),
    CONFIG_THREE: z.string().default('default config three'),
    CONFIG_TWO: z.string().default('default config two'),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },
  clientPrefix: '',
  runtimeEnv: {
    APP_NAME: process.env['NX_APP_NAME'],
    APP_VERSION: process.env['VERSION'],
    CONFIG_ONE: process.env['NX_CONFIG_ONE'],
    CONFIG_THREE: process.env['NX_CONFIG_THREE'],
    CONFIG_TWO: process.env['NX_CONFIG_TWO'],
    NODE_ENV: process.env['NODE_ENV'],
  },
});
