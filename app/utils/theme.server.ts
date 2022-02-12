import { createCookieSessionStorage } from 'remix';
import { Theme, isTheme } from './theme-provider';

// Secrets are used to sign a cookie’s value. The server then uses the secrets to verify that the value hasn’t been modified or tampered with. Secret needs to be secrect so we’ll just load the secret from an environment variable.
const sessionSecrect = process.env.SESSION_SECRET;
if (!sessionSecrect) {
  throw new Error('SESSION_SECRET is not set');
}

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    secure: true,
    secrets: [sessionSecrect],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'));
  return {
    getTheme: () => {
      const themeValue = session.get('theme');
      return isTheme(themeValue) ? themeValue : Theme.LIGHT;
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };
