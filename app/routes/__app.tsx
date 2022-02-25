import { Outlet } from 'remix';

import { Header, Footer } from '~/components';

export default function Index() {
  return (
    <div className="relative overflow-hidden bg-white from-slate-900 to-slate-800 dark:bg-gradient-to-r">
      <div className="container relative mx-auto flex min-h-screen w-full select-none flex-col lg:w-3/4">
        <Header />
        <div className="mt-12 mb-24 px-4 lg:mt-24">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
