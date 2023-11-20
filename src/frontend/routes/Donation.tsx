import { usePage } from "../hooks/usePage";
import { trpc } from "../utils/trpc";
import { Link, useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams();
  const cursor = searchParams.get("cursor");
  const { data } = trpc.donationList.useQuery(cursor ? parseInt(cursor) : 0);

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
          {data?.donations?.map(({ id, donation }) => {
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
      {data?.previousCursor >= 0 ? (
        <Link to={"?cursor=" + data.previousCursor}>Previous</Link>
      ) : null}
      {data?.nextCursor ? (
        <Link to={"?cursor=" + data.nextCursor}>Next</Link>
      ) : null}
    </>
  );
}
