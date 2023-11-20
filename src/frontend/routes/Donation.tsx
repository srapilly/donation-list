import { usePage } from "../hooks/usePage";
import { trpc } from "../utils/trpc";

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

export function Donation() {
  usePage("Donation");
  const { data: donations } = trpc.donationList.useQuery();

  return (
    <>
      <h1>Donations</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {donations?.map(({ id, donation }) => {
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
    </>
  );
}
