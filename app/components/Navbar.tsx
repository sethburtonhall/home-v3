import { Theme, useTheme } from '~/utils/theme-provider';
import type { NavigationProps } from './Header';

export default function Navbar({ navigation }: NavigationProps) {
  const { links } = navigation;
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <nav className="flex justify-between items-center p-3">
      <a className="flex-grow" href="/">
        Seth Hall
      </a>
      <div className="flex justify-between">
        {links.map((link) => (
          <a key={link.id} className="p-3" href={link.href}>
            {link.label}
          </a>
        ))}
        <button onClick={toggleTheme} className="text-3xl">
          {theme === Theme.LIGHT ? '🌚' : '🌝'}
        </button>
      </div>
    </nav>
  );
}
