import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

export function Root() {
  return (
    <>
      <>
        <header>
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
        </header>
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
      </>
    </>
  );
}
