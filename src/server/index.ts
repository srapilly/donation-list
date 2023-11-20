import { router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { donationList } from "./procedure/donationList";

const appRouter = router({
  donationList,
});
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(8080);
