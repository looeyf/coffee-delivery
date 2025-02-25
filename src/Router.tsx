import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { DefaultLayout } from './layouts/DefaultLayout';

// eslint-disable-next-line react-refresh/only-export-components
export enum PAGE_ROUTES_ENUM {
  HOME = '/',
  CHECKOUT = '/checkout',
}

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path={PAGE_ROUTES_ENUM.CHECKOUT} element={<Checkout />} />
      </Route>
    </Routes>
  );
}
