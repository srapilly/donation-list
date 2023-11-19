import { usePage } from "../hooks/usePage";
import donations from "../assets/donations.json";

function timestampToFormattedDate(timestamp: number) {
  const date = new Date(timestamp);

  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
    day: "2-digit",
  }).format(date);
}

export function Donation() {
  usePage("Donation");

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
    </>
  );
}
