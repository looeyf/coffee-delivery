import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { DefaultLayout } from './layouts/DefaultLayout';
import { OrderSuccess } from './pages/OrderSuccess';

// eslint-disable-next-line react-refresh/only-export-components
export enum PAGE_ROUTES_ENUM {
  HOME = '/',
  CHECKOUT = '/checkout',
  ORDER_SUCCESS = '/order-success',
}

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path={PAGE_ROUTES_ENUM.CHECKOUT} element={<Checkout />} />
        <Route
          path={PAGE_ROUTES_ENUM.ORDER_SUCCESS}
          element={<OrderSuccess />}
        />
      </Route>
    </Routes>
  );
}
