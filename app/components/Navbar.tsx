import { Link } from 'remix';
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
    <nav className="flex items-center justify-between p-3">
      <Link to="/" className="styled-link font-logo p-2 px-3 text-5xl">
        Seth Hall
      </Link>
      <div className="flex flex-grow justify-end">
        {links.map((link) => (
          <Link
            key={link.id}
            className="from-indigo-500 to-indigo-600 p-3 font-semibold hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
            to={link.href}
          >
            {link.label}
          </Link>
        ))}
        <button onClick={toggleTheme} className="text-3xl">
          {theme === Theme.LIGHT ? '🌚' : '🌝'}
        </button>
      </div>
    </nav>
  );
}
