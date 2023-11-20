import { useEffect, useState } from "react";
import { usePage } from "../hooks/usePage";
import { donationListOutput, trpc } from "../utils/trpc";

function timestampToFormattedDate(timestamp: number) {
  const date = new Date(timestamp);

  // Use user locale
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    day: "2-digit",
  }).format(date);
}

export function DonationInfinite() {
  usePage("Donation Infinite");
  const [cursor, setCursor] = useState(0);
  const [donations, setDonations] = useState<donationListOutput["donations"]>(
    [],
  );
  const { data } = trpc.donationList.useQuery(cursor);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (bottom) {
      const nextCursor = data?.nextCursor;

      if (nextCursor) {
        setCursor(nextCursor);
      }
    }
  };

  useEffect(() => {
    if (data) {
      setDonations((prevState) => [...prevState, ...data.donations]);
    }
  }, [data]);

  return (
    <>
      <h1>Donations</h1>
      <div
        style={{
          overflow: "scroll",
          height: "50vh",
        }}
        onScroll={handleScroll}
      >
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {donations.map(({ id, donation }) => {
              return (
                <tr key={id}>
                  <td>{timestampToFormattedDate(donation.createdAtUtc)}</td>
                  <td>
                    {donation.firstName} {donation.lastName}
                  </td>
                  <td>${donation.amount / 100}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
