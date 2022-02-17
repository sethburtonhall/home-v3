import { Outlet } from 'remix';

import { Header, Footer } from '~/components';

export default function Index() {
  return (
    <div className="bg-slate-50 from-slate-900 to-slate-800 dark:bg-gradient-to-r">
      <div className="container mx-auto flex flex-col lg:h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
