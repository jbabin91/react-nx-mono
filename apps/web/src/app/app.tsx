import { env } from '@react-nx-mono/env';

import NxWelcome from './nx-welcome';

export function App() {
  console.log('ENV VARIABLES:', {
    APP_NAME: env.APP_NAME,
    APP_VERSION: env.APP_VERSION,
    CONFIG_ONE: env.CONFIG_ONE,
  });
  return (
    <div>
      <NxWelcome title={env.APP_NAME} />
    </div>
  );
}

export default App;
