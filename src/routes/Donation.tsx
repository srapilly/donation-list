import { usePage } from "../hooks/usePage";
import donations from "../assets/donations.json";

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
                <td>{donation.createdAtUtc}</td>
                <td>
                  {donation.firstName} {donation.lastName}
                </td>
                <td>{donation.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
