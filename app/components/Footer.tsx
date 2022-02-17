import SocialIcons from './SocialIcons';
import MadeWith from './MadeWith';

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-between py-6 text-base font-semibold md:flex-row">
      <SocialIcons />
      <MadeWith />
    </footer>
  );
}
