import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
