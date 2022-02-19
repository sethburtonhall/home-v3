import { SocialIcons } from '.';
import { MadeWith } from '.';

export default function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-between py-6 text-base font-semibold md:flex-row">
      <SocialIcons />
      <MadeWith />
    </footer>
  );
}
