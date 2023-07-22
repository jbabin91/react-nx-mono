import { env } from '@react-nx-mono/env';

import NxWelcome from './nx-welcome';

export function App() {
  console.log('App Name', env.APP_NAME);
  console.log('App Name', env.NODE_ENV);
  return (
    <div>
      <NxWelcome title={env.APP_NAME} />
    </div>
  );
}

export default App;
