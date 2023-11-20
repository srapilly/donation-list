import { publicProcedure } from "../trpc";
import donations from "../../frontend/assets/donations.json";
import { z } from "zod";

const LIMIT = 10;

export const donationList = publicProcedure
  .input(z.number())
  .query(({ input }) => {
    const nextCursor = input + LIMIT;
    const previousCursor = input - LIMIT;

    const sortedDonations = donations.sort(
      (a, b) => b.donation.createdAtUtc - a.donation.createdAtUtc,
    );

    return {
      previousCursor: previousCursor >= 0 ? previousCursor : undefined,
      nextCursor: nextCursor < donations.length - 1 ? nextCursor : undefined,
      donations: sortedDonations.slice(input, input + LIMIT),
    };
  });
