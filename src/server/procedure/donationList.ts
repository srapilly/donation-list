import { publicProcedure } from "../trpc";
import donations from "../../frontend/assets/donations.json";

export const donationList = publicProcedure.query(() => {
  return donations;
});
