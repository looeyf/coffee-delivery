import { Link } from 'react-router';

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/checkout">Checkout</Link>
    </>
  );
}
