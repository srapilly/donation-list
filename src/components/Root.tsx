import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

export function Root() {
  return (
    <>
      <>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="donation">Donation</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
      </>
    </>
  );
}
