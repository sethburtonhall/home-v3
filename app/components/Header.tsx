import { Navbar } from '.';

export type NavigationProps = {
  navigation: {
    id: number;
    links: { id: string; label: string; href: string }[];
  };
};

export default function Header({ navigation }: NavigationProps) {
  return (
    <div>
      <Navbar navigation={navigation} />
    </div>
  );
}
