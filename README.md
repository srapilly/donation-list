## How to Launch

To get started, install the project dependencies using `npm install`. Pre-commit hooks can be set up by running `npm run install-hooks`.

- Frontend: `npm run dev`
- Server: `npm run server`

Visit [localhost:3000](http://localhost:3000) in your browser.

End-to-End (E2E) tests can be executed with the following commands:

- `npm run test`
- `npm run test:ui`

## Stack Used

The frontend is a React Single Page Application (SPA) with [React Router](https://reactrouter.com/en/main), while the backend utilizes TRPC to handle API calls. [TRPC](https://trpc.io/) enables calling the backend from the frontend with end-to-end type safety, like a Remote Procedure Call (RPC). I wanted to try TRPC for a long time, making this project an ideal opportunity to try it!.

## Testing

Frontend and Backend are tested with end-to-end testing using [Playwright](https://playwright.dev/). Visual regression and accessibility testing could be added easily because we are using a real browser.

## Preparing for Production

Observability is crucial for production environments to gain insights into frontend and backend activities. What we could do:

- Implement Sentry for handling backend and frontend errors, facilitating error grouping and notifications for new errors.
- Configure the backend to send metrics, logs, and tracing data to an observability platform such as Datadog, NewRelic, or Grafana.
