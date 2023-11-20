import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../server";
import type { inferRouterOutputs } from "@trpc/server";

type RouterOutput = inferRouterOutputs<AppRouter>;
export type donationListOutput = RouterOutput["donationList"];
export const trpc = createTRPCReact<AppRouter>();
