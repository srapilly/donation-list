import { router, publicProcedure } from "./trpc";
import donations from "../assets/donations.json";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";

const appRouter = router({
  donationList: publicProcedure.query(() => {
    return donations;
  }),
});
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(8080);
